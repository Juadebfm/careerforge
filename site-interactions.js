const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  const updateHeaderOnScroll = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeaderOnScroll();
  window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
}

function updatePricingHeroEyebrow() {
  const pricingEyebrow = document.querySelector(".pricing-hero__eyebrow");

  if (!pricingEyebrow) return;

  pricingEyebrow.textContent = "INVEST IN YOUR CAREER";

  const dot = document.createElement("span");
  dot.className = "pricing-hero__dot";
  dot.setAttribute("aria-hidden", "true");
  pricingEyebrow.prepend(dot);
}

updatePricingHeroEyebrow();
