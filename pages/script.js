/**
 * EcoSankofa Plastics — script.js
 * Handles: Navbar, Mobile menu, Scroll animations, Counters,
 *          Cart, Newsletter, Shop filter, Product detail page
 */

"use strict";

/* ============================================================
   PRODUCT DATA
   ============================================================ */
const PRODUCTS = {
  "flower-pot": {
    id: "flower-pot",
    name: "Eco Bloom Flower Pot",
    tagline:
      "Bring life to your space with a pot made from the life we almost threw away.",
    price: 120,
    emoji: "🌸",
    imgLabel: "Eco Bloom Flower Pot",
    badge: "Bestseller",
    category: "Home & Décor",
    colours: ["#4ade80", "#f97316", "#60a5fa", "#f472b6"],
    story: {
      title: "A Planter Born from Waste",
      text: `Every Eco Bloom Flower Pot begins its life as discarded HDPE (High-Density Polyethylene) 
      plastic bottles collected from markets and streets in Winneba. These bottles — shampoo containers, 
      detergent bottles, and plastic jugs — had been dumped or burnt, releasing toxic fumes into communities.
      
      Our artisans sort and clean the bottles by colour group, then shred them into small chips. The chips 
      are placed into custom steel moulds and heated at precisely 180°C until they fuse together under 
      pressure. The result is a dense, weather-resistant planter that is stronger than virgin plastic, 
      absolutely waterproof, and full of beautiful colour variation — because no two batches are identical.
      
      Your Eco Bloom Flower Pot is a living proof that beauty and sustainability are not opposites.`,
    },
    process: [
      {
        title: "Collection",
        desc: "HDPE bottles are collected from markets, streets, and community drop points.",
      },
      {
        title: "Sorting & Cleaning",
        desc: "Bottles are sorted by resin type and colour, then washed with eco-friendly soap.",
      },
      {
        title: "Shredding",
        desc: "Clean plastic is fed through a manual shredder to produce uniform chips.",
      },
      {
        title: "Moulding",
        desc: "Chips are packed into steel pot-shaped moulds and heated to 180°C for fusion.",
      },
      {
        title: "Cooling & Finishing",
        desc: "Pots are cooled slowly, removed from moulds, sanded, and quality-checked.",
      },
      {
        title: "Dispatch",
        desc: "Finished pots are wrapped in recycled paper and shipped to you.",
      },
    ],
    materials: [
      {
        icon: "🧴",
        name: "HDPE Plastic",
        desc: "Sourced from discarded shampoo & detergent bottles",
      },
      {
        icon: "💧",
        name: "Eco Soap",
        desc: "Biodegradable cleaning agent used in washing",
      },
      {
        icon: "🔥",
        name: "Solar Heat Press",
        desc: "Solar-assisted heating for lower carbon output",
      },
      {
        icon: "📄",
        name: "Recycled Wrap",
        desc: "Packaged in repurposed newsprint",
      },
    ],
    impact: [
      {
        icon: "🍶",
        title: "Diverts ~8 Bottles",
        desc: "Each pot reuses approximately 8 HDPE plastic bottles from landfill.",
      },
      {
        icon: "👐",
        title: "Pays One Hour of Training",
        desc: "Your purchase funds one hour of skills training for a youth artisan.",
      },
      {
        icon: "🌿",
        title: "Saves 220g CO₂",
        desc: "Compared to producing a new plastic pot, recycled plastic saves significant emissions.",
      },
      {
        icon: "🏘️",
        title: "Community Income",
        desc: "Revenue flows directly to artisan cooperatives in Agbogbloshie.",
      },
    ],
    related: ["clock", "organizer", "earrings"],
  },

  clock: {
    id: "clock",
    name: "Sankofa Wall Clock",
    tagline:
      "Time told by the caps that once held nothing — now holding meaning.",
    price: 210,
    emoji: "🕐",
    imgLabel: "Sankofa Wall Clock",
    badge: "New Arrival",
    category: "Home & Décor",
    colours: ["#1a4731", "#92400e", "#1e3a5f", "#374151"],
    images: ["./assests/clock/main-clock.png", "./assests/clock/hanging-clock.png"],
    story: {
      title: "Keeping Time with Purpose",
      text: `The Sankofa Wall Clock was born from one of the most common and overlooked waste items: 
      the plastic bottle cap. Agbogbloshie and surrounding markets generate thousands of bottle caps 
      daily — from soda, water, cooking oil, and medicine containers. These caps are too small to 
      be collected in conventional recycling systems and often end up in drains or the sea.
      
      Our craftspeople gather these caps, press and flatten them under heat, then arrange them in mosaic 
      patterns on a circular wooden backing salvaged from furniture waste. A silent quartz clock mechanism 
      (the only non-recycled component) is embedded at the centre. The result is a striking, 
      minimalist wall piece that tells the time and the story of a community choosing to do differently.
      
      The name "Sankofa" — meaning "go back and fetch it" — feels especially apt for a clock. 
      Because to build a better future, we must first go back and clean up the past.`,
    },
    process: [
      {
        title: "Cap Collection",
        desc: "Bottle caps are collected from market vendors, restaurants, and households.",
      },
      {
        title: "Cleaning & Sorting",
        desc: "Caps are cleaned, sorted by colour and size for pattern planning.",
      },
      {
        title: "Heat Pressing",
        desc: "Caps are individually flattened using a heat press at 140°C.",
      },
      {
        title: "Mosaic Layout",
        desc: "Artisans arrange flattened caps into geometric Kente-inspired patterns.",
      },
      {
        title: "Backing & Bonding",
        desc: "Caps are bonded to a salvaged wood disc using eco-resin adhesive.",
      },
      {
        title: "Mechanism Install",
        desc: "Silent quartz mechanism is fitted and tested for accuracy.",
      },
    ],
    materials: [
      {
        icon: "🍶",
        name: "Plastic Bottle Caps",
        desc: "Hundreds of caps from soda, water, and cooking oil bottles",
      },
      {
        icon: "🪵",
        name: "Salvaged Wood",
        desc: "Backing disc cut from reclaimed furniture offcuts",
      },
      {
        icon: "⚙️",
        name: "Quartz Mechanism",
        desc: "Silent-sweep, AA battery-powered clock movement",
      },
      {
        icon: "🧪",
        name: "Eco Resin",
        desc: "Low-VOC bonding adhesive for cap attachment",
      },
    ],
    impact: [
      {
        icon: "🍶",
        title: "Uses ~200 Bottle Caps",
        desc: "Each clock up-cycles approximately 200 bottle caps rescued from drains and gutters.",
      },
      {
        icon: "🪵",
        title: "Reuses Furniture Waste",
        desc: "Salvaged wood backing keeps furniture offcuts out of landfill.",
      },
      {
        icon: "👥",
        title: "Employs 3 Artisans",
        desc: "Production of one clock involves collection, crafting, and quality control by 3 workers.",
      },
      {
        icon: "🎓",
        title: "Funds Advanced Training",
        desc: "Higher-value products fund longer-term skills certification for our artisans.",
      },
    ],
    related: ["flower-pot", "organizer", "earrings"],
  },

  earrings: {
    id: "earrings",
    name: "Kente Drop Earrings",
    tagline:
      "Wear your values. Light enough to forget you have them on; meaningful enough to never forget why.",
    price: 55,
    emoji: "💎",
    imgLabel: "Kente Drop Earrings",
    badge: "Eco Pick",
    category: "Accessories",
    colours: ["#dc2626", "#2563eb", "#16a34a", "#d97706"],
    story: {
      title: "Adornment with Accountability",
      text: `The Kente Drop Earrings are inspired by Ghana's iconic Kente cloth — a hand-woven fabric 
      of silk and cotton with a history going back to the 11th century. Just as Kente is woven 
      strip by strip, our earrings are built layer by layer, using thin sheets of recovered LDPE 
      plastic (grocery bags, thin packaging film, and bubble wrap) that have been cleaned, layered, 
      and fused into colourful composite sheets.
      
      Each pair is individually cut using hand templates in geometric shapes — diamonds, drops, 
      chevrons — then hand-painted with non-toxic acrylic paint and sealed with a bio-based varnish. 
      Hypoallergenic stainless steel hooks complete the earring. No two pairs are ever exactly alike.
      
      They are light, bold, and a conversation starter about what fashion can and should be.`,
    },
    process: [
      {
        title: "Film Plastic Collection",
        desc: "LDPE film plastics (bags, packaging film) are collected from markets.",
      },
      {
        title: "Cleaning",
        desc: "Plastic film is washed in warm water with biodegradable soap and dried in the sun.",
      },
      {
        title: "Lamination",
        desc: "Layers of coloured film are sandwiched and fused at low heat (120°C) to create composite sheets.",
      },
      {
        title: "Cutting",
        desc: "Hand templates are used to cut precise geometric shapes from the composite sheets.",
      },
      {
        title: "Hand Painting",
        desc: "Artisans paint Kente-inspired patterns using non-toxic acrylic paints.",
      },
      {
        title: "Sealing & Assembly",
        desc: "Pieces are sealed with bio-based varnish, drilled, and fitted with stainless steel hooks.",
      },
    ],
    materials: [
      {
        icon: "🛍️",
        name: "LDPE Film Plastic",
        desc: "Sourced from grocery bags and thin packaging film",
      },
      {
        icon: "🎨",
        name: "Non-Toxic Acrylics",
        desc: "Water-based, non-toxic paints in Kente colour palette",
      },
      {
        icon: "🌿",
        name: "Bio-Based Varnish",
        desc: "Plant-derived sealant for durability and shine",
      },
      {
        icon: "🪝",
        name: "Stainless Steel Hooks",
        desc: "Hypoallergenic earring hooks — the only virgin material",
      },
    ],
    impact: [
      {
        icon: "🛍️",
        title: "Rescues Grocery Bags",
        desc: "Each pair diverts approximately 15g of plastic film from burning or littering.",
      },
      {
        icon: "👩‍🎨",
        title: "Women-Led Production",
        desc: "Our earring workshop is 90% staffed by women artisans from the community.",
      },
      {
        icon: "💰",
        title: "Fair Wage Certified",
        desc: "All artisans earn above the Ghanaian living wage for this work.",
      },
      {
        icon: "🌱",
        title: "Supports Plastic Film Recycling",
        desc: "Demand for earrings creates an economic incentive to collect difficult-to-recycle plastics.",
      },
    ],
    related: ["flower-pot", "clock", "organizer"],
  },

  organizer: {
    id: "organizer",
    name: "Upcycled Desk Organizer",
    tagline:
      "A tidy desk. A tidier planet. Moulded from the mess we left behind.",
    price: 75,
    emoji: "✏️",
    imgLabel: "Upcycled Desk Organizer",
    badge: null,
    category: "Desk & Office",
    colours: ["#374151", "#065f46", "#1e3a5f", "#78350f"],
    images: [
      "./assests/Desk_Organizer/main-bucket.png",
      "./assests/Desk_Organizer/bucket_desk.png",
      "./assests/Desk_Organizer/holdinf-bucket.png",
      "./assests/Desk_Organizer/more-buckte.png",
      "./assests/Desk_Organizer/bucket-plain.png",
    ],
    story: {
      title: "Organising the World, One Desk at a Time",
      text: `The Upcycled Desk Organizer is our most practical product — and perhaps our most 
      powerful statement about what plastic waste can become. It is made entirely from shredded 
      PET (Polyethylene Terephthalate) plastic — the most commonly recycled plastic type, yet 
      still one of the most littered.
      
      PET bottles (water, soda, juice) are sorted, shredded into fine flakes, melted, and 
      injected into a custom mould that produces a multi-compartment desk tidy. The surface is 
      lightly sanded and finished with a matte texture. The product is dense, rigid, chemical-resistant, 
      and completely food-safe — making it suitable for holding pens, pencils, scissors, rulers, 
      USB drives, or even small plants.
      
      It is a product designed for workplaces, students, and home offices — a daily reminder 
      that the circular economy is not an abstract idea. It sits on your desk.`,
    },
    process: [
      {
        title: "PET Collection",
        desc: "Clear and coloured PET bottles are collected from schools, offices, and households.",
      },
      {
        title: "Label Removal & Washing",
        desc: "Labels are removed, bottles are washed and dried thoroughly.",
      },
      {
        title: "Shredding",
        desc: "Clean PET bottles are shredded into fine uniform flakes using industrial shredders.",
      },
      {
        title: "Drying",
        desc: "Flakes are dried at 80°C for 6 hours to remove moisture before moulding.",
      },
      {
        title: "Injection Moulding",
        desc: "Dried flakes are melted at 260°C and injected into a multi-compartment steel mould.",
      },
      {
        title: "Cooling, Sanding & QC",
        desc: "Parts cool, are ejected, hand-sanded for smooth finish, and quality-checked.",
      },
    ],
    materials: [
      {
        icon: "🍶",
        name: "PET Plastic",
        desc: "Sourced from water, soda, and juice bottles",
      },
      {
        icon: "⚙️",
        name: "Steel Mould",
        desc: "Reusable multi-compartment injection mould",
      },
      {
        icon: "💧",
        name: "Water Wash",
        desc: "Clean water used for bottle washing, recirculated on-site",
      },
      {
        icon: "📦",
        name: "Recycled Cardboard",
        desc: "Packaged in recycled cardboard boxes with soy-based ink labels",
      },
    ],
    impact: [
      {
        icon: "🍶",
        title: "Uses ~12 PET Bottles",
        desc: "Each organizer recycled approximately 12 standard 500ml PET water bottles.",
      },
      {
        icon: "🎓",
        title: "Student Employment",
        desc: "Produced in partnership with vocational students learning industrial plastic processing.",
      },
      {
        icon: "🏢",
        title: "B2B Impact Sourcing",
        desc: "Bulk orders are available for offices wanting to demonstrate sustainable procurement.",
      },
      {
        icon: "♻️",
        title: "Fully Recyclable Again",
        desc: "At end of life, the organizer can be returned to us and remoulded into a new product.",
      },
    ],
    related: ["flower-pot", "clock", "earrings"],
  },
};

