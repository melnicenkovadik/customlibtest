function t(r, e) {
  return e || (e = r.slice(0)), Object.freeze(Object.defineProperties(r, {
    raw: {
      value: Object.freeze(e)
    }
  }));
}
export {
  t as default
};
