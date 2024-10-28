import { cva as a } from "./my-component-library59.js";
const n = a(
  "relative overflow-hidden rounded-full transition-all",
  {
    variants: {
      variant: {
        default: "h-4 w-full bg-secondary",
        trending: "h-2 w-full bg-red-500"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), t = a(
  "h-full w-full flex-1 rounded-full transition-all",
  {
    variants: {
      variant: {
        default: "bg-foreground",
        trending: "bg-green-500"
      }
    }
  }
);
export {
  t as indicatorVariants,
  n as progressVariants
};
