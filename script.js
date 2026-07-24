// ============ IMAGE FALLBACK ============
function imgFallback(img, fallbackHTML){
  img.onerror = null;
  const span = document.createElement("span");
  span.className = "img-fallback" + (img.className ? " " + img.className : "");
  span.innerHTML = fallbackHTML;
  img.replaceWith(span);
}

// ============ MENU DATA ============
const WA = "5511999907024";
const menu = [
  {id:"tradicionais",label:"Tradicionais",items:[
    {name:"Mussarela",description:"Mussarela e tomate",broto:35,grande:47},
    {name:"Marguerita",description:"Mussarela, parmesão, tomate e manjericão",broto:35,grande:50},
    {name:"Napolitana",description:"Mussarela, parmesão e tomate",broto:35,grande:50},
    {name:"Alho Frito",description:"Mussarela e alho frito",broto:35,grande:50},
    {name:"Provolone",description:"Mussarela, provolone, catupiry e tomate",broto:35,grande:50},
    {name:"Bacon",description:"Mussarela e bacon",broto:35,grande:50},
    {name:"Milho",description:"Milho e mussarela",broto:35,grande:50},
    {name:"Palmito",description:"Palmito e mussarela",broto:35,grande:50},
    {name:"Abobrinha",description:"Abobrinha e mussarela",broto:35,grande:50},
    {name:"Brócolis",description:"Brócolis e mussarela",broto:35,grande:50},
    {name:"Rúcula",description:"Rúcula, mussarela e tomate seco",broto:35,grande:50},
    {name:"Escarola",description:"Escarola refogada, bacon, alho frito e mussarela",broto:35,grande:50},
    {name:"Bauru",description:"Presunto, tomate, mussarela",broto:35,grande:50},
  ]},
  {id:"queijos",label:"Queijos",items:[
    {name:"Dois Queijos",description:"Mussarela e catupiry",broto:35,grande:49},
    {name:"Três Queijos",description:"Mussarela, catupiry e parmesão",broto:35,grande:50},
    {name:"Quatro Queijos",description:"Mussarela, catupiry, provolone e parmesão",broto:35,grande:53},
    {name:"Cinco Queijos",description:"Mussarela, catupiry, parmesão, gorgonzola e provolone",broto:40,grande:55},
  ]},
  {id:"calabresas",label:"Calabresas",items:[
    {name:"Calabresa",description:"Calabresa e cebola",broto:35,grande:47},
    {name:"Calabresa 2",description:"Calabresa, cebola e mussarela",broto:35,grande:50},
    {name:"Calacatu",description:"Calabresa, cebola e catupiry",broto:35,grande:50},
    {name:"Baiana",description:"Calabresa moída, cebola, ovo e pimenta",broto:35,grande:50},
    {name:"Peperone",description:"Peperone e mussarela",broto:40,grande:55},
    {name:"Americana",description:"Calabresa moída, bacon, ovo, cebola e mussarela",broto:40,grande:53},
    {name:"Toscana",description:"Calabresa moída, ovo, cebola e mussarela",broto:35,grande:50},
  ]},
  {id:"frango",label:"Frango",items:[
    {name:"Frango Catupiry",description:"Frango e catupiry",broto:35,grande:50},
    {name:"Frango 2",description:"Frango, catupiry e mussarela",broto:40,grande:55},
    {name:"Frango Caipira",description:"Frango, catupiry, bacon, milho, cebola e mussarela",broto:40,grande:55},
    {name:"Franbacon",description:"Frango, catupiry, bacon e mussarela",broto:40,grande:55},
    {name:"Frango Galizé",description:"Frango, catupiry, milho e ervilha",broto:35,grande:50},
  ]},
  {id:"especiais",label:"Especiais",items:[
    {name:"Lombo",description:"Lombo e mussarela",broto:35,grande:50},
    {name:"Lombo 2",description:"Lombo, palmito, bacon, catupiry e mussarela",broto:40,grande:55},
    {name:"Lombo Especial",description:"Lombo, gorgonzola, champignons, bacon, catupiry e mussarela",broto:40,grande:58},
    {name:"A Moda do Chefe",description:"Lombo, calabresa, bacon, ovo, milho, catupiry e mussarela",broto:40,grande:60},
    {name:"Atum",description:"Atum e cebola",broto:35,grande:50},
    {name:"Atum Especial",description:"Atum, palmito, catupiry, cebola e mussarela",broto:40,grande:55},
    {name:"Camarão",description:"Camarão, catupiry e mussarela",broto:55,grande:80},
    {name:"Siciliana",description:"Mussarela, tomate seco e champignon",broto:35,grande:50},
    {name:"Brócolis 2",description:"Brócolis, bacon, alho frito e mussarela",broto:35,grande:50},
    {name:"Palmito 2",description:"Palmito, bacon, catupiry, mussarela e alho frito",broto:40,grande:53},
    {name:"Portuguesa",description:"Presunto, ovo, palmito, ervilha, cebola e mussarela",broto:40,grande:53},
  ]},
  {id:"doces",label:"Doces",items:[
    {name:"Brigadeiro",description:"Chocolate ao leite e granulado",broto:35,grande:50},
    {name:"Prestígio",description:"Chocolate ao leite e côco ralado",broto:35,grande:50},
    {name:"M&M's",description:"Chocolate ao leite e M&M's",broto:35,grande:50},
    {name:"Banana",description:"Banana com leite condensado e canela",broto:35,grande:50},
    {name:"Romeu e Julieta",description:"Mussarela e goiabada",broto:35,grande:50},
    {name:"Banana Nevada",description:"Chocolate branco, banana e canela",broto:35,grande:50},
    {name:"Totinha de Limão",description:"Chocolate branco, creme de leite e raspas de limão",broto:35,grande:50},
    {name:"Sensação",description:"Chocolate ao leite e morango",broto:35,grande:50},
    {name:"Rafaello",description:"Chocolate branco, cheese, creme de leite, coco ralado e chocolate preto",broto:35,grande:50},
  ]},
];

