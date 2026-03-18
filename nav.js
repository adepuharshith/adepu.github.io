/* nav.js — injects the shared nav + footer + mobile menu toggle */
(function () {
  const pages = [
    { href: "index.html",        label: "About" },
    { href: "research.html",     label: "Research" },
    { href: "publications.html", label: "Publications" },
    { href: "talks.html",        label: "Talks" },
    { href: "awards.html",       label: "Awards" },
    { href: "gallery.html",      label: "Gallery" },
    { href: "contact.html",      label: "Contact" },
  ];

  const current = window.location.pathname.split("/").pop() || "index.html";

  const navLinks = pages.map(p =>
    `<li><a href="${p.href}" class="${current === p.href ? 'active' : ''}">${p.label}</a></li>`
  ).join("");

  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" class="${current === p.href ? 'active' : ''}">${p.label}</a>`
  ).join("");

  document.getElementById("nav-placeholder").innerHTML = `
    <nav>
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">Harshith <span>·</span> Adepu</a>
        <ul class="nav-links">${navLinks}</ul>
        <button class="ham" onclick="toggleMobile()" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="mobile-menu" id="mobileMenu">${mobileLinks}</div>
  `;

  document.getElementById("footer-placeholder").innerHTML = `
    <footer>© 2025 Harshith Kumar Adepu &nbsp;·&nbsp; Purdue University &nbsp;·&nbsp; IMPULSE Lab</footer>
  `;
})();

function toggleMobile() {
  document.getElementById("mobileMenu").classList.toggle("open");
}
