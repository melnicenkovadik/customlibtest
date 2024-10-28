import { cn as r } from "./my-component-library58.js";
import { cva as u } from "./my-component-library59.js";
const l = u("flex border !border-border !bg-background", {
  variants: {
    variant: {
      default: "h-10 !cursor-pointer !rounded-md px-3 focus:border-muted-text focus:ring-2 focus:ring-ring focus:ring-offset-2",
      small: "h-[37px] !min-h-7 cursor-pointer !rounded-[100px]"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), p = (e, t) => {
  const n = "!shadow-none", d = "shadow-none border hover:shadow-none", s = "hover:cursor-pointer flex border-0 px-3 hover:border-border";
  return {
    control: ({ selectProps: { menuIsOpen: o }, isFocused: a }) => r(
      e,
      { [n]: a },
      { [d]: o },
      s
    ),
    indicatorSeparator: () => r("hidden"),
    dropdownIndicator: ({ selectProps: { menuIsOpen: o } }) => r("!p-0 cursor-pointer", o && "transform rotate-180 !py-0"),
    indicatorsContainer: () => r("!p-0"),
    clearIndicator: () => r("!p-0 cursor-pointer"),
    container: ({ selectProps: { menuIsOpen: o } }) => r(
      "bg-background rounded-md outline outline-2 outline-offset-1 text-transparent",
      o && "outline outline-2 outline-offset-1 text-secondary-text",
      t && "text-destructive"
    ),
    menu: ({ selectProps: { menuIsOpen: o } }) => r("rounded-md !bg-background", o && "border border-border"),
    option: ({ isSelected: o }) => r(
      "rounded-md !bg-transparent hover:!bg-ghost !py-0 hover:cursor-pointer",
      o && "!bg-ghost"
    ),
    placeholder: () => "truncate",
    singleValue: () => r("!text-foreground"),
    input: () => r("!text-foreground")
  };
};
export {
  p as getSelectClassNames,
  l as selectVariants
};
