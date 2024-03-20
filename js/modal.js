(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

const hamburger = document.querySelector("#hamburger");
const closeButton = document.querySelector("#btn-close");
const mobileMenu = document.querySelector("#menu-mobile");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.remove("is-open");
});
