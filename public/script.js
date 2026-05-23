/* ═══════════════════════════════════════════════════════════
   script.js – Mini Ecommerce / ByteShop
   Disciplina: Funções e Manipulação do DOM
   ─────────────────────────────────────────────────────────
   Cobre todos os requisitos obrigatórios:
   ✔ getElementById, querySelector, querySelectorAll
   ✔ innerHTML
   ✔ createElement, setAttribute, appendChild
   ✔ classList.add, style
   ✔ addEventListener (input, change, click)
═══════════════════════════════════════════════════════════ */

// ── B.1 BASE DE DADOS (JSON) ──────────────────────────────
const data = {
  produtos: [
    {
      id: 1,
      nome: "iPhone 15 Pro Max",
      preco: 9499.90,
      categoria: "Celulares",
      imagem: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009278096",
      descricao: "O iPhone mais avançado já criado, com chip A17 Pro, câmera de 48 MP com zoom óptico 5x e titânio de qualidade aeroespacial.",
      emEstoque: true
    },
    {
      id: 2,
      nome: "Samsung Galaxy S24 Ultra",
      preco: 8299.00,
      categoria: "Celulares",
      imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-s928bzkcbri/gallery/br-galaxy-s24-ultra-s928-sm-s928bzkcbri-thumb-539573385?$344_344_PNG$",
      descricao: "Galaxy AI direto no seu bolso. Câmera de 200 MP, S Pen integrada e tela Dynamic AMOLED 2X de 6,8 polegadas.",
      emEstoque: true
    },
    {
      id: 3,
      nome: 'MacBook Pro 14" M3 Pro',
      preco: 17499.00,
      categoria: "Notebooks",
      imagem: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-m3-pro-max-spaceb-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311054290",
      descricao: "Potência absurda com chip M3 Pro, tela Liquid Retina XDR de 14 polegadas e até 18 horas de bateria.",
      emEstoque: true
    },
    {
      id: 4,
      nome: "Dell XPS 15 OLED",
      preco: 12799.00,
      categoria: "Notebooks",
      imagem: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/black/notebook-xps-15-9530-t-black-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
      descricao: "Tela OLED 3,5K com 120 Hz, Intel Core i9 de 13ª geração e placa dedicada NVIDIA RTX 4060. Design ultrafino em alumínio premium.",
      emEstoque: false
    },
    {
      id: 5,
      nome: "PlayStation 5 Slim",
      preco: 3999.00,
      categoria: "Games",
      imagem: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
      descricao: "A nova geração de entretenimento. SSD ultrarrápido, ray tracing em tempo real e controle DualSense com feedback háptico.",
      emEstoque: true
    },
    {
      id: 6,
      nome: "Xbox Series X",
      preco: 3599.00,
      categoria: "Games",
      imagem: "https://news.xbox.com/en-us/wp-content/uploads/sites/2/2020/03/xbox-series-x-11-scaled-1.jpg",
      descricao: "O Xbox mais poderoso de todos. 4K a 120 fps, compatibilidade com retroativos e Game Pass Ultimate.",
      emEstoque: true
    },
    {
      id: 7,
      nome: "AirPods Pro (2ª Geração)",
      preco: 2149.00,
      categoria: "Acessórios",
      imagem: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1660803972361",
      descricao: "Cancelamento de ruído ativo aprimorado, chip H2, som espacial personalizado e resistência à água IPX4.",
      emEstoque: true
    },
    {
      id: 8,
      nome: "Samsung T7 SSD Externo 2TB",
      preco: 699.90,
      categoria: "Acessórios",
      imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/mu-pc2t0t-ww/gallery/br-portable-ssd-t7-mu-pc2t0t-ww-531814823?$650_519_PNG$",
      descricao: "Velocidade de leitura de até 1.050 MB/s, design compacto com proteção contra choque e criptografia AES 256 bits.",
      emEstoque: true
    },
    {
      id: 9,
      nome: "Motorola Edge 40 Pro",
      preco: 3299.00,
      categoria: "Celulares",
      imagem: "https://motorola-global-portal.custhelp.com/ci/fattach/get/225875/0/redirect/1",
      descricao: "Snapdragon 8 Gen 2, câmera de 50 MP com OIS, carregamento 125W e tela pOLED de 6,67 polegadas com 165 Hz.",
      emEstoque: false
    },
    {
      id: 10,
      nome: "Controle DualSense PS5 Midnight Black",
      preco: 479.00,
      categoria: "Games",
      imagem: "https://gmedia.playstation.com/is/image/SIEPDC/dualsense-pdp-02-en-14sep21?$800px--t$",
      descricao: "Gatilhos adaptáveis, feedback háptico de alta precisão, microfone integrado e bateria de longa duração.",
      emEstoque: true
    }
  ]
};