/* Helper: build SVG cart icon string */
const CART_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`;

/* ============================================================
   NAVBAR — Shrink on scroll + Active link highlight
   ============================================================ */
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

window.addEventListener(
  "scroll",
  () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);

    // Highlight active nav link
    let current = "";
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${current}`);
    });
  },
  { passive: true },
);

/* ============================================================
   MOBILE MENU
   ============================================================ */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  });

  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      mobileMenu.setAttribute("aria-hidden", "true");
    });
  });

  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && mobileMenu.classList.contains("open")) {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      mobileMenu.setAttribute("aria-hidden", "true");
    }
  });
}

/* ============================================================
   SMOOTH SCROLL — All anchor links
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const navH = navbar ? navbar.offsetHeight : 70;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - navH - 8,
        behavior: "smooth",
      });
    }
  });
});

/* ============================================================
   INTERSECTION OBSERVER — Fade-in / Slide-up
   ============================================================ */
const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        scrollObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
);

document
  .querySelectorAll(".animate-on-scroll")
  .forEach((el) => scrollObserver.observe(el));

/* ============================================================
   ANIMATED COUNTERS — Stats section (homepage)
   ============================================================ */
const statNumbers = document.querySelectorAll(".stat-number");
let countersStarted = false;

function animateCounter(el, target, suffix, duration = 2000) {
  const startTime = performance.now();
  const isLarge = target >= 1000;
  const fmt = (n) =>
    isLarge && n >= 1000
      ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k"
      : Math.round(n).toString();
  const ease = (t) => 1 - Math.pow(1 - t, 3);

  (function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    el.textContent = fmt(ease(progress) * target) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = fmt(target) + suffix;
  })(startTime);
}

