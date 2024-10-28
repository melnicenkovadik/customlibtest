import { cva as e } from "./my-component-library59.js";
const s = e(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=unchecked]:bg-border",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), a = e(
  "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        sm: "h-4 w-4 data-[state=checked]:translate-x-4",
        md: "h-5 w-5 data-[state=checked]:translate-x-5"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
export {
  a as switchThumbVariant,
  s as switchVariants
};
