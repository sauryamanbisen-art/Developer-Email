// modal.js
import { $, $$ } from './utils.js';

export const initModals = () => {
  const modalTriggers = $$('[data-modal-target]');
  const modals = $$('.modal-overlay');
  const closeBtns = $$('.modal-close');

  const openModal = (id) => {
    const modal = $(id);
    if (modal) modal.classList.add('active');
  };

  const closeModal = (modal) => {
    if (modal) modal.classList.remove('active');
  };

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(trigger.dataset.modalTarget);
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(btn.closest('.modal-overlay'));
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => closeModal(modal));
    }
  });
};
