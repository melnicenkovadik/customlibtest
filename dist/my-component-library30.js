import { jsx as s, jsxs as N } from "react/jsx-runtime";
import o from "react";
import { Button as b } from "./my-component-library5.js";
import { cn as h } from "./my-component-library58.js";
import R from "./my-component-library80.js";
import P from "./my-component-library81.js";
import z from "./my-component-library82.js";
const S = o.createContext(null);
function C() {
  const l = o.useContext(S);
  if (!l)
    throw new Error("useCarousel must be used within a <Carousel />");
  return l;
}
const $ = o.forwardRef(
  ({
    orientation: l = "horizontal",
    opts: t,
    setApi: r,
    plugins: a,
    className: i,
    children: n,
    ...u
  }, f) => {
    const [c, e] = R(
      {
        ...t,
        axis: l === "horizontal" ? "x" : "y"
      },
      a
    ), [v, g] = o.useState(!1), [p, y] = o.useState(!1), m = o.useCallback((d) => {
      d && (g(d.canScrollPrev()), y(d.canScrollNext()));
    }, []), x = o.useCallback(() => {
      e == null || e.scrollPrev();
    }, [e]), w = o.useCallback(() => {
      e == null || e.scrollNext();
    }, [e]), k = o.useCallback(
      (d) => {
        d.key === "ArrowLeft" ? (d.preventDefault(), x()) : d.key === "ArrowRight" && (d.preventDefault(), w());
      },
      [x, w]
    );
    return o.useEffect(() => {
      !e || !r || r(e);
    }, [e, r]), o.useEffect(() => {
      if (e)
        return m(e), e.on("reInit", m), e.on("select", m), () => {
          e == null || e.off("select", m);
        };
    }, [e, m]), /* @__PURE__ */ s(
      S.Provider,
      {
        value: {
          carouselRef: c,
          api: e,
          opts: t,
          orientation: l || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: x,
          scrollNext: w,
          canScrollPrev: v,
          canScrollNext: p
        },
        children: /* @__PURE__ */ s(
          "div",
          {
            ref: f,
            onKeyDownCapture: k,
            className: h("relative", i),
            role: "region",
            "aria-roledescription": "carousel",
            ...u,
            children: n
          }
        )
      }
    );
  }
), K = o.forwardRef(({ className: l, ...t }, r) => {
  const { carouselRef: a, orientation: i } = C();
  return /* @__PURE__ */ s(
    "div",
    {
      ref: a,
      className: "overflow-hidden",
      children: /* @__PURE__ */ s(
        "div",
        {
          ref: r,
          className: h(
            "flex",
            i === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            l
          ),
          ...t
        }
      )
    }
  );
}), U = o.forwardRef(({ className: l, ...t }, r) => {
  const { orientation: a } = C();
  return /* @__PURE__ */ s(
    "div",
    {
      ref: r,
      role: "group",
      "aria-roledescription": "slide",
      className: h(
        "min-w-0 shrink-0 grow-0 basis-full",
        a === "horizontal" ? "pl-4" : "pt-4",
        l
      ),
      ...t
    }
  );
}), B = o.forwardRef(
  ({
    className: l,
    variant: t = "outline",
    size: r = "icon-m",
    prevSlideText: a = "Previous slide",
    ...i
  }, n) => {
    const { orientation: u, scrollPrev: f, canScrollPrev: c } = C();
    if (c)
      return /* @__PURE__ */ N(
        b,
        {
          ref: n,
          variant: t,
          size: r,
          className: h(
            "absolute h-8 w-8 rounded-full",
            u === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
            l
          ),
          disabled: !c,
          onClick: f,
          ...i,
          children: [
            /* @__PURE__ */ s(P, { className: "h-4 w-4" }),
            /* @__PURE__ */ s("span", { className: "sr-only", children: a })
          ]
        }
      );
  }
), G = o.forwardRef(
  ({
    className: l,
    variant: t = "outline",
    size: r = "icon-m",
    nextSlideText: a = "Next slide",
    ...i
  }, n) => {
    const { orientation: u, scrollNext: f, canScrollNext: c } = C();
    if (c)
      return /* @__PURE__ */ N(
        b,
        {
          ref: n,
          variant: t,
          size: r,
          className: h(
            "absolute h-8 w-8 rounded-full",
            u === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
            l
          ),
          disabled: !c,
          onClick: f,
          ...i,
          children: [
            /* @__PURE__ */ s(z, { className: "h-4 w-4" }),
            /* @__PURE__ */ s("span", { className: "sr-only", children: a })
          ]
        }
      );
  }
), O = o.forwardRef((l, t) => {
  const { api: r } = C(), [a, i] = o.useState(!1), n = o.useCallback(
    () => i((c) => !c),
    []
  );
  o.useEffect(() => {
    if (r)
      return r.on("select", n), r.on("reInit", n), () => {
        r.off("select", n), r.off("reInit", n);
      };
  }, [r, n]);
  let u = 0, f = 0;
  return r && (u = r.scrollSnapList().length, f = r.selectedScrollSnap()), u > 1 ? /* @__PURE__ */ s(
    "div",
    {
      ref: t,
      className: `flex justify-center gap-2 ${l.className}`,
      children: Array.from({ length: u }, (c, e) => /* @__PURE__ */ s(
        "span",
        {
          className: `mt-4 h-2 w-2 cursor-pointer rounded-full border ${e === f ? "border-none bg-foreground" : "border-none bg-border"}`,
          "aria-label": `Go to slide ${e + 1}`,
          onClick: () => r == null ? void 0 : r.scrollTo(e)
        },
        e
      ))
    }
  ) : null;
});
export {
  $ as Carousel,
  K as CarouselContent,
  O as CarouselDots,
  U as CarouselItem,
  G as CarouselNext,
  B as CarouselPrevious
};