const statsSection = document.querySelector(".impact-stats");
if (statsSection) {
  new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !countersStarted) {
        countersStarted = true;
        statNumbers.forEach((el) =>
          animateCounter(el, +el.dataset.target, el.dataset.suffix || ""),
        );
      }
    },
    { threshold: 0.3 },
  ).observe(statsSection);
}

/* ============================================================
   CART — shared across all pages
   ============================================================ */
let cartCount = 0;
const cartBadge = document.getElementById("cart-badge");
const toast = document.getElementById("toast");
let toastTimer = null;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

function addToCart(btn) {
  cartCount++;
  if (cartBadge) {
    cartBadge.textContent = cartCount;
    cartBadge.style.transform = "scale(1.5)";
    setTimeout(() => {
      cartBadge.style.transform = "scale(1)";
    }, 250);
  }

  const origHTML = btn.innerHTML;
  btn.innerHTML = "✓ Added!";
  btn.style.background = "var(--clr-green-mid)";
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = origHTML;
    btn.style.background = "";
    btn.disabled = false;
  }, 1800);

  showToast(`🛒 "${btn.dataset.name}" added to cart!`);
}

/* ============================================================
   SEARCH BUTTON
   ============================================================ */
const searchBtn = document.getElementById("search-btn");
if (searchBtn)
  searchBtn.addEventListener("click", () =>
    showToast("🔍 Search coming soon!"),
  );

