import { cva as t } from "./my-component-library59.js";
const r = t("text-foreground transition", {
  variants: {
    variant: {
      default: "truncate hover:text-foreground",
      "no-truncate": "flex hover:text-primary-hover",
      full: "flex hover:text-foreground"
    },
    size: {
      default: "text-sm",
      md: "text-base",
      xs: "text-xs"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
export {
  r as truncateVariants
};
