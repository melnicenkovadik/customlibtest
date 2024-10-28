import o from "./my-component-library192.js";
function m(r, e) {
  if (o(r) != "object" || !r) return r;
  var i = r[Symbol.toPrimitive];
  if (i !== void 0) {
    var t = i.call(r, e || "default");
    if (o(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
export {
  m as default
};
