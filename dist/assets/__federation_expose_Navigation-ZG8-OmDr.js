import { j as jsx, a as jsxs } from './emotion-react-jsx-runtime.browser.esm-DGwdlQJW.js';
import { importShared } from './__federation_fn_import-D9ReRsJu.js';
import { c as createStyled } from './emotion-styled-base.browser.esm-U9y8z5J2.js';

const {TimeCard} = await importShared('@hakit/components');

const NavigationClock = /* @__PURE__ */ createStyled(TimeCard, {
  target: "e1nnemuf0"
} )({
  name: "1l04ghp",
  styles: "&.card-base{border:none;background:transparent;&:hover,&:focus{&:not(:disabled){background:transparent;}}div:has(h4){>h4{white-space:nowrap;}}}"
} );

const {Row,FabCard,Menu} = await importShared('@hakit/components');
const Nav = /* @__PURE__ */ createStyled("nav", {
  target: "e173196a2"
} )({
  name: "zedglk",
  styles: "display:flex;padding:1rem"
} );
const Link = /* @__PURE__ */ createStyled("a", {
  target: "e173196a1"
} )({
  name: "14mquk0",
  styles: "color:rgba(255, 255, 255, 0.4);padding:1rem 2rem;transition:color var(--ha-transition-duration) var(--ha-easing);cursor:pointer;&:hover,&:focus{color:rgba(255, 255, 255, 0.8);}&.active{color:rgba(255, 255, 255, 1);}"
} );
const TransparentFabCard = /* @__PURE__ */ createStyled(FabCard, {
  target: "e173196a0"
} )({
  name: "1qbnqhg",
  styles: "&.card-base{border:none;background:transparent;}"
} );
function NavigationBar({
  options,
  clockOptions,
  ...props
}) {
  const pages = [];
  return /* @__PURE__ */ jsx(Nav, { ...props, children: /* @__PURE__ */ jsxs(Row, { fullWidth: true, wrap: "nowrap", justifyContent: "space-between", children: [
    !options?.hideClock && /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(NavigationClock, { timeEntity: clockOptions?.timeEntity, dateEntity: clockOptions?.dateEntity, dateFormat: clockOptions?.hideDate || clockOptions?.useDateEntity ? void 0 : clockOptions?.dateFormat, timeFormat: clockOptions?.hideTime || clockOptions?.useTimeEntity ? void 0 : clockOptions?.timeFormat, hideDate: clockOptions?.hideDate, hideTime: clockOptions?.hideTime, hideIcon: clockOptions?.hideIcon, throttleTime: clockOptions?.useDateEntity || clockOptions?.useTimeEntity ? void 0 : clockOptions?.throttleTime, icon: clockOptions?.icon, disableColumns: true, disableRipples: true, disableScale: true, center: false, xxs: 12, xs: 12, sm: 12, md: 12, lg: 12, xlg: 12 }) }),
    /* @__PURE__ */ jsx(Row, { fullWidth: true, gap: "1rem", children: pages.map((page) => /* @__PURE__ */ jsx(Link, { className: page.active ? "active" : "", children: page.title }, page.id)) }),
    /* @__PURE__ */ jsx(Row, { children: /* @__PURE__ */ jsx(Menu, { items: [{
      active: true,
      icon: "mdi:edit",
      label: "Edit",
      onClick: () => {
      }
    }], placement: "bottom", children: /* @__PURE__ */ jsx(TransparentFabCard, { icon: "mdi:dots-vertical" }) }) })
  ] }) });
}

