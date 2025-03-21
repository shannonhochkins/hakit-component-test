import { useMemo } from "react";
import type { AvailableQueries, BreakPoints } from '@hakit/components';

export type ViewportItem = {
  label: string;
  width: number;
  disabled: boolean;
};

export const defaultViewports: Required<ViewportItem[]> = [
  // Extra small devices (phones, 368px and down)
  {
    label: 'xxs',
    width: 368,
    disabled: false,
  },
  // Small devices (phones, 480px and down)
  {
    label: 'xs',
    width: 480,
    disabled: true,
  },
  // Tablets, 768px and down
  {
    label: 'sm',
    width: 768,
    disabled: false,
  },
  // Laptops, 1279px and down
  {
    label: 'md',
    width: 1279,
    disabled: false,
  },
  // Desktops, 1600px and down
  {
    label: 'lg',
    width: 1600,
    disabled: false,
  },
];

export function toBreakpoints(viewports: ViewportItem[]): BreakPoints {
  return viewports.reduce(
    (acc, viewport) => ({
      ...acc,
      [viewport.label as keyof AvailableQueries]: viewport.width,
    }),
    {} as BreakPoints
  );
}



export function useViewports(data: unknown) {
  const merged = useMemo(() => {
    const defaultBreakpoints = defaultViewports;
    const breakpoints = data?.root.props?.viewports ?? null;
    return breakpoints ? breakpoints : defaultBreakpoints;
  }, [data.root.props?.viewports]);
  return useMemo(() => merged, [merged]);
}