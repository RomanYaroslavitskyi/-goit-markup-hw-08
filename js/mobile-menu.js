(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header-btn"),
    closeMenuBtn: document.querySelector(".mobile-menu-btn"),
      menu: document.querySelector(".mobile-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();