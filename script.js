// Show more books logic
document.addEventListener("DOMContentLoaded", () => {
    const showMoreBtn = document.getElementById("showMoreBtn");
    if (showMoreBtn) {
      showMoreBtn.addEventListener("click", () => {
        const hiddenBooks = document.querySelectorAll(".book.hidden");
        hiddenBooks.forEach(book => book.classList.remove("hidden"));
        showMoreBtn.style.display = "none";
      });
    }
  
    // Contact form validation
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const msgEl = document.getElementById("formMessage");
  
        if (name && email && message) {
          msgEl.textContent = "Thank you! We'll get back to you soon.";
          msgEl.style.color = "green";
          contactForm.reset();
        } else {
          msgEl.textContent = "Please fill in all fields.";
          msgEl.style.color = "red";
        }
      });
    }
  });
  