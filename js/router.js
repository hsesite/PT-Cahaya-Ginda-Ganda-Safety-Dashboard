
/* ==========================================================
   PT Cahaya Ginda Ganda HSE Dashboard
   router.js v5.0 (LOCKED)
   Single Page Application Router
========================================================== */

const Router = {

  current: "dashboard",
  container: null,
  desktopWorkspace: null,

  init() {

    this.container = document.getElementById("appView");
    this.desktopWorkspace = document.getElementById("desktopWorkspace");

    this.bindLinks();

    const hash = window.location.hash.replace("#", "");

    if (hash) {
      this.navigate(hash, false);
    } else {
      this.navigate("dashboard", false);
    }

    window.addEventListener("popstate", () => {

      const module = window.location.hash.replace("#", "") || "dashboard";

      this.navigate(module, false);

    });

  },

  bindLinks() {

    document.querySelectorAll("[data-module]").forEach(button => {

      button.addEventListener("click", e => {

        e.preventDefault();

        const module = button.dataset.module;

        this.navigate(module, true);

      });

    });

  },

  navigate(module, push = true) {

    this.current = module;

    this.setActive(module);

    this.transitionOut(() => {

      this.render(module);

      this.transitionIn();

    });

    if (push) {
      history.pushState({ module }, "", "#" + module);
    }

  },

  setActive(module) {

    document.querySelectorAll("[data-module]").forEach(el => {

      el.classList.toggle("active", el.dataset.module === module);

    });

  },

  transitionOut(callback) {

    if (!this.container) {

      callback();

      return;

    }

    this.container.style.opacity = "0";
    this.container.style.transform = "translateY(12px)";

    setTimeout(callback, 160);

  },

  transitionIn() {

    this.container.style.opacity = "1";
    this.container.style.transform = "translateY(0)";

  },

  render(module) {

    if (!this.container) return;

    if (module === "dashboard") {

      if (this.desktopWorkspace) {
        this.desktopWorkspace.style.display = "";
      }

      this.container.style.display = "none";
      this.container.innerHTML = "";

      lucide.createIcons();

      return;

    }

    if (this.desktopWorkspace) {
      this.desktopWorkspace.style.display = "none";
    }

    this.container.style.display = "block";

    const html = Modules.render(module);

    this.container.innerHTML = html;

    if (module === "inspection" && window.Inspection) {

      setTimeout(() => {

        Inspection.init();

      }, 50);

    }

    lucide.createIcons();

  }

};

window.addEventListener("DOMContentLoaded", () => {

  Router.init();

});
