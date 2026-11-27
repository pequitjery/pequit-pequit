if (typeof window !== "undefined" && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll("[data-animate]").forEach((element) => {
    observer.observe(element);
  });
} else if (typeof document !== "undefined") {
  document.querySelectorAll("[data-animate]").forEach((element) => {
    element.classList.add("is-visible");
  });
}
