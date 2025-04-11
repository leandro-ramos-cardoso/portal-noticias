# 📰 Portal de Notícias

Este é um projeto simples de portal de notícias construído com **HTML, CSS e JavaScript**, utilizando a API da [[NewsAPI.org](https://gnews.io/)] para exibir as notícias mais populares com base em uma busca.

---

## 📁 Estrutura de Pastas

```bash
02-portal-noticias/
│
├── assets/                # Imagens e ícones (pode ser 'images/' direto, se preferir)
│   └── images/
│       ├── logo1.png
│       ├── facebook.svg
│       ├── instagram.svg
│       └── whatsapp.svg
│
├── css/
│   └── style.css          # Estilos do projeto
│
├── js/
│   ├── env.js             # Arquivo com sua API key (não enviado para o Git)
│   ├── env.example.js     # Modelo para criação do seu próprio env.js
│   └── script.js          # Lógica principal do projeto
│
├── .gitignore             # Ignora o env.js
├── index.html             # Página principal
└── README.md              # Este arquivo
```

---

## 🚀 Como rodar o projeto

1. Clone o repositório:

```bash
git clone git@github.com:leandro-ramos-cardoso/portal-noticias.git
cd portal-noticias
```

2. Crie um arquivo chamado `env.js` dentro da pasta `js/`, com a seguinte estrutura:

```js
// js/env.js
const API_KEY = "sua_api_key_aqui";
```

> ⚠️ **Não compartilhe sua chave pública no GitHub.**  
> O arquivo `env.js` está listado no `.gitignore` e não será versionado.

3. Abra o arquivo `index.html` no navegador (você pode usar o Live Server no VSCode ou abrir direto clicando duas vezes).

---

## ✅ API_KEY: `env.example.js`

Já incluímos um arquivo de exemplo:

```bash
js/env.example.js
```

Esse arquivo mostra como deve ser o formato da sua variável de ambiente.  
Você pode copiá-lo e renomear como `env.js`, preenchendo com sua chave real da API:

```bash
cp js/env.example.js js/env.js
```
---

## 🔧 Tecnologias usadas

- HTML5
- CSS3
- JavaScript
- [[NewsAPI.org](https://gnews.io/)]

---

## 🧑‍💻 Autor

Desenvolvido por **Leandro Ramos Cardoso**.  
Entre em contato para dúvidas, ideias ou sugestões!

---

## 📄 Licença

Este projeto é livre para fins de estudo, modificação e uso não comercial.
