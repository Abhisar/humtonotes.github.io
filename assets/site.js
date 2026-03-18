(() => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  const nav = document.querySelector(".nav");
  const menuBtn = document.querySelector("[data-menu]");
  if (nav && menuBtn) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!(e.target instanceof Element)) return;
      if (e.target.closest(".nav") || e.target.closest("[data-menu]")) return;
      nav.classList.remove("open");
    });
  }

  const base = `${location.origin}${location.pathname.replace(/\/[^\/]*$/, "/")}`.replace(/index\.html$/, "");
  const urls = {
    support: `${base}support.html`,
    marketing: `${base}`,
    privacy: `${base}privacy.html`,
  };

  for (const el of document.querySelectorAll("[data-url]")) {
    const key = el.getAttribute("data-url");
    if (!key || !(key in urls)) continue;
    el.textContent = urls[key];
  }
})();

