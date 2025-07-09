#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';
import archiver from 'archiver';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const packageJsonPath = path.join(rootDir, 'package.json');
const versionsDir = path.join(rootDir, 'versions');
const distMfDir = path.join(rootDir, 'dist', 'mf');

// Read package.json to get version
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const version = packageJson.version;
const zipFileName = `${packageJson.name}-v${version}.zip`;
const zipFilePath = path.join(versionsDir, zipFileName);

const DEBUG_MODE = true;

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function log(message, type = 'info') {
  if (DEBUG_MODE) {
    if (type === 'error') {
      console.error(message);
    } else {
      console.log(message);
    }
  }
}

// Function to prompt user for yes/no
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.toLowerCase().trim());
    });
  });
}

// Function to check if file should be excluded
function shouldExcludeFile(filePath) {
  const excludeExtensions = ['.txt', '.ts', '.map'];
  const excludePatterns = [
    /\.LICENSE\.txt$/,
    /\.d\.ts$/,
    /\.ts\.map$/,
    /\.js\.map$/,
    /\.css\.map$/
  ];
  
  const ext = path.extname(filePath);
  if (excludeExtensions.includes(ext)) {
    return true;
  }
  
  return excludePatterns.some(pattern => pattern.test(filePath));
}

// Function to determine if a file should be kept in the zip
function shouldKeepFile(fileName) {
  // For now, keep all files - you can modify this function later to filter files
  return true;
  
  // Future filtering logic can go here, for example:
  // return fileName.startsWith('__federation') || 
  //        fileName === 'mf-manifest.json' || 
  //        fileName === 'mf-stats.json' ||
  //        fileName === 'test.js';
}

// Function to get files from manifest and dist directory
function getFilesToInclude() {
  const manifestPath = path.join(distMfDir, 'mf-manifest.json');
  
  if (!fs.existsSync(manifestPath)) {
    throw new Error('mf-manifest.json not found in dist/mf directory');
  }
  
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const filesToInclude = new Set();
  
  // Always include the main entry files
  if (shouldKeepFile('mf-manifest.json')) {
    filesToInclude.add('mf-manifest.json');
  }
  if (shouldKeepFile('mf-stats.json')) {
    filesToInclude.add('mf-stats.json');
  }
  
  // Add the main remote entry file (e.g., test.js)
  if (manifest.metaData?.remoteEntry?.name && shouldKeepFile(manifest.metaData.remoteEntry.name)) {
    filesToInclude.add(manifest.metaData.remoteEntry.name);
  }
  
  // Extract files from exposes
  if (manifest.exposes && Array.isArray(manifest.exposes)) {
    for (const expose of manifest.exposes) {
      if (expose.assets) {
        // Check JS assets
        if (expose.assets.js) {
          // Add sync JS files
          if (expose.assets.js.sync) {
            for (const file of expose.assets.js.sync) {
              if (shouldKeepFile(file)) {
                filesToInclude.add(file);
              }
            }
          }
          
          // Add async JS files
          if (expose.assets.js.async) {
            for (const file of expose.assets.js.async) {
              if (shouldKeepFile(file)) {
                filesToInclude.add(file);
              }
            }
          }
        }
        
        // Check CSS assets
        if (expose.assets.css) {
          // Add sync CSS files
          if (expose.assets.css.sync) {
            for (const file of expose.assets.css.sync) {
              if (shouldKeepFile(file)) {
                filesToInclude.add(file);
              }
            }
          }
          
          // Add async CSS files
          if (expose.assets.css.async) {
            for (const file of expose.assets.css.async) {
              if (shouldKeepFile(file)) {
                filesToInclude.add(file);
              }
            }
          }
        }
      }
    }
  }
  
  // Also check shared dependencies for any additional files
  if (manifest.shared && Array.isArray(manifest.shared)) {
    for (const shared of manifest.shared) {
      if (shared.assets) {
        // Check JS assets in shared
        if (shared.assets.js) {
          if (shared.assets.js.sync) {
            for (const file of shared.assets.js.sync) {
              if (shouldKeepFile(file)) {
                filesToInclude.add(file);
              }
            }
          }
          if (shared.assets.js.async) {
            for (const file of shared.assets.js.async) {
              if (shouldKeepFile(file)) {
                filesToInclude.add(file);
              }
            }
          }
        }
        
        // Check CSS assets in shared
        if (shared.assets.css) {
          if (shared.assets.css.sync) {
            for (const file of shared.assets.css.sync) {
              if (shouldKeepFile(file)) {
                filesToInclude.add(file);
              }
            }
          }
          if (shared.assets.css.async) {
            for (const file of shared.assets.css.async) {
              if (shouldKeepFile(file)) {
                filesToInclude.add(file);
              }
            }
          }
        }
      }
    }
  }
  
  // Add any additional files from the dist/mf directory that might not be in the manifest
  function addDirectoryFiles(dir, baseDir = '') {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      const relativePath = path.join(baseDir, file);
      
      if (stat.isDirectory()) {
        addDirectoryFiles(filePath, relativePath);
      } else {
        if (shouldKeepFile(relativePath)) {
          filesToInclude.add(relativePath);
        }
      }
    }
  }
  
  addDirectoryFiles(distMfDir);
  
  log(`📋 Found ${filesToInclude.size} files to include:`);
  filesToInclude.forEach(file => log(`  - ${file}`));
  
  return filesToInclude;
}

