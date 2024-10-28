import { cva as e } from "./my-component-library59.js";
const r = e(
  "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 pr-7 text-sm ring-offset-background placeholder:text-muted-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-text focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "resize-none",
        resizable: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
export {
  r as textAreaVariants
};
