// ---- EDIT THIS: your GitHub username and the public releases repo name ----
var ELIXIR = { owner: "YOUR-NAME", repo: "elixir-releases" };
var base = "https://github.com/" + ELIXIR.owner + "/" + ELIXIR.repo;
function setLinks(attr, url){ document.querySelectorAll("[" + attr + "]").forEach(function(a){ a.href = url; a.target = "_blank"; a.rel = "noopener"; }); }
setLinks("data-repo", base); setLinks("data-releases", base + "/releases/latest"); setLinks("data-issues", base + "/issues");

// Hide the nav when scrolling down, show it when scrolling up.
var nav = document.getElementById("nav"), last = 0;
addEventListener("scroll", function(){ var y = scrollY; nav.classList.toggle("hide", y > last && y > 200 && !menu.classList.contains("open")); last = y; }, { passive: true });

// Fade sections in as they appear.
var calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .1 });
document.querySelectorAll(".rv").forEach(function(el){ calm ? el.classList.add("in") : io.observe(el); });

// Mobile menu: open and close with the button, a link tap, Escape, an outside tap, or a wider window.
var burger = document.getElementById("burger"), menu = document.getElementById("menu");
function setMenu(open){
  menu.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  if(open) nav.classList.remove("hide");
}
burger.addEventListener("click", function(){ setMenu(!menu.classList.contains("open")); });
menu.addEventListener("click", function(e){ if(e.target.closest("a")) setMenu(false); });
document.addEventListener("click", function(e){ if(!e.target.closest("#nav")) setMenu(false); });
addEventListener("keydown", function(e){ if(e.key === "Escape") setMenu(false); });
addEventListener("resize", function(){ if(innerWidth > 900) setMenu(false); });
