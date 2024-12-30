document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for fixed navbar
            behavior: "smooth"
          });
        }
      });
    });
  
    // Scroll Animation for Sections
    const sections = document.querySelectorAll(".container > div");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, { threshold: 0.2 });
  
    sections.forEach(section => {
      section.classList.add("hidden"); // Add hidden class initially
      observer.observe(section);
    });
  
    // Hover Animation for Images
    document.querySelectorAll(".fit-picture").forEach(img => {
      img.addEventListener("mouseover", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 0.3s ease-in-out";
      });
      img.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
      });
    });
  
    // Text Animation for Titles
    const animateText = (element, delay = 100) => {
      const text = element.textContent;
      element.textContent = "";
      text.split("").forEach((char, i) => {
        setTimeout(() => {
          element.textContent += char;
        }, i * delay);
      });
    };
  
    animateText(document.querySelector(".display-4")); // Animate "Qui suis-je?"
    document.querySelectorAll("#lang-pic h2").forEach(title => animateText(title, 50));
  
    // Button Hover Effect
    document.querySelectorAll("button").forEach(button => {
      button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#ffffff";
        button.style.color = "#000000";
        button.style.transition = "all 0.3s ease-in-out";
      });
      button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#000000";
        button.style.color = "#ffffff";
      });
    });
  });
