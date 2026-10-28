(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
    window.matchMedia("(min-width: 861px)").addEventListener("change", function () {
      setOpen(false);
    });
  }

  // V1 is a single page, so HOME on the home page does nothing.
  var home = document.querySelector("[data-home]");
  if (home) {
    home.addEventListener("click", function (e) {
      e.preventDefault();
      setOpen(false);
    });
  }

  // On mobile the river is stretched to span the whole story section.
  var story = document.querySelector(".story");
  var rivers = document.querySelectorAll(".river-art");
  var mq = window.matchMedia("(max-width: 860px)");

  function fitRiver() {
    if (!story || !rivers.length) return;
    rivers.forEach(function (river) {
      if (!mq.matches) {
        river.style.removeProperty("--river-scale");
        return;
      }
      river.style.setProperty("--river-scale", (story.offsetHeight / river.offsetHeight).toFixed(3));
    });
  }

  if (story && rivers.length) {
    fitRiver();
    window.addEventListener("resize", fitRiver);
    window.addEventListener("load", fitRiver);
  }
})();
