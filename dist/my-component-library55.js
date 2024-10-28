import { cva as t } from "./my-component-library59.js";
const e = t(
  "relative flex gap-1 [&>input:nth-of-type(1)]:z-[5] [&>input:nth-of-type(1)]:w-[20%] [&>input:nth-of-type(2)]:z-[4] [&>input:nth-of-type(2)]:w-[40%] [&>input:nth-of-type(3)]:z-[3] [&>input:nth-of-type(3)]:w-[60%] [&>input:nth-of-type(4)]:z-[2] [&>input:nth-of-type(4)]:w-[80%] [&>input:nth-of-type(5)]:z-[1] [&>input:nth-of-type(5)]:w-full",
  {
    variants: {
      state: {
        controlled: "[&:hover>svg]:fill-black [&>input:hover+svg+input~svg]:fill-none [&>input:hover+svg+svg+input~svg]:fill-none [&>input:hover+svg]:fill-black",
        "read-only": "cursor-default [&>input]:cursor-default",
        disabled: "cursor-default opacity-50 [&>input]:cursor-default"
      }
    },
    defaultVariants: { state: "read-only" }
  }
);
export {
  e as ratingVariants
};
