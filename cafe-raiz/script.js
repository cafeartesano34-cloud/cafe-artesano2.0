/* =========================================================
   Café Raíz — Interacciones
   Para cambiar productos, precios o imágenes edita MENU y FEATURED.
   Precios de muestra en COP: confírmalos antes de publicar.
   ========================================================= */

// "pos" ajusta qué parte de la foto se ve en la tarjeta (object-position).
const MENU = {
  "Bebidas de café": [
    { name: "Espresso", desc: "Shot intenso de café de origen, notas a cacao.", price: 5000, img: "img/drinks.jpg", pos: "48% 58%" },
    { name: "Americano", desc: "Espresso alargado con agua caliente, suave y limpio.", price: 6000, img: "img/drinks.jpg", pos: "50% 62%" },
    { name: "Cappuccino", desc: "Espresso, leche vaporizada y espuma sedosa.", price: 8500, img: "img/hero.jpg", pos: "68% 40%" },
    { name: "Latte", desc: "Leche cremosa con un toque de espresso.", price: 9000, img: "img/drinks.jpg", pos: "78% 45%" },
    { name: "Mocaccino", desc: "Espresso, chocolate artesanal y leche.", price: 10000, img: "img/hero.jpg", pos: "72% 45%" },
    { name: "Café frío", desc: "Cold brew de 18 horas servido sobre hielo.", price: 9500, img: "img/drinks.jpg", pos: "20% 50%" },
    { name: "Café de origen filtrado", desc: "Método V60 con granos de una sola finca.", price: 11000, img: "img/about.jpg", pos: "45% 75%" },
  ],
  "Aperitivos": [
    { name: "Sándwich artesanal", desc: "Pan de masa madre, pavo, rúgula y tomate.", price: 18000, img: "img/snacks.jpg", pos: "22% 30%" },
    { name: "Tostadas con aguacate", desc: "Aguacate, tomates cherry y semillas.", price: 16000, img: "img/snacks.jpg", pos: "28% 75%" },
    { name: "Croissant relleno", desc: "Croissant de mantequilla con jamón y queso.", price: 12000, img: "img/bakery.jpg", pos: "60% 40%" },
    { name: "Panini", desc: "Mozzarella, tomate, espinaca y pesto, gratinado.", price: 17000, img: "img/snacks.jpg", pos: "74% 60%" },
    { name: "Tabla de quesos", desc: "Selección de quesos, nueces, miel y uvas.", price: 32000, img: "img/snacks.jpg", pos: "80% 22%" },
    { name: "Snacks salados", desc: "Mezcla de pandebonos y bocados del día.", price: 8000, img: "img/bakery.jpg", pos: "78% 85%" },
  ],
  "Dulces": [
    { name: "Galletas artesanales", desc: "Con chips de chocolate semiamargo.", price: 4500, img: "img/sweets.jpg", pos: "20% 25%" },
    { name: "Brownie", desc: "Húmedo, con cacao colombiano al 70 %.", price: 7000, img: "img/sweets.jpg", pos: "70% 25%" },
    { name: "Alfajores", desc: "Rellenos de arequipe y bordes de coco.", price: 5000, img: "img/sweets.jpg", pos: "85% 65%" },
    { name: "Muffins", desc: "De arándanos o banano, horneados cada mañana.", price: 6000, img: "img/bakery.jpg", pos: "70% 85%" },
    { name: "Trufas de chocolate", desc: "Caja de 4 trufas cubiertas de cacao.", price: 9000, img: "img/sweets.jpg", pos: "35% 80%" },
    { name: "Dulce de temporada", desc: "Pregunta por la creación de esta semana.", price: 7500, img: "img/cakes.jpg", pos: "25% 60%" },
  ],
  "Panadería": [
    { name: "Pan de masa madre", desc: "Fermentación lenta de 24 horas, corteza crujiente.", price: 15000, img: "img/bakery.jpg", pos: "15% 25%" },
    { name: "Croissant de mantequilla", desc: "Hojaldrado, dorado y con mantequilla real.", price: 6500, img: "img/hero.jpg", pos: "25% 55%" },
    { name: "Pan de queso", desc: "Receta tradicional, crujiente por fuera.", price: 3500, img: "img/bakery.jpg", pos: "80% 82%" },
    { name: "Pan integral", desc: "Harina integral y semillas de linaza y girasol.", price: 12000, img: "img/bakery.jpg", pos: "55% 18%" },
    { name: "Pan de chocolate", desc: "Masa hojaldrada con barras de chocolate.", price: 7000, img: "img/bakery.jpg", pos: "85% 40%" },
    { name: "Rollos de canela", desc: "Canela, azúcar morena y glaseado suave.", price: 8000, img: "img/bakery.jpg", pos: "25% 70%" },
  ],
  "Repostería": [
    { name: "Cheesecake", desc: "Cremoso, con salsa de frutos rojos.", price: 12000, img: "img/cakes.jpg", pos: "30% 65%" },
    { name: "Tarta de frutas", desc: "Base de mantequilla, crema y fruta fresca.", price: 11000, img: "img/cakes.jpg", pos: "28% 50%" },
    { name: "Torta de chocolate", desc: "Tres capas de bizcocho y ganache.", price: 11500, img: "img/cakes.jpg", pos: "35% 25%" },
    { name: "Red velvet", desc: "Bizcocho de terciopelo y frosting de queso.", price: 12000, img: "img/cakes.jpg", pos: "80% 45%" },
    { name: "Torta de zanahoria", desc: "Especiada, con nueces y frosting de queso.", price: 11000, img: "img/cakes.jpg", pos: "85% 40%" },
    { name: "Torta del día", desc: "Porción de la receta especial del día.", price: 10000, img: "img/cakes.jpg", pos: "50% 50%" },
  ],
};

