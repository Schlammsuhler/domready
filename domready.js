var domReady = (function() {
  var loaded = false,
    fns = [];

  document.addEventListener("DOMContentLoaded", contentLoaded, true);
  window.addEventListener("load", ready, false);

  function contentLoaded() {
    document.removeEventListener("DOMContentLoaded", contentLoaded, true);
    ready();
  }

  function ready() {
    if (loaded) {
      return;
    }
    loaded = true;
    for(var i = 0; i < fns.length; i++) {
      fns[i].call(document);
    }
  }

  return function(fn) {
    return (loaded)?
      fn.call(document):
      fns.push(fn);
  }
})();