// ── B.2 SELEÇÃO DE ELEMENTOS (DOM) ────────────────────────
// Usando getElementById para áreas principais
const productList    = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");
const resultCount    = document.getElementById("result-count");
const overlay        = document.getElementById("overlay");

// Usando querySelector para controles
const searchInput    = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const btnRender      = document.querySelector("#btnRender");

// ── B.3 FUNÇÕES OBRIGATÓRIAS ──────────────────────────────

/**
 * formatPrice(preco)
 * Retorna o preço formatado em Real Brasileiro.
 */
function formatPrice(preco) {
  return preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

/**
 * createProductCard(produto)
 * Cria e retorna um card completo usando createElement,
 * setAttribute, classList.add e style.
 */
function createProductCard(produto) {
  // Wrapper principal
  const card = document.createElement("div");
  card.setAttribute("data-id", produto.id);
  card.setAttribute("data-category", produto.categoria);
  classList_add(card, ["card"]);

  // Atraso de animação escalonado (stagger)
  card.style.animationDelay = `${(produto.id % 8) * 60}ms`;

  // ── Área da imagem ──
  const imgWrap = document.createElement("div");
  classList_add(imgWrap, ["card-image-wrap"]);

  const img = document.createElement("img");
  img.setAttribute("src", produto.imagem);
  img.setAttribute("alt", produto.nome);
  img.setAttribute("loading", "lazy");

  const badge = document.createElement("span");
  classList_add(badge, ["card-badge", produto.emEstoque ? "em-estoque" : "sem-estoque"]);
  badge.textContent = produto.emEstoque ? "Em estoque" : "Esgotado";

  imgWrap.appendChild(img);
  imgWrap.appendChild(badge);

  // ── Corpo do card ──
  const body = document.createElement("div");
  classList_add(body, ["card-body"]);

  const category = document.createElement("span");
  classList_add(category, ["card-category"]);
  category.textContent = produto.categoria;

  const title = document.createElement("h3");
  classList_add(title, ["card-title"]);
  title.textContent = produto.nome;

  const price = document.createElement("p");
  classList_add(price, ["card-price"]);
  price.textContent = formatPrice(produto.preco);

  body.appendChild(category);
  body.appendChild(title);
  body.appendChild(price);

  // ── Botões ──
  const actions = document.createElement("div");
  classList_add(actions, ["card-actions"]);

  const btnDetails = document.createElement("button");
  classList_add(btnDetails, ["btn-details"]);
  btnDetails.textContent = "Ver detalhes";
  btnDetails.setAttribute("aria-label", `Ver detalhes de ${produto.nome}`);

  const btnHighlight = document.createElement("button");
  classList_add(btnHighlight, ["btn-highlight"]);
  btnHighlight.setAttribute("title", "Destacar produto");
  btnHighlight.setAttribute("aria-label", "Destacar produto");
  btnHighlight.textContent = "★";

  // ── addEventListener nos botões do card ──
  btnDetails.addEventListener("click", function () {
    showProductDetails(produto);
  });

  btnHighlight.addEventListener("click", function () {
    card.classList.toggle("highlight");
  });

  actions.appendChild(btnDetails);
  actions.appendChild(btnHighlight);

  // ── Montagem final ──
  card.appendChild(imgWrap);
  card.appendChild(body);
  card.appendChild(actions);

  return card;
}

/**
 * Helper: aplica múltiplas classes de uma vez (classList.add).
 */
function classList_add(element, classes) {
  classes.forEach(cls => element.classList.add(cls));
}

/**
 * renderProducts(produtos)
 * Limpa a lista e insere todos os cards via appendChild.
 */
function renderProducts(produtos) {
  // Limpa usando innerHTML
  productList.innerHTML = "";

  if (produtos.length === 0) {
    const empty = document.createElement("div");
    classList_add(empty, ["empty-state"]);
    empty.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <h3>Nenhum produto encontrado</h3>
      <p>Tente outros termos de busca ou outra categoria.</p>
    `;
    productList.appendChild(empty);
    atualizarContador(0);
    return;
  }

  // appendChild para cada card
  produtos.forEach(produto => {
    const card = createProductCard(produto);
    productList.appendChild(card);
  });

  atualizarContador(produtos.length);

  // ── B.5 querySelectorAll obrigatório ──
  // Pega todos os cards renderizados e registra o data-id no console
  const todosOsCards = document.querySelectorAll(".card");
  console.log(`%c[querySelectorAll] ${todosOsCards.length} cards renderizados:`, "color:#5b6bff;font-weight:bold");
  todosOsCards.forEach(card => {
    const id = card.getAttribute("data-id");
    console.log(`  → Card data-id="${id}"`);
    // Aplica estilo inline sutil via style (transição já definida no CSS)
    card.style.opacity = "1";
  });
}

/**
 * renderCategories()
 * Preenche o <select> dinamicamente com as categorias únicas dos produtos.
 */
function renderCategories() {
  // Opção padrão "Todas"
  categorySelect.innerHTML = `<option value="Todas">Todas as categorias</option>`;

  // Extrai categorias únicas
  const categorias = [...new Set(data.produtos.map(p => p.categoria))].sort();

  categorias.forEach(cat => {
    const option = document.createElement("option");
    option.setAttribute("value", cat);
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
}

/**
 * showProductDetails(produto)
 * Exibe o painel de detalhes do produto selecionado usando innerHTML.
 */
function showProductDetails(produto) {
  const statusClass = produto.emEstoque ? "em-estoque" : "sem-estoque";
  const statusText  = produto.emEstoque ? "Em estoque"  : "Esgotado";

  // Preenche o painel usando innerHTML
  productDetails.innerHTML = `
    <button class="detail-close" id="btnCloseDetail" aria-label="Fechar detalhes">✕</button>

    <div class="detail-img-wrap">
      <img src="${produto.imagem}" alt="${produto.nome}" />
    </div>

    <p class="detail-category">${produto.categoria}</p>
    <h2 class="detail-name">${produto.nome}</h2>
    <p class="detail-price">${formatPrice(produto.preco)}</p>
    <p class="detail-desc">${produto.descricao}</p>
    <span class="detail-status ${statusClass}">${statusText}</span>
  `;

  // Mostra o painel e o overlay
  productDetails.classList.remove("hidden");
  overlay.classList.remove("hidden");

  // Evento de fechar pelo botão interno
  document.getElementById("btnCloseDetail").addEventListener("click", closeDetails);
}

/**
 * closeDetails()
 * Fecha o painel de detalhes.
 */
function closeDetails() {
  productDetails.classList.add("hidden");
  overlay.classList.add("hidden");
}

/**
 * filterProducts()
 * Lê o texto de busca e a categoria selecionada e retorna
 * o array filtrado de produtos.
 */
function filterProducts() {
  const texto     = searchInput.value.toLowerCase().trim();
  const categoria = categorySelect.value;

  return data.produtos.filter(produto => {
    const nomeBate     = produto.nome.toLowerCase().includes(texto);
    const descBate     = produto.descricao.toLowerCase().includes(texto);
    const catBate      = categoria === "Todas" || produto.categoria === categoria;
    return (nomeBate || descBate) && catBate;
  });
}

/**
 * atualizarContador(qtd)
 * Atualiza o texto do contador de resultados.
 */
function atualizarContador(qtd) {
  resultCount.textContent =
    qtd === 0 ? "Nenhum resultado" :
    qtd === 1 ? "1 produto encontrado" :
    `${qtd} produtos encontrados`;
}

// ── B.4 EVENTOS DOS CONTROLES ─────────────────────────────

// Digitação no campo de busca → filtra em tempo real
searchInput.addEventListener("input", function () {
  renderProducts(filterProducts());
});

// Mudança de categoria → filtra
categorySelect.addEventListener("change", function () {
  renderProducts(filterProducts());
});

// Botão Renderizar → recarrega o catálogo completo
btnRender.addEventListener("click", function () {
  searchInput.value = "";
  categorySelect.value = "Todas";
  renderProducts(data.produtos);
});

// Fechar detalhes clicando no overlay
overlay.addEventListener("click", closeDetails);

// Fechar detalhes com tecla Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeDetails();
});

// ── INICIALIZAÇÃO ─────────────────────────────────────────
renderCategories();
renderProducts(data.produtos);