const waLink = (msg="Olá! Gostaria de fazer um pedido.") =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

// ============ WA LINKS ============
document.querySelectorAll("a[data-wa]").forEach(a=>{
  a.href = waLink();
  a.target = "_blank";
  a.rel = "noreferrer";
});

// ============ NAV SCROLL ============
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
onScroll();
window.addEventListener("scroll", onScroll, {passive:true});

// ============ MOBILE MENU ============
const mm = document.getElementById("mobileMenu");
document.getElementById("menuOpen").addEventListener("click", ()=>mm.classList.add("open"));
document.getElementById("menuClose").addEventListener("click", ()=>mm.classList.remove("open"));
mm.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mm.classList.remove("open")));

// ============ HERO PARALLAX ============
const heroBg = document.getElementById("heroBg");
const heroInner = document.getElementById("heroInner");
window.addEventListener("scroll", ()=>{
  const y = window.scrollY;
  if (y < window.innerHeight){
    const p = y / window.innerHeight;
    heroBg.style.transform = `translateY(${p*180}px) scale(${1+p*.12})`;
    heroInner.style.opacity = String(Math.max(0, 1 - p/.8));
  }
}, {passive:true});

// ============ MARQUEE ============
const words = ["Forno a lenha","Massa artesanal","Mussarela premium","Entrega quente","4,9 estrelas","Cotia • SP"];
const marquee = document.getElementById("marquee");
const buildLine = () => words.map(w=>`<span>${w}<span class="spk">✦</span></span>`).join("");
marquee.innerHTML = buildLine() + buildLine();

// ============ DIFFS ============
const diffs = [
  {i:"👨‍🍳",t:"Ingredientes selecionados",d:"Do queijo ao tomate, tudo escolhido a dedo."},
  {i:"🔥",t:"Sempre quentinha",d:"Sai do forno e vai direto pra você."},
  {i:"⏱",t:"Entrega rápida",d:"Cotia e região, no tempo certo."},
  {i:"🍽",t:"Atendimento premium",d:"Feito pra quem ama pizza de verdade."},
  {i:"★",t:"4,9 no delivery",d:"Mais de 20 avaliações reais nos aplicativos."},
];
document.getElementById("diffs").innerHTML = diffs.map((d,i)=>`
  <div class="diff reveal" style="--d:${i*.05}s">
    <div class="diff-ico">${d.i}</div>
    <div><div class="diff-t">${d.t}</div><div class="diff-d">${d.d}</div></div>
  </div>`).join("");