// Function to create zip file
function createZipFile() {
  return new Promise((resolve, reject) => {
    log(`📦 Creating zip file: ${zipFileName}`);
    
    const output = createWriteStream(zipFilePath);
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    });

    output.on('close', () => {
      log(`✅ Archive created successfully: ${archive.pointer()} total bytes`);
      resolve();
    });

    archive.on('error', (err) => {
      reject(err);
    });

    archive.pipe(output);

    // Get files to include
    const filesToInclude = getFilesToInclude();
    
    // Add files to the archive
    for (const fileName of filesToInclude) {
      const filePath = path.join(distMfDir, fileName);
      
      if (fs.existsSync(filePath)) {
        if (!shouldExcludeFile(filePath)) {
          archive.file(filePath, { name: fileName });
          log(`  📄 Added: ${fileName}`);
        } else {
          log(`  ❌ Excluded: ${fileName}`);
        }
      } else {
        log(`  ⚠️  File not found: ${fileName}`);
      }
    }

    archive.finalize();
  });
}

// Main build process
async function build() {
  try {
    log(`🚀 Building Module Federation package v${version}...`);
    
    // Check if versions directory exists, create if not
    if (!fs.existsSync(versionsDir)) {
      fs.mkdirSync(versionsDir, { recursive: true });
      log(`📁 Created versions directory`);
    }
    
    // Check if zip file already exists
    if (fs.existsSync(zipFilePath)) {
      log(`⚠️  Version ${version} already exists at: ${zipFilePath}`);
      const answer = await askQuestion(`Would you like to replace it? (yes/no): `);
      
      if (answer !== 'yes' && answer !== 'y') {
        log('❌ Build cancelled.');
        rl.close();
        process.exit(1);
      }
      
      // Remove existing file
      fs.unlinkSync(zipFilePath);
      log(`🗑️  Removed existing file: ${zipFileName}`);
    }
    
    // Clean existing dist directory
    if (fs.existsSync(distMfDir)) {
      log('🧹 Cleaning existing build...');
      fs.rmSync(distMfDir, { recursive: true, force: true });
    }
    
    // Build only module federation
    log('🔨 Building module federation...');
    
    // Set environment variables for build
    const env = { ...process.env };
    
    // If ASSET_PREFIX is provided, use it for the build
    if (process.env.ASSET_PREFIX) {
      log(`🌐 Using asset prefix: ${process.env.ASSET_PREFIX}`);
    } else {
      log(`📍 Building with relative paths (no asset prefix)`);
    }
    
    try {
      execSync('npx rslib build', { 
        stdio: 'inherit',
        cwd: rootDir,
        env: env
      });
      log('✅ Build completed successfully');
    } catch (buildError) {
      log('⚠️  Build completed with some errors (likely TypeScript declaration issues), but continuing...', 'error');
      log(`Build error details: ${buildError.message}`);
    }
    
    // Check if build was successful
    if (!fs.existsSync(distMfDir)) {
      throw new Error('Module federation build failed - dist/mf directory not found');
    }
    
    // Create zip file
    await createZipFile();
    
    log(`🎉 Build completed successfully!`);
    log(`📦 Package: ${zipFileName}`);
    log(`📍 Location: ${zipFilePath}`);
    
    rl.close();
    
  } catch (error) {
    log('❌ Build failed:', error.message, 'error');
    rl.close();
    process.exit(1);
  }
}

// Run the build
build();
