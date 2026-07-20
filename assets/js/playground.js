// playground.js
import { $, $$ } from './utils.js';
import { showToast } from './toast.js';

export const initPlayground = () => {
  const form = $('#emailForm');
  const sendBtn = $('#btnSendEmail');

  if (form && sendBtn) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const recipient = $('#recipient').value;
      const subject = $('#subject').value;
      const message = $('#message').value;

      if (!recipient || !subject || !message) {
        showToast('Please fill all fields', 'warning');
        return;
      }

      // Fake Loading state
      sendBtn.textContent = 'Sending...';
      sendBtn.disabled = true;
      sendBtn.classList.add('loading'); // Could add a spinner via CSS

      setTimeout(() => {
        sendBtn.textContent = 'Send Email';
        sendBtn.disabled = false;
        sendBtn.classList.remove('loading');
        
        showToast('Email sent successfully!', 'success');
        form.reset();
      }, 1500);
    });
  }
};
