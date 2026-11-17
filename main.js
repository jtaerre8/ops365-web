// OPS365 — JS compartido: menú móvil, reveal al scroll, formulario de contacto.
(function () {
  "use strict";

  function safe(fn, name) {
    try { fn(); } catch (e) { console.error("[ops365] " + name + " failed:", e); }
  }

  function initMobileMenu() {
    var openBtn = document.querySelector("[data-menu-open]");
    var closeBtn = document.querySelector("[data-menu-close]");
    var menu = document.querySelector("[data-mobmenu]");
    if (!openBtn || !menu) return;

    function openMenu() {
      menu.classList.add("open");
      menu.inert = false;
      openBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      if (closeBtn) closeBtn.focus();
    }
    function closeMenu() {
      menu.classList.remove("open");
      menu.inert = true;
      openBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    menu.inert = true;
    openBtn.setAttribute("aria-expanded", "false");
    openBtn.addEventListener("click", openMenu);
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open")) closeMenu();
    });
  }

  function initReveal() {
    var items = document.querySelectorAll("[data-rv]");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("on"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    items.forEach(function (el) { io.observe(el); });
    // Red de seguridad: si algo falla, nada queda invisible más de 6s.
    setTimeout(function () {
      items.forEach(function (el) { el.classList.add("on"); });
    }, 6000);
  }

  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;
    var statusEl = form.querySelector("[data-status]");
    var endpoint = form.getAttribute("data-endpoint");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var data = Object.fromEntries(new FormData(form).entries());
      var submitBtn = form.querySelector("[type=submit]");
      if (submitBtn) submitBtn.disabled = true;
      setStatus("Enviando…", "");

      if (!endpoint || endpoint.indexOf("REEMPLAZAR") !== -1) {
        // Backend aún no conectado: fallback a WhatsApp con los datos precargados.
        var msg = "Hola OPS365, mi nombre es " + (data.nombre || "") +
          ". Empresa: " + (data.empresa || "-") +
          ". Me interesa: " + (data.servicio || "-") +
          ". " + (data.mensaje || "");
        window.location.href = "https://wa.me/56994505710?text=" + encodeURIComponent(msg);
        return;
      }

      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(function (res) {
          if (!res.ok) throw new Error("HTTP " + res.status);
          setStatus("¡Listo! Te contactaremos a la brevedad.", "ok");
          form.reset();
        })
        .catch(function () {
          setStatus("No se pudo enviar. Escríbenos directo por WhatsApp.", "err");
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });

    function setStatus(text, cls) {
      if (!statusEl) return;
      statusEl.textContent = text;
      statusEl.className = "status" + (cls ? " " + cls : "");
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    safe(initMobileMenu, "initMobileMenu");
    safe(initReveal, "initReveal");
    safe(initContactForm, "initContactForm");
  });
})();
