(() => {
  const refs = {
    openModalBtn: document.querySelector('[aboutus-modal-open1]'),
    closeModalBtn: document.querySelector('[aboutus-modal-close1]'),
    modal: document.querySelector('[aboutus-modal1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
