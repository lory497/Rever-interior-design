/***************** Cookies ***********************/

const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-cookies");
const rejectBtn = document.getElementById("reject-cookies");

if (!localStorage.getItem("cookieConsent")) {
  banner.style.display = "flex";
}

acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "accepted");
  banner.style.display = "none";
  loadAnalytics();
});

rejectBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "rejected");
  banner.style.display = "none";
});

if (localStorage.getItem("cookieConsent") === "accepted") {
  loadAnalytics();
}

/***************** Responsive nav ***********************/

const navigation = document.querySelector(".menu");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navLinks = document.querySelectorAll(".menu a");

navToggle.addEventListener("click", () => {
  const visibility = navigation.getAttribute("data-visible");

  if (visibility === "false") {
    navigation.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    navigation.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Smooth scroll + active class

const sections = document.querySelectorAll("section[id], div[id]");

function scrollTracker() {
  const currentYScroll = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 80;
    const id = section.getAttribute("id");
    const currentNavLink = document.querySelector(
      `nav .menu a[href*="#${id}"]`,
    );

    if (!currentNavLink) return;

    if (
      currentYScroll > sectionTop &&
      currentYScroll <= sectionTop + sectionHeight
    ) {
      currentNavLink.classList.add("active");
    } else {
      currentNavLink.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollTracker);

/***************** Navigacija projekata ***********************/

const projects = document.querySelectorAll(".projekt");

projects.forEach((project) => {
  project.addEventListener("click", () => {
    const page = project.dataset.page;
    if (page) {
      window.location.href = page;
    }
  });
});

/***************** Scroll in view ***********************/

// provjera vidljivosti elementa
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Dodavanje 'fade-in-visible' klase kada se element pojavi
function handleScroll() {
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("fade-in-visible");
    }
  });
}

// Listen for scroll events
window.addEventListener("scroll", handleScroll);

// Trigger initial check on page load
document.addEventListener("DOMContentLoaded", handleScroll);

/***************** ACCORDION FUCTIONALITY ***********************/

const accs = document.querySelectorAll(".accordion");

accs.forEach((acc) => {
  acc.addEventListener("click", () => {
    acc.classList.toggle("active");
  });
});

/***************** Dodatna provjera Forme ***********************/

const imeInput = document.querySelector("#name");
const porukaInput = document.querySelector("#message");

const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu;

/* IME */
imeInput.addEventListener("input", () => {
  imeInput.value = imeInput.value
    .replace(emojiRegex, "") // emoji
    .replace(/[^A-Za-zÀ-ž\s'-]/g, ""); // posebni znakovi
});

/***************** COOKIES *****************/

function loadAnalytics() {
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-6H453Y9XQJ";
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", "G-6H453Y9XQJ");
}

document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  if (!localStorage.getItem("cookieConsent")) {
    banner.classList.add("show");
  }

  acceptBtn?.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    banner.classList.remove("show");
    loadAnalytics();
    console.log("accepted");
  });

  rejectBtn?.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "rejected");
    banner.classList.remove("show");
    console.log("not accepted");
  });

  if (localStorage.getItem("cookieConsent") === "accepted") {
    loadAnalytics();
  }
});