/* ============================================================
   NEWSLETTER FORM (homepage)
   ============================================================ */
const newsletterForm = document.getElementById("newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input[type="email"]');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
      return showToast("⚠️ Please enter a valid email address.");
    }
    const btn = newsletterForm.querySelector("button");
    btn.textContent = "Subscribing…";
    btn.disabled = true;
    setTimeout(() => {
      input.value = "";
      btn.textContent = "Subscribe";
      btn.disabled = false;
      showToast("🎉 Thank you for joining the movement!");
    }, 1200);
  });
}

/* ============================================================
   SHOP PAGE — Filter Pills
   ============================================================ */
const filterPills = document.querySelectorAll(".filter-pill");
const shopGrid = document.getElementById("shop-grid");
const filterCount = document.getElementById("filter-count");

if (filterPills.length && shopGrid) {
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      const filter = pill.dataset.filter;
      const cards = shopGrid.querySelectorAll(".product-card");
      let visible = 0;

      cards.forEach((card) => {
        const cat = card.dataset.category || "all";
        const show = filter === "all" || cat === filter;
        card.classList.toggle("hidden", !show);
        if (show) visible++;
      });

      if (filterCount) {
        filterCount.textContent = `${visible} product${visible !== 1 ? "s" : ""}`;
      }
    });
  });
}

