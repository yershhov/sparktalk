type TSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export const screens: Record<TSize, string> = {
  xs: `(min-width: 320px)`,
  sm: `(min-width: 640px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
  xl: `(min-width: 1280px)`,
  xxl: `(min-width: 1536px)`,
};
