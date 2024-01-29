// Función para mostrar el botón de compartir en redes sociales
function showShareButton() {
    // Obtenemos el elemento del botón de compartir
    const shareButton = document.querySelector(".share-button");
  
    // Si el botón no está visible, lo mostramos
    if (!shareButton.classList.contains("show")) {
      shareButton.classList.add("show");
    }
  }
  
  // Cuando el usuario llegue a la página web, mostramos el botón
  window.onload = () => {
    showShareButton();
  };
  
  // Cuando el usuario haga clic en un enlace, mostramos el botón
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      showShareButton();
    });
  });
  