function filterEntitiesByDomains(entities, ...domains) {
  const values = Array.isArray(entities) ? entities : Object.values(entities);
  return values.filter((entity) => domains.includes(entity.entity_id.split(".")[0]));
}
const index = {
  category: "Misc",
  label: "Navigation",
  fields: {
    options: {
      type: "object",
      default: {},
      label: "Options",
      description: "General options for the navigation bar",
      collapsible: {
        open: true
      },
      objectFields: {
        hideClock: {
          type: "radio",
          label: "Hide Clock",
          description: "Hide the clock in the navigation bar",
          options: [{
            label: "Yes",
            value: true
          }, {
            label: "No",
            value: false
          }],
          default: false
        }
      }
    },
    clockOptions: {
      type: "object",
      label: "Clock Options",
      description: "Options for the clock within the navigation bar",
      collapsible: {
        open: true
      },
      default: {},
      objectFields: {
        hideTime: {
          type: "radio",
          label: "Hide Time",
          description: "Hide the time in the clock",
          options: [{
            label: "Yes",
            value: true
          }, {
            label: "No",
            value: false
          }],
          default: false
        },
        useTimeEntity: {
          type: "radio",
          label: "Use Time Entity",
          description: "Use a time entity from your home assistant instance",
          options: [{
            label: "Yes",
            value: true
          }, {
            label: "No",
            value: false
          }],
          default: true
        },
        timeEntity: {
          type: "entity",
          description: 'The entity to use for the time, entity ID must contain the word "time"',
          label: "Time Entity",
          options(data) {
            return filterEntitiesByDomains(data.entities, "sensor").filter((entity) => entity.entity_id.includes("time"));
          },
          default: (options) => {
            const defaultEntity = options.find((entity) => entity.entity_id === "sensor.time");
            return defaultEntity?.entity_id ?? void 0;
          }
        },
        timeFormat: {
          type: "text",
          label: "Time Format",
          description: "The format to use for the time",
          // helpLink: TODO
          default: "hh:mm a"
          // maybe change this to a dropdown menu with multiple differnt options
        },
        throttleTime: {
          type: "number",
          description: "The time in milliseconds to throttle the time updates when no entity is provided",
          label: "Throttle Time",
          default: 1e3
        },
        hideDate: {
          type: "radio",
          label: "Hide Date",
          description: "Hide the date in the clock",
          options: [{
            label: "Yes",
            value: true
          }, {
            label: "No",
            value: false
          }],
          default: true
        },
        useDateEntity: {
          type: "radio",
          label: "Use Date Entity",
          description: "Use a date entity from your home assistant instance",
          options: [{
            label: "Yes",
            value: true
          }, {
            label: "No",
            value: false
          }],
          default: true
        },
        dateEntity: {
          type: "entity",
          label: "Date Entity",
          description: 'The entity to use for the date, entity ID must contain the word "date"',
          options(data) {
            return filterEntitiesByDomains(data.entities, "sensor").filter((entity) => entity.entity_id.includes("date"));
          },
          default: (options) => {
            const defaultEntity = options.find((entity) => entity.entity_id === "sensor.date");
            return defaultEntity?.entity_id ?? void 0;
          }
        },
        dateFormat: {
          type: "text",
          label: "Date Format",
          description: "The format to use for the date",
          // helpLink: TODO
          default: "dddd, MMMM DD YYYY"
          // maybe change this to a dropdown menu with multiple differnt options
        },
        hideIcon: {
          type: "radio",
          label: "Hide Icon",
          description: "Hide the icon in the clock",
          options: [{
            label: "Yes",
            value: true
          }, {
            label: "No",
            value: false
          }],
          default: true
        },
        icon: {
          type: "text",
          label: "Icon",
          description: "The icon to use for the clock",
          // helpLink: TODO
          default: "mdi:calendar"
        }
      }
    }
  },
  resolveFields: async (data, params) => {
    const fields = params.fields;
    const hideClock = data.props?.options?.hideClock ?? false;
    const hideTime = data.props?.clockOptions?.hideTime ?? false;
    const hideDate = data.props?.clockOptions?.hideDate ?? false;
    const hideIcon = data.props?.clockOptions?.hideIcon ?? true;
    const useTimeEntity = data.props?.clockOptions?.useTimeEntity ?? true;
    const useDateEntity = data.props?.clockOptions?.useDateEntity ?? true;
    if (hideClock) {
      fields.clockOptions._field.type = "hidden";
    } else {
      fields.clockOptions._field.type = "object";
    }
    if (fields.clockOptions._field.type === "object") {
      if (fields.clockOptions._field.objectFields.timeEntity?._field.type) {
        fields.clockOptions._field.objectFields.timeEntity._field.type = useTimeEntity && !hideTime ? "entity" : "hidden";
      }
      if (fields.clockOptions._field.objectFields.useTimeEntity?._field.type) {
        fields.clockOptions._field.objectFields.useTimeEntity._field.type = !hideTime ? "radio" : "hidden";
      }
      if (fields.clockOptions._field.objectFields.useDateEntity?._field.type) {
        fields.clockOptions._field.objectFields.useDateEntity._field.type = !hideDate ? "radio" : "hidden";
      }
      if (fields.clockOptions._field.objectFields.dateEntity?._field.type) {
        fields.clockOptions._field.objectFields.dateEntity._field.type = useDateEntity && !hideDate ? "entity" : "hidden";
      }
      if (fields.clockOptions._field.objectFields.timeFormat?._field.type) {
        fields.clockOptions._field.objectFields.timeFormat._field.type = useTimeEntity || hideTime ? "hidden" : "text";
      }
      if (fields.clockOptions._field.objectFields.dateFormat?._field.type) {
        fields.clockOptions._field.objectFields.dateFormat._field.type = useDateEntity || hideDate ? "hidden" : "text";
      }
      if (fields.clockOptions._field.objectFields.throttleTime?._field.type) {
        fields.clockOptions._field.objectFields.throttleTime._field.type = useTimeEntity || hideTime ? "hidden" : "number";
      }
      if (fields.clockOptions._field.objectFields.icon?._field.type) {
        fields.clockOptions._field.objectFields.icon._field.type = !hideIcon ? "text" : "hidden";
      }
    }
    return fields;
  },
  permissions: {
    delete: true,
    drag: true,
    duplicate: false
  },
  inline: true,
  render({
    dragRef,
    options,
    clockOptions
  }) {
    return /* @__PURE__ */ jsx(NavigationBar, { clockOptions, options, ref: dragRef });
  }
};

export { index as default };
