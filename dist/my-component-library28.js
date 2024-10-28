import { cva as t } from "./my-component-library59.js";
const a = t("text-base font-semibold text-foreground", {
  variants: {
    size: {
      heading1: "text-5xl",
      heading2: "text-3xl",
      heading3: "text-2xl",
      heading4: "text-xl",
      heading5: "text-lg",
      body1: "text-base",
      body2: "text-sm",
      body3: "text-xs",
      body4: "text-3xs"
    },
    color: {
      default: "text-foreground",
      secondary: "text-secondary-text",
      tertiary: "text-tertiary",
      invert: "text-invert",
      gradient: "bg-unicorn-gradient bg-clip-text text-transparent",
      accent: "text-ui-accent-500"
    }
  },
  defaultVariants: {
    size: "body1",
    color: "default"
  }
});
export {
  a as titleVariants
};