const FEATURED = [
  { name: "Cappuccino Raíz", price: 8500, tag: "Favorito de la casa", img: "img/hero.jpg", pos: "70% 50%" },
  { name: "Croissant de mantequilla", price: 6500, tag: "Recién horneado", img: "img/bakery.jpg", pos: "70% 40%" },
  { name: "Café de origen V60", price: 11000, tag: "Especialidad artesanal", img: "img/about.jpg", pos: "45% 70%" },
  { name: "Cheesecake de frutos rojos", price: 12000, tag: "Recomendado", img: "img/cakes.jpg", pos: "30% 65%" },
];

/* ---------- Utilidades ---------- */
const formatCOP = (n) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

/* ---------- Menú con pestañas ---------- */
const tabsEl = document.getElementById("menuTabs");
const gridEl = document.getElementById("menuGrid");

function renderCategory(cat) {
  gridEl.innerHTML = MENU[cat]
    .map(
      (p, i) => `
      <article class="card" style="animation-delay:${i * 60}ms">
        <div class="card-img"><img src="${p.img}" alt="${p.name}" loading="lazy" style="object-position:${p.pos}"></div>
        <div class="card-body">
          <div class="card-top"><h3>${p.name}</h3><span class="price">${formatCOP(p.price)}</span></div>
          <p>${p.desc}</p>
        </div>
      </article>`
    )
    .join("");
  tabsEl.querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", t.dataset.cat === cat));
}

Object.keys(MENU).forEach((cat, i) => {
  const btn = document.createElement("button");
  btn.className = "tab";
  btn.type = "button";
  btn.role = "tab";
  btn.dataset.cat = cat;
  btn.textContent = cat;
  btn.setAttribute("aria-selected", i === 0);
  btn.addEventListener("click", () => renderCategory(cat));
  tabsEl.appendChild(btn);
});
renderCategory(Object.keys(MENU)[0]);

/* ---------- Destacados ---------- */
document.getElementById("featuredGrid").innerHTML = FEATURED.map(
  (p) => `
  <article class="feat reveal">
    <span class="badge">${p.tag}</span>
    <img src="${p.img}" alt="${p.name}" loading="lazy" style="object-position:${p.pos}">
    <div class="feat-info"><h3>${p.name}</h3><span class="price">${formatCOP(p.price)}</span></div>
  </article>`
).join("");

/* ---------- Navegación móvil ---------- */
const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
  toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

/* ---------- Header al hacer scroll + enlace activo ---------- */
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const links = document.querySelectorAll(".nav-links a:not(.btn)");
const sectionObs = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting)
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
    }),
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("section[id]").forEach((s) => sectionObs.observe(s));

/* ---------- Aparición suave ---------- */
const revealObs = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObs.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

/* ---------- Año del pie de página ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
