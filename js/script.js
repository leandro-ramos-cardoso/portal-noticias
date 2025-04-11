const url = `https://gnews.io/api/v4/search?q=news&lang=us&country=us&max=10&apikey=${API_KEY}`

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const noticiasDiv = document.getElementById('noticias');

    data.articles.forEach(noticia => {
      console.log(data);
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';

      col.innerHTML = `
        <div class="card h-100">
          
          <img src="${noticia.image}" class="card-img-top rounded-3" alt="Imagem da notícia">
          <div class="card-body">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">${noticia.description || ''}</p>
            <a href="${noticia.url}" target="_blank" class="btn btn-primary rounded-pill">Leia mais</a>
          </div>
        </div>
      `;

      noticiasDiv.appendChild(col);
    });
  })
  .catch(error => console.error('Erro ao carregar notícias:', error));
