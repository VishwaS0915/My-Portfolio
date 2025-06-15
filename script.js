document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const responseMessage = document.getElementById("response-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    responseMessage.textContent = "Thanks for contacting me! I'll get back to you soon.";
    form.reset();
  });

  // Animate project cards on scroll into view
  const cards = document.querySelectorAll(".project-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateX(0)";
        entry.target.style.opacity = "1";
        entry.target.style.transition = "all 0.8s ease";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  cards.forEach((card) => {
    card.style.transform = "translateX(100px)";
    card.style.opacity = "0";
    observer.observe(card);
  });

  // Typing animation
  const nameSpan = document.querySelector(".highlight");
  const nameText = nameSpan.textContent;
  nameSpan.textContent = "";
  let i = 0;
  function type() {
    if (i < nameText.length) {
      nameSpan.textContent += nameText.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();
});
