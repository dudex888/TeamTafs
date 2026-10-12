
/* COLOQUE AQUI O WHATSAPP DO SEU PAI */
const WHATSAPP_NUMBER = "5587988546203";

document.addEventListener("DOMContentLoaded", () => {
  // Atualiza o ano no rodapé
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Menu para celulares
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "×" : "☰";
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  // Botões que abrem o WhatsApp
  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    const plano = link.dataset.plan ||
      "Olá! Gostaria de saber mais sobre a preparação para o TAF.";

    const mensagem = `Olá! Tenho interesse em: ${plano}`;

    link.href =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
});
