let url = '';
const baseUrl = 'https://newsapi.org/v2/';
const apiKey = '&apiKey=72f827510e6a46cb8736388e22a252e0';

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

function updateNews(type) {
  newsEl.innerHTML = '';

  if (type === 'us') {
    url = `${baseUrl}top-headlines?country=us${apiKey}`;
  } else if (type === 'business') {
    url = `${baseUrl}/top-headlines?country=us&category=business${apiKey}`;
  } else if (type === 'cryptocurrency') {
    url = `${baseUrl}/everything?q=crypto&sortBy=publishdAt${apiKey}`;
  } else if (type === 'techcrunch') {
    url = `${baseUrl}/top-headlines?sources=techcrunch${apiKey}`;
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
}