// ============ MENU CATEGORIES ============
const catsEl = document.getElementById("cats");
const gridEl = document.getElementById("menuGrid");
const cats = [{id:"todos",label:"Todos"}, ...menu.map(c=>({id:c.id,label:c.label}))];
let active = "todos";

function renderCats(){
  catsEl.innerHTML = cats.map(c=>`<button class="cat ${c.id===active?"on":""}" data-cat="${c.id}">${c.label}</button>`).join("");
  catsEl.querySelectorAll(".cat").forEach(b=>{
    b.addEventListener("click",()=>{active=b.dataset.cat;renderCats();renderMenu();});
  });
}
function currentItems(){
  if (active==="todos") return menu.flatMap(c=>c.items.map(it=>({...it,cat:c.label})));
  const c = menu.find(c=>c.id===active);
  return c ? c.items.map(it=>({...it,cat:c.label})) : [];
}
function renderMenu(){
  gridEl.innerHTML = currentItems().map((it,i)=>{
    const href = waLink(`Olá! Quero pedir a pizza ${it.name} (Grande — R$ ${it.grande.toFixed(2)}).`);
    return `<a class="menu-card" href="${href}" target="_blank" rel="noreferrer" style="animation-delay:${Math.min(i*.02,.3)}s">
      <div class="menu-card-head">
        <div style="min-width:0;flex:1;">
          <div class="menu-cat">${it.cat}</div>
          <h3 class="menu-name">${it.name}</h3>
          <p class="menu-desc">${it.description}</p>
        </div>
        <div class="menu-price">
          <div class="menu-price-lbl">Grande</div>
          <div class="menu-price-big">R$ ${it.grande}</div>
          <div class="menu-price-sm">Broto R$ ${it.broto}</div>
        </div>
      </div>
      <div class="menu-card-foot"><span>Pedir no WhatsApp</span><span class="arr">→</span></div>
    </a>`;
  }).join("");
}
renderCats(); renderMenu();

// ============ GALLERY ============
const shots = [
  {src:"/ativos/gallery-1.jpg",tall:true},
  {src:"/ativos/gallery-2.jpg"},
  {src:"/ativos/gallery-3.jpg",tall:true},
  {src:"/ativos/gallery-5.jpg"},
  {src:"/ativos/gallery-4.jpg"},
  {src:"/ativos/gallery-6.jpg",tall:true},
];
document.getElementById("galleryGrid").innerHTML = shots.map((s,i)=>`
  <div class="g-item ${s.tall?"tall":""} reveal" style="--d:${i*.04}s">
    <img src="${s.src}" alt="Pizzaria do Brunão" loading="lazy" onerror="imgFallback(this,'🍕')" />
  </div>`).join("");

// ============ REVIEWS ============
const reviews = [
  {t:"Pizza muito recheada.",a:"Ana P."},
  {t:"Ingredientes de excelente qualidade.",a:"Carlos M."},
  {t:"Entrega muito rápida.",a:"Juliana R."},
  {t:"Sempre chega quentinha.",a:"Rodrigo S."},
  {t:"A melhor pizza da região, sem dúvida.",a:"Marina T."},
  {t:"Massa perfeita, atendimento nota 10.",a:"Felipe L."},
];
document.getElementById("reviewsGrid").innerHTML = reviews.map((r,i)=>`
  <figure class="review reveal" style="--d:${i*.05}s">
    <div class="review-stars">★★★★★</div>
    <blockquote class="review-q">"${r.t}"</blockquote>
    <figcaption class="review-a">— ${r.a}</figcaption>
  </figure>`).join("");

// ============ YEAR ============
document.getElementById("year").textContent = new Date().getFullYear();

// ============ REVEAL ON SCROLL ============
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
  });
},{rootMargin:"-80px"});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
// Hero reveals: trigger immediately
document.querySelectorAll(".hero .reveal").forEach(el=>el.classList.add("in"));
