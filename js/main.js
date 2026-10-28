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
})();
