
/* ==========================================================
   sidebar.js v2.0
   Single State Sidebar
========================================================== */

const Sidebar = {

  expanded: false,

  init() {

    this.el = document.getElementById("desktopSidebar");
    this.toggle = document.getElementById("sidebarToggle");

    if (!this.el) return;

    this.bind();

  },

  bind() {

    this.el.addEventListener("mouseenter", () => {

      if (!this.expanded) {
        this.el.classList.add("expanded");
      }

    });

    this.el.addEventListener("mouseleave", () => {

      if (!this.expanded) {
        this.el.classList.remove("expanded");
      }

    });

    if (this.toggle) {

      this.toggle.addEventListener("click", () => {

        this.expanded = !this.expanded;

        this.el.classList.toggle("expanded", this.expanded);

      });

    }

  },

  setActive(module) {

    document.querySelectorAll(".sidebar-item")
      .forEach(item => item.classList.remove("active"));

    const active = document.querySelector(`[data-module="${module}"]`);

    if (active) active.classList.add("active");

  }

};

document.addEventListener("DOMContentLoaded", () => Sidebar.init());
