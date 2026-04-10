/* =====================================================
   script.js — Confirmação de Presença - Festa da Alice
   ===================================================== */

// ⚠️ SUBSTITUA PELA URL DO SEU GOOGLE APPS SCRIPT:
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxbAJ-YPGpq7g4ECtp8KgmnBIw_9Xh1YaS5zc9YqsF8Bgam60TrhCjGMSrnS3lRZRAljA/exec";

// ---- Referências aos elementos ----
const extraSelect  = document.getElementById('extra-select');
const extraSection = document.getElementById('extra-section');
const nomeInput    = document.getElementById('nome');
const extraNomeInput = document.getElementById('extra-nome');
const confirmBtn   = document.getElementById('confirm-btn');
const successMsg   = document.getElementById('success-msg');
const errorMsg     = document.getElementById('error-msg');

// ---- Mostra / esconde campo de convidado extra ----
extraSelect.addEventListener('change', function () {
  if (this.value === 'sim') {
    extraSection.classList.add('visible');
  } else {
    extraSection.classList.remove('visible');
    extraNomeInput.value = '';
  }
});

// ---- Validação visual de campo obrigatório ----
function destacarErro(el) {
  el.style.borderColor = '#e05050';
  el.focus();
  setTimeout(() => { el.style.borderColor = ''; }, 1800);
}

// ---- Envio da confirmação ----
confirmBtn.addEventListener('click', async function () {
  const nome       = nomeInput.value.trim();
  const comExtra   = extraSelect.value === 'sim';
  const extraNome  = extraNomeInput.value.trim();

  // Esconde mensagem de erro anterior
  errorMsg.classList.remove('visible');

  // Validações
  if (!nome) {
    destacarErro(nomeInput);
    return;
  }
  if (comExtra && !extraNome) {
    destacarErro(extraNomeInput);
    return;
  }

  // Estado de carregamento
  confirmBtn.disabled = true;
  confirmBtn.innerHTML = '<span class="spinner"></span> Confirmando...';

  const payload = {
    convidado:      nome,
    convidadoExtra: comExtra ? extraNome : ''
  };

  try {
    // mode: 'no-cors' é necessário para requisições ao Google Apps Script
    await fetch(APPS_SCRIPT_URL, {
      method:  'POST',
      mode:    'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(payload)
    });

    // Esconde o formulário
    document.querySelectorAll('.form-section, .question-row, .extra-section')
      .forEach(el => { el.style.display = 'none'; });

    // Esconde o botão e mostra sucesso
    confirmBtn.style.display = 'none';
    successMsg.classList.add('visible');

  } catch (err) {
    // Restaura botão e mostra erro
    confirmBtn.disabled = false;
    confirmBtn.innerHTML = 'Confirmar Presença 🌸';
    errorMsg.classList.add('visible');
  }
});