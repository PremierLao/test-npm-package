import "vue";
function s(t, n, e) {
  let o;
  return function(...l) {
    const i = this, c = function() {
      o = null, e || t.apply(i, l);
    }, u = e && !o;
    clearTimeout(o), o = setTimeout(c, n), u && t.apply(i, l);
  };
}
const a = {
  install(t, n) {
    t.config.globalProperties.$ttydebounce = s;
  }
};
export {
  a as default
};
