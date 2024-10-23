var url =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=72f827510e6a46cb8736388e22a252e0';

var req = new Request(url);

fetch(req).then(function (response) {
  console.log(response);
  const news = response.json();
  console.log(news);
});

const template = `
       <div class="w-50 p-3 news-card border-2 border border-danger d-flex align-items-center">
          <img src="image-url.jpg" alt="News Image" class="news-image" style="width: 50%; height: 100%" />
          <div class="news-content ms-3 border border-black" style="width: 50%; height: 100%">
              <h2 class="news-title">News Title</h2>
              <p class="news-description">
                This is a short description of the news article...
              </p>
              <div class="news-meta">
                  <span class="news-author">Author Name</span>
                  <span class="news-date">Date</span>
              </div>
          </div>
      </div>`;
