// Smooth scroll for internal links with hashes
document.addEventListener("click", function (e) {
  const link = e.target.closest("a[href^='#']");
  if (!link) return;

  const targetId = link.getAttribute("href").slice(1);
  const target = document.getElementById(targetId);
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
});

// Scroll reveal for elements with .reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Copy-to-clipboard helper (for contact email)
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      alert("Email address copied to clipboard.");
    });
  } else {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Email address copied to clipboard.");
  }
}
