// "panel" sinfinə sahip bütün elementləri seçib "panels" massivinə yığırıq
const panels = document.querySelectorAll(".panel");

// Bütün panel elementlərindən "active" sinfini silmək üçün funksiya
function activeRemover() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// Hər bir panel elementini üçün "click" hadisəsinə əsaslanan dinləyici əlavə edirik
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // Kliklənən panelin artıq "active" sinfi olub-olmadığını yoxlayırıq
    if (panel.classList.contains("active")) {
      // Əgər varsa, paneli bağlamaq üçün "active" sinfini silirik
      panel.classList.remove("active");
    } else {
      // Əgər yoxdursa, bütün panel elementlərindən "active" sinfini silib
      // sonra kliklənən panelə "active" sinfini əlavə edirik, ki, onu genişləndirək və bir əvvəlki paneli kiçildək
      activeRemover();
      panel.classList.add("active");
    }
  });
});
