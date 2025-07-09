#!/usr/bin/env node

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distMfDir = path.join(rootDir, 'versions');

const app = express();
const PORT = 3001;

// MIME type mapping
const mimeTypes = {
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.html': 'text/html',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

// Enable CORS for all routes
app.use(cors({
  origin: '*',
  methods: ['GET', 'HEAD', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Custom static file handler with proper MIME types
app.use((req, res, next) => {
  const filePath = path.join(distMfDir, req.path);
  const ext = path.extname(req.path).toLowerCase();
  
  // Check if file exists
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    // Set proper MIME type
    const mimeType = mimeTypes[ext] || 'application/octet-stream';
    res.setHeader('Content-Type', mimeType);
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Log the request for debugging
    console.log(`📄 Serving: ${req.path} (${mimeType})`);
    
    // Send the file
    res.sendFile(filePath);
  } else {
    next();
  }
});

// Fallback for files not found
app.use((req, res) => {
  console.log(`❌ File not found: ${req.path}`);
  res.status(404).json({ error: 'File not found', path: req.path });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Module Federation server running at http://localhost:${PORT}`);
  console.log(`📋 Manifest available at: http://localhost:${PORT}/mf-manifest.json`);
  console.log(`📁 Serving files from: ${distMfDir}`);
});
