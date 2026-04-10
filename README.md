# 🎀 Sistema de Confirmação de Presença — Festa da Alice

Página web para confirmação de presença no aniversário de 20 anos da Alice. Os convidados preenchem o nome e confirmam presença diretamente pelo link, com os dados sendo enviados para uma planilha do Google Sheets via Google Apps Script.

## ✨ Funcionalidades

- Confirmação de presença com nome do convidado
- Opção de adicionar um convidado extra
- Alerta para que o convidado extra seja comunicado previamente à aniversariante
- Validação dos campos antes do envio
- Mensagem de sucesso após confirmação
- Design responsivo para mobile e desktop

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Apps Script (backend para receber os dados)
- Google Sheets (planilha de confirmações)
- GitHub Pages (hospedagem)

## 📁 Estrutura do Projeto

```
/
├── index.html   # Estrutura da página
├── style.css    # Estilos e responsividade
└── script.js    # Lógica de envio e validação
```

## 🚀 Como rodar localmente

Basta abrir o arquivo `index.html` no navegador. Não há dependências ou instalação necessária.

## ⚙️ Configuração do Google Apps Script

No arquivo `script.js`, substitua a variável `APPS_SCRIPT_URL` pela URL gerada ao publicar o seu Google Apps Script:

```js
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/SEU_ID_AQUI/exec";
```

## 🌐 Deploy

O projeto está hospedado via **GitHub Pages** na branch `main`.