// Product data
const products = [
  {
    id: 1,
    title: "Enchanted Pearl Drops",
    price: "₹299",
    description:
      "These elegant pearl earrings feature lustrous freshwater pearls suspended from delicate gold chains. The subtle movement catches the light beautifully, creating a mesmerizing effect that enhances any outfit.",
    features: [
      "Genuine freshwater pearls",
      "18K gold-plated sterling silver",
      "Hypoallergenic posts",
      "Handcrafted in Pune",
      "Comes in a luxury gift box",
    ],
    images: [
      "https://images.unsplash.com/photo-1610694955371-d4a34a34e6b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    ],
    category: "earrings",
  },
  {
    id: 2,
    title: "Crystal Chandelier",
    price: "₹499",
    description:
      "Make a statement with these stunning chandelier earrings featuring cascading crystals that catch and reflect light from every angle. Perfect for special occasions or when you want to add drama to your look.",
    features: [
      "Premium Swarovski crystals",
      "Rhodium-plated brass",
      "Secure lever-back closure",
      "Lightweight design for comfort",
      "Handcrafted with precision",
    ],
    images: [
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1630283056515-3b0a56a4c59d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    ],
    category: "earrings",
  },
  {
    id: 3,
    title: "Golden Hoops",
    price: "₹299",
    description:
      "These classic gold hoops with a modern twist are versatile enough for everyday wear yet elegant enough for special occasions. The textured finish adds a unique touch to this timeless style.",
    features: [
      "14K gold-plated brass",
      "Textured finish",
      "Secure click closure",
      "Diameter: 4cm",
      "Tarnish-resistant coating",
    ],
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    ],
    category: "earrings",
  },
  {
    id: 4,
    title: "Mystic Moonstone",
    price: "₹199",
    description:
      "This stunning moonstone ring set in sterling silver features intricate detailing around the band. The moonstone exhibits a beautiful blue sheen that changes as it catches the light from different angles.",
    features: [
      "Natural rainbow moonstone",
      "Sterling silver setting",
      "Intricate filigree detailing",
      "Available in sizes 5-9",
      "Ethically sourced gemstone",
    ],
    images: [
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    category: "rings",
  },
  {
    id: 5,
    title: "Twisted Vine",
    price: "₹289",
    description:
      "A delicate ring inspired by nature with a twisted vine design in rose gold. This elegant piece wraps gracefully around your finger, symbolizing growth and connection.",
    features: [
      "18K rose gold plating",
      "Twisted vine design",
      "Comfortable fit",
      "Stackable with other rings",
      "Tarnish-resistant finish",
    ],
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    category: "rings",
  },
  {
    id: 6,
    title: "Sapphire Dream",
    price: "₹259",
    description:
      "An elegant ring featuring a deep blue sapphire surrounded by tiny diamonds. The rich color of the sapphire is complemented perfectly by the sparkle of the diamonds.",
    features: [
      "Natural blue sapphire",
      "Cubic zirconia accents",
      "Sterling silver band",
      "Rhodium plating for durability",
      "Available in sizes 5-9",
    ],
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1598560917505-59a3ad559071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    ],
    category: "rings",
  },
  {
    id: 7,
    title: "Crystal Hairpin Set",
    price: "₹189",
    description:
      "A set of three delicate crystal hairpins that add sparkle to any hairstyle. Perfect for special occasions or to add a touch of glamour to everyday looks.",
    features: [
      "Set of three hairpins",
      "Premium crystal embellishments",
      "Silver-plated pins",
      "Secure grip design",
      "Comes in a gift box",
    ],
    images: [
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1595951960408-a7259cd152dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    ],
    category: "hair",
  },
  {
    id: 8,
    title: "Pearl Headband",
    price: "₹199",
    description:
      "An elegant pearl-embellished headband that adds a touch of sophistication to any hairstyle. The pearls are arranged in a delicate pattern that catches the light beautifully.",
    features: [
      "Freshwater pearl embellishments",
      "Comfortable velvet lining",
      "Flexible fit",
      "Suitable for all hair types",
      "Handcrafted with care",
    ],
    images: [
      "https://images.unsplash.com/photo-1595951960408-a7259cd152dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    ],
    category: "hair",
  },
  {
    id: 9,
    title: "Floral Hair Comb",
    price: "₹99",
    description:
      "A beautiful floral-inspired hair comb with crystal accents, perfect for special occasions. The intricate design adds a romantic touch to any hairstyle.",
    features: [
      "Floral design with crystal accents",
      "Gold-plated metal",
      "Secure teeth for stability",
      "Perfect for updos and half-up styles",
      "Comes in a luxury gift box",
    ],
    images: [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1595951960408-a7259cd152dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    category: "hair",
  },
];

// Navigation
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileNav.classList.toggle("open");
  document.body.style.overflow = mobileNav.classList.contains("open")
    ? "hidden"
    : "auto";
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".mobile-nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileNav.classList.remove("open");
    document.body.style.overflow = "auto";
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    window.scrollTo({
      top: targetElement.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  });
});

