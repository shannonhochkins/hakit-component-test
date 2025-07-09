import { FilterByDomain, type EntityName } from '@hakit/core';
import { NavigationBar } from './NavigationBar';
// TODO - Convert to shared package or type
export type Slide = {
  label?: string;
  id: string;
}

export interface NavigationProps {
  options: {
    hideClock?: boolean;    
  },
  clockOptions: {
    useTimeEntity?: boolean;
    timeEntity?: FilterByDomain<EntityName, 'sensor'>;
    dateEntity?: FilterByDomain<EntityName, 'sensor'>;
    useDateEntity?: boolean;
    timeFormat?: string;
    dateFormat?: string;
    hideDate?: boolean;
    hideTime?: boolean;
    hideIcon?: boolean;
    throttleTime?: number;
    icon?: string;
  }
}

function filterEntitiesByDomains(entities, ...domains) {
  const values = Array.isArray(entities) ? entities : Object.values(entities);
  return values.filter((entity) => domains.includes(entity.entity_id.split(".")[0]));
}

const config = {
  category: 'Misc',
  label: 'Navigation',
  fields: {
    options: {
      type: 'object',
      default: {},
      label: 'Options',
      description: 'General options for the navigation bar',
      collapsible: {
        open: true,
      },
      objectFields: {
        pages: {
          type: 'pages',
          label: 'Pages',
          default: [],
          description: 'Select pages to appear in the navigation bar',
        },
        hideClock: {
          type: 'radio',
          label: 'Hide Clock',
          description: 'Hide the clock in the navigation bar',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
          default: false,
        },
      }
    },
    clockOptions: {
      type: 'object',
      label: 'Clock Options',
      description: 'Options for the clock within the navigation bar',
      collapsible: {
        open: true,
      },
      default: {},
      visible(data: NavigationProps) {
        return !data.options?.hideClock;
      },
      objectFields: {
        hideTime: {
          type: 'radio',
          label: 'Hide Time',
          description: 'Hide the time in the clock',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
          default: false,
        },
        useTimeEntity: {
          type: 'radio',
          label: 'Use Time Entity',
          description: 'Use a time entity from your home assistant instance',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
          default: true,
          visible(data: NavigationProps) {
            return !data.clockOptions?.hideTime;
          },
        },
        timeEntity: {
          type: 'entity',
          description: 'The entity to use for the time, entity ID must contain the word "time"',
          label: 'Time Entity',
          options(data) {
            return filterEntitiesByDomains(data.entities, 'sensor').filter(entity => entity.entity_id.includes('time'));
          },
          default: (options) => {
            const defaultEntity = options.find(entity => entity.entity_id === 'sensor.time');
            return defaultEntity?.entity_id ?? undefined;
          },
          visible(data: NavigationProps) {
            return data.clockOptions?.useTimeEntity && !data.clockOptions?.hideTime;
          }
        },
        timeFormat: {
          type: 'text',
          label: 'Time Format',
          description: 'The format to use for the time',
          // helpLink: TODO
          default: 'hh:mm a', // maybe change this to a dropdown menu with multiple different options
          visible(data: NavigationProps) {
            // only visible when useTimeEntity is false and hideTime is false
            return !data.clockOptions?.useTimeEntity && !data.clockOptions?.hideTime;
          }
        },
        throttleTime: {
          type: 'number',
          description: 'The time in milliseconds to throttle the time updates when no entity is provided',
          label: 'Throttle Time',
          default: 1000,
          visible(data: NavigationProps) {
            return !data.clockOptions?.useTimeEntity && !data.clockOptions?.hideTime;
          }
        },
        hideDate: {
          type: 'radio',
          label: 'Hide Date',
          description: 'Hide the date in the clock',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
          default: true,
        },
        useDateEntity: {
          type: 'radio',
          label: 'Use Date Entity',
          description: 'Use a date entity from your home assistant instance',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
          default: true,
          visible(data: NavigationProps) {
            return !data.clockOptions?.hideDate;
          },
        },
        dateEntity: {
          type: 'entity',
          label: 'Date Entity',
          description: 'The entity to use for the date, entity ID must contain the word "date"',
          options(data) {
            return filterEntitiesByDomains(data.entities, 'sensor').filter(entity => entity.entity_id.includes('date'));
          },
          default: options => {
            const defaultEntity = options.find(entity => entity.entity_id === 'sensor.date');
            return defaultEntity?.entity_id ?? undefined;
          },
          visible(data: NavigationProps) {
            return data.clockOptions?.useDateEntity && !data.clockOptions?.hideDate;
          }
        },
        dateFormat: {
          type: 'text',
          label: 'Date Format',
          description: 'The format to use for the date',
          // helpLink: TODO
          default: 'dddd, MMMM DD YYYY',  // maybe change this to a dropdown menu with multiple differnt options
          visible(data: NavigationProps) {
            // only visible when useDateEntity is false and hideDate is false
            return !data.clockOptions?.useDateEntity && !data.clockOptions?.hideDate;
          }
        },
        hideIcon: {
          type: 'radio',
          label: 'Hide Icon',
          description: 'Hide the icon in the clock',
          options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ],
          default: true,
        },
        icon: {
          type: 'text',
          label: 'Icon',
          description: 'The icon to use for the clock',
          // helpLink: TODO
          default: 'mdi:calendar',
          visible(data: NavigationProps) {
            return !data.clockOptions?.hideIcon;
          }
        },
      },
    }
  },
  permissions: { delete: true, drag: true, duplicate: false },
  inline: true,
  render({ puck, options, clockOptions }) {
    return <NavigationBar clockOptions={clockOptions} options={options} ref={puck.dragRef} pages={options.pages} />
  },
};

export default config;