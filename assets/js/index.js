var url =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=72f827510e6a46cb8736388e22a252e0';

const newsEl = document.querySelector('.news');

async function dataReq(url) {
  try {
    const res = await fetch(url);
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

dataReq(url).then((data) => {
  const news = data.articles;
  news.forEach((element) => {
    if (element.title !== '[Removed]' && element.description !== null) {
      const template = `
       <div class=" p-3 news-card d-flex align-items-center shadow">
          <img src="${element.urlToImage}" alt="News Image" class="news-image" />
          <div class="news-content">
              <h4 class="news-title">${element.title}</h2>
              <p class="news-description">
                ${element.description}
              </p>
              <div class="news-meta text-black-50">
                  <span class="news-author">${element.author}</span>
                  <span class="news-date">${element.publishedAt}</span>
              </div>
          </div>
      </div>`;

      newsEl.innerHTML += template;
    }
  });
});