/* ============================================================
   PRODUCT DETAIL PAGE
   ============================================================ */
(function initProductPage() {
  if (!document.getElementById("pd-content")) return; // not on product page

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = PRODUCTS[id];

  const loadingEl = document.getElementById("pd-loading");
  const contentEl = document.getElementById("pd-content");
  const notFoundEl = document.getElementById("pd-not-found");

  // Simulate async load
  setTimeout(() => {
    loadingEl.style.display = "none";

    if (!product) {
      notFoundEl.style.display = "flex";
      return;
    }

    // Show content
    contentEl.style.display = "block";

    // Update page title & meta
    document.getElementById("page-title").textContent =
      `${product.name} | EcoSankofa`;
    document.getElementById("pd-breadcrumb-name").textContent = product.name;

    // Image / placeholder / gallery
    const mainImgEl = document.getElementById("pd-img");
    const placeholderEl = document.getElementById("pd-img-placeholder");
    const thumbContainer = document.getElementById("pd-thumbnails");

    document.getElementById("pd-img-emoji").textContent = product.emoji;
    document.getElementById("pd-img-label").textContent = product.imgLabel;
    placeholderEl.style.background = placeholderBg(id);

    if (product.images && product.images.length > 0) {
      mainImgEl.src = product.images[0];
      mainImgEl.onload = () => { placeholderEl.style.display = "none"; };

      // Initialize thumbnails if more than 1 image
      if (product.images.length > 1 && thumbContainer) {
        product.images.forEach((imgSrc, i) => {
          const thumb = document.createElement("img");
          thumb.src = imgSrc;
          thumb.className = `pd-thumbnail${i === 0 ? " active" : ""}`;
          thumb.alt = `${product.name} view ${i + 1}`;
          thumb.addEventListener("click", () => {
            mainImgEl.src = imgSrc;
            thumbContainer
              .querySelectorAll(".pd-thumbnail")
              .forEach((t) => t.classList.remove("active"));
            thumb.classList.add("active");
          });
          thumbContainer.appendChild(thumb);
        });
      }
    }

    // Badge
    const badge = document.getElementById("pd-img-badge");
    if (product.badge) {
      badge.textContent = product.badge;
      badge.style.display = "";
    } else badge.style.display = "none";

    // Info
    document.getElementById("pd-category").textContent = product.category;
    document.getElementById("pd-name").textContent = product.name;
    document.getElementById("pd-tagline").textContent = product.tagline;
    document.getElementById("pd-price").textContent = `GH₵ ${product.price}`;

    // Colour dots
    const dotsContainer = document.getElementById("pd-colours");
    product.colours.forEach((c, i) => {
      const dot = document.createElement("div");
      dot.className = `pd-colour-dot${i === 0 ? " selected" : ""}`;
      dot.style.background = c;
      dot.title = c;
      dot.addEventListener("click", () => {
        dotsContainer
          .querySelectorAll(".pd-colour-dot")
          .forEach((d) => d.classList.remove("selected"));
        dot.classList.add("selected");
      });
      dotsContainer.appendChild(dot);
    });

    // Quantity
    let qty = 1;
    const qtyVal = document.getElementById("qty-val");
    const qtyMinus = document.getElementById("qty-minus");
    const qtyPlus = document.getElementById("qty-plus");

    qtyMinus.addEventListener("click", () => {
      if (qty > 1) {
        qty--;
        qtyVal.textContent = qty;
      }
    });
    qtyPlus.addEventListener("click", () => {
      qty++;
      qtyVal.textContent = qty;
    });

    // Add to cart
    document
      .getElementById("pd-add-btn")
      .addEventListener("click", function () {
        cartCount += qty;
        if (cartBadge) {
          cartBadge.textContent = cartCount;
          cartBadge.style.transform = "scale(1.5)";
          setTimeout(() => {
            cartBadge.style.transform = "scale(1)";
          }, 250);
        }
        const origText = this.innerHTML;
        this.innerHTML = `✓ ${qty} Added!`;
        this.style.background = "var(--clr-green-mid)";
        this.disabled = true;
        setTimeout(() => {
          this.innerHTML = origText;
          this.style.background = "";
          this.disabled = false;
        }, 1800);
        showToast(`🛒 ${qty}× "${product.name}" added to cart!`);
      });

    // --- Story Tab ---
    document.getElementById("story-title").textContent = product.story.title;
    document.getElementById("story-text").textContent = product.story.text;

    // --- Process Tab ---
    const stepsList = document.getElementById("process-steps");
    product.process.forEach((step) => {
      const li = document.createElement("li");
      li.innerHTML = `<div class="pd-step-text"><strong>${step.title}</strong><p>${step.desc}</p></div>`;
      stepsList.appendChild(li);
    });

    // --- Materials Tab ---
    const matsGrid = document.getElementById("materials-grid");
    product.materials.forEach((mat) => {
      const card = document.createElement("div");
      card.className = "pd-material-card";
      card.innerHTML = `
        <div class="pd-material-icon">${mat.icon}</div>
        <div class="pd-material-name">${mat.name}</div>
        <div class="pd-material-desc">${mat.desc}</div>`;
      matsGrid.appendChild(card);
    });

    // --- Impact Tab ---
    const impactList = document.getElementById("impact-list");
    product.impact.forEach((item) => {
      const div = document.createElement("div");
      div.className = "pd-impact-item";
      div.innerHTML = `
        <span>${item.icon}</span>
        <div class="pd-impact-item-text">
          <strong>${item.title}</strong>
          <p>${item.desc}</p>
        </div>`;
      impactList.appendChild(div);
    });

    // --- Related Products ---
    const relatedGrid = document.getElementById("related-grid");
    product.related.forEach((relId, i) => {
      const rel = PRODUCTS[relId];
      if (!rel) return;
      const article = document.createElement("article");
      article.className = `product-card animate-on-scroll${i > 0 ? ` delay-${i}` : ""}`;
      article.innerHTML = `
        <div class="product-img-wrapper">
          <img 
            src="${rel.images && rel.images.length > 0 ? rel.images[0] : ''}" 
            alt="${rel.name} — upcycled plastic product by EcoSankofa" 
            class="product-img" 
            loading="lazy"
            onload="this.nextElementSibling.style.display='none'" 
          />
          <div class="product-img-placeholder" style="background:${placeholderBg(relId)}">
            <span>${rel.emoji}</span><p>${rel.name}</p>
          </div>
          ${rel.badge ? `<div class="product-badge${rel.badge === "New Arrival" ? " new-badge" : rel.badge === "Eco Pick" ? " eco-badge" : ""}">${rel.badge}</div>` : ""}
          <a href="product.html?id=${rel.id}" class="product-quick-view">View Details</a>
        </div>
        <div class="product-info">
          <span class="product-category-tag">${rel.category}</span>
          <h3 class="product-name">${rel.name}</h3>
          <p class="product-desc">${rel.tagline.split(".")[0]}.</p>
          <div class="product-footer">
            <span class="product-price">GH₵ ${rel.price}</span>
            <div class="product-action-row">
              <a href="product.html?id=${rel.id}" class="btn btn-details">Details</a>
              <button class="btn btn-cart" onclick="addToCart(this)" data-name="${rel.name}" data-price="${rel.price}">
                ${CART_SVG} Add to Cart
              </button>
            </div>
          </div>
        </div>`;
      relatedGrid.appendChild(article);
      scrollObserver.observe(article);
    });

    // Trigger scroll observer on newly added elements
    contentEl
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => scrollObserver.observe(el));
  }, 300); // small delay for loading UX

  /* Tab switching */
  document.querySelectorAll(".pd-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".pd-tab")
        .forEach((t) => t.classList.remove("active"));
      document
        .querySelectorAll(".pd-panel")
        .forEach((p) => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(`tab-${tab.dataset.tab}`).classList.add("active");
    });
  });
})();

/* Placeholder background per product */
function placeholderBg(id) {
  const map = {
    "flower-pot": "linear-gradient(135deg,#e8f5ee,#c8e6d8)",
    clock: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
    earrings: "linear-gradient(135deg,#fce7f3,#fbcfe8)",
    organizer: "linear-gradient(135deg,#fef9c3,#fde68a)",
  };
  return map[id] || "linear-gradient(135deg,#e8f5ee,#c8e6d8)";
}

/* Keyboard accessibility on product cards */
document.querySelectorAll(".product-card").forEach((card) => {
  card.setAttribute("tabindex", "0");
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const btn = card.querySelector(".btn-cart");
      if (btn) btn.click();
    }
  });
});