// Filter products
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Update active button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    productCards.forEach((card) => {
      if (filterValue === "all") {
        card.style.display = "block";
      } else {
        if (card.getAttribute("data-category") === filterValue) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });
  });
});

// Category button click handler
document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const filter = this.getAttribute("data-filter");
    const productsSection = document.querySelector("#products");

    // Scroll to products section
    window.scrollTo({
      top:
        productsSection.offsetTop -
        document.querySelector(".navbar").offsetHeight,
      behavior: "smooth",
    });

    // Activate the corresponding filter button
    setTimeout(() => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-filter") === filter) {
          btn.classList.add("active");
          btn.click();
        }
      });
    }, 500);
  });
});

// Product Modal
const productModal = document.querySelector(".product-modal");
const productModalClose = document.querySelector(".product-modal-close");
const productModalTitle = document.querySelector(".product-modal-title");
const productModalPrice = document.querySelector(".product-modal-price");
const productModalDesc = document.querySelector(".product-modal-desc");
const productModalMainImage = document.querySelector(
  ".product-modal-main-image"
);
const productModalThumbnails = document.querySelector(
  ".product-modal-thumbnails"
);
const productModalFeatureList = document.querySelector(
  ".product-modal-feature-list"
);

// Open product modal
document.querySelectorAll(".product-overlay-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const productCard = this.closest(".product-card");
    const productId = parseInt(productCard.getAttribute("data-id"));
    const product = products.find((p) => p.id === productId);

    if (product) {
      // Set modal content
      productModalTitle.textContent = product.title;
      productModalPrice.textContent = product.price;
      productModalDesc.textContent = product.description;
      productModalMainImage.src = product.images[0];
      productModalMainImage.alt = product.title;

      // Set thumbnails
      productModalThumbnails.innerHTML = "";
      product.images.forEach((image, index) => {
        const thumbnail = document.createElement("img");
        thumbnail.src = image;
        thumbnail.alt = `${product.title} - Image ${index + 1}`;
        thumbnail.classList.add("product-modal-thumbnail");
        if (index === 0) thumbnail.classList.add("active");

        thumbnail.addEventListener("click", () => {
          document
            .querySelectorAll(".product-modal-thumbnail")
            .forEach((thumb) => thumb.classList.remove("active"));
          thumbnail.classList.add("active");
          productModalMainImage.src = image;
        });

        productModalThumbnails.appendChild(thumbnail);
      });

      // Set features
      productModalFeatureList.innerHTML = "";
      product.features.forEach((feature) => {
        const li = document.createElement("li");
        li.textContent = feature;
        productModalFeatureList.appendChild(li);
      });

      // Open modal
      productModal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });
});

// Close product modal
productModalClose.addEventListener("click", () => {
  productModal.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Close modal when clicking outside
productModal.addEventListener("click", (e) => {
  if (e.target === productModal) {
    productModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Quantity buttons
const quantityMinus = document.querySelector(".quantity-minus");
const quantityPlus = document.querySelector(".quantity-plus");
const quantityInput = document.querySelector(".product-modal-quantity input");

quantityMinus.addEventListener("click", () => {
  let value = parseInt(quantityInput.value);
  if (value > 1) {
    quantityInput.value = value - 1;
  }
});

quantityPlus.addEventListener("click", () => {
  let value = parseInt(quantityInput.value);
  quantityInput.value = value + 1;
});

// Testimonial slider
const testimonialDots = document.querySelectorAll(".testimonial-dot");
const testimonialItems = document.querySelectorAll(".testimonial-item");

testimonialDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // Update active dot
    testimonialDots.forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");

    // Show corresponding testimonial
    testimonialItems.forEach((item) => item.classList.remove("active"));
    testimonialItems[index].classList.add("active");
  });
});

// Auto rotate testimonials
let testimonialIndex = 0;
setInterval(() => {
  testimonialIndex = (testimonialIndex + 1) % testimonialItems.length;
  testimonialDots[testimonialIndex].click();
}, 5000);

// Contact form submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simple form validation
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (name && email && subject && message) {
    // In a real application, you would send this data to a server
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

// Newsletter form submission
const newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = newsletterForm.querySelector(".newsletter-input").value;

  if (email) {
    // In a real application, you would send this data to a server
    alert("Thank you for subscribing to our newsletter!");
    newsletterForm.reset();
  } else {
    alert("Please enter your email address.");
  }
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'96537c3fd1ad4732',t:'MTc1MzUyODU5MS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
