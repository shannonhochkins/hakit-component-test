import { importShared } from './__federation_fn_import-D9ReRsJu.js';
import { j as jsx, F as Fragment } from './emotion-react-jsx-runtime.browser.esm-DGwdlQJW.js';

const {ThemeProvider} = await importShared('@hakit/components');

const {useEffect,useRef} = await importShared('react');

const {DEFAULT_THEME_OPTIONS} = await importShared('@hakit/components');

const {useHass} = await importShared('@hakit/core');

const index = {
  label: "Root",
  category: "other",
  withSizeOptions: false,
  fields: {
    dashboards: {
      type: "array",
      default: [],
      collapsible: {
        open: true
      },
      getItemSummary: (item, i) => item.title || `Dashboard #${i}`,
      defaultItemProps: {
        title: "Dashboard",
        id: null
      },
      arrayFields: {
        title: {
          type: "text",
          label: "Dashboard Title",
          default: "Dashboard",
          disableBreakpoints: true
        },
        id: {
          type: "hidden"
        }
      },
      label: "Manage Dashboards",
      disableBreakpoints: true,
      description: "Add an entirely new dashboard"
    },
    viewports: {
      type: "array",
      default: [],
      collapsible: {
        open: false
      },
      min: 5,
      max: 5,
      getItemSummary: (item, i) => item.label || `Viewport #${i}`,
      defaultItemProps: {
        label: "Viewport",
        width: 0,
        disabled: false
      },
      disableBreakpoints: true,
      arrayFields: {
        label: {
          type: "hidden"
        },
        width: {
          type: "number",
          label: "Viewport Width",
          default: "",
          disableBreakpoints: true
        },
        disabled: {
          disableBreakpoints: true,
          type: "radio",
          default: false,
          label: "Behavior",
          options: [{
            label: "Enabled",
            value: false
          }, {
            label: "Disabled",
            value: true
          }]
        }
      },
      label: "Manage Viewports",
      description: "Configure viewports"
    },
    theme: {
      type: "object",
      default: {},
      label: "Theme Options",
      disableBreakpoints: true,
      collapsible: {
        open: true
      },
      description: "Main theme controls for the dashboard",
      objectFields: {
        hue: {
          type: "slider",
          default: DEFAULT_THEME_OPTIONS.hue,
          label: "Hue",
          description: "Change the overall hue of the colors",
          min: 0,
          max: 360,
          step: 1,
          disableBreakpoints: true
        },
        darkMode: {
          type: "radio",
          default: DEFAULT_THEME_OPTIONS.darkMode,
          label: "Dark Mode",
          description: "Toggle dark mode",
          options: [{
            label: "Enabled",
            value: true
          }, {
            label: "Disabled",
            value: false
          }],
          disableBreakpoints: true
        },
        tint: {
          type: "slider",
          default: DEFAULT_THEME_OPTIONS.tint,
          label: "Shade Tint",
          description: "Will change the hue tint for the shade colors",
          min: 0,
          max: 1,
          step: 0.05,
          disableBreakpoints: true
        },
        saturation: {
          type: "slider",
          default: DEFAULT_THEME_OPTIONS.saturation,
          label: "Saturation",
          description: "Control the saturation of the color",
          min: 0,
          max: 100,
          step: 1,
          disableBreakpoints: true
        },
        lightness: {
          type: "slider",
          default: DEFAULT_THEME_OPTIONS.lightness,
          label: "Lightness",
          description: "Control how bright the primary colors are",
          min: 0,
          max: 100,
          step: 1,
          disableBreakpoints: true
        },
        contrastThreshold: {
          type: "slider",
          default: DEFAULT_THEME_OPTIONS.contrastThreshold,
          label: "Contrast Threshold",
          description: "Changes output calculation for text color",
          min: 0,
          max: 100,
          step: 1,
          disableBreakpoints: true
        }
      }
    }
  },
  resolveData: async (data) => {
    const props = data.props;
    if (props?.dashboards) {
      const shallowCopy = [...props.dashboards].map((dashboard) => ({
        ...dashboard
      }));
      props.dashboards = shallowCopy;
    }
    return {
      ...data
    };
  },
  render({
    DropZone,
    editMode,
    data,
    editorFrame
  }) {
    const {
      useStore
    } = useHass();
    const hasSetWindowContext = useRef(false);
    const setWindowContext = useStore((store) => store.setWindowContext);
    const windowContext = useStore((store) => store.windowContext);
    const container = editMode ? editorFrame : document.head;
    useEffect(() => {
      const newWindowContext = container?.contentWindow;
      if (editMode && windowContext !== newWindowContext && hasSetWindowContext.current === false && typeof newWindowContext !== "undefined" && newWindowContext) {
        setWindowContext(newWindowContext);
        hasSetWindowContext.current = true;
      }
    }, [container, editMode, windowContext, setWindowContext]);
    useEffect(() => {
      return () => {
        setWindowContext(window);
        hasSetWindowContext.current = false;
      };
    }, [setWindowContext]);
    if (!container) {
      return /* @__PURE__ */ jsx(Fragment, {});
    }
    if (editMode && !hasSetWindowContext.current) {
      return /* @__PURE__ */ jsx(Fragment, {});
    }
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
      ThemeProvider,
      {
        hue: data.root.props?.theme?.hue,
        saturation: data.root.props?.theme?.saturation,
        lightness: data.root.props?.theme?.lightness,
        contrastThreshold: data.root.props?.theme?.contrastThreshold,
        tint: data.root.props?.theme?.tint,
        darkMode: data.root.props?.theme?.darkMode,
        globalStyles: `
        --ha-hide-body-overflow-y: hidden;
      `,
        children: /* @__PURE__ */ jsx(DropZone, { zone: "default-zone", style: {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          // stretch the children
          alignItems: "stretch"
        } })
      }
    ) });
  }
};

export { index as default };
