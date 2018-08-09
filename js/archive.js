(function() {
  "use strict";
  window.addEventListener("load", function() {
    var jsonURL = "https://credentials-api.generalassemb.ly/explorer/posts";
    const loadButton = document.querySelector("#load-more");
    const articleList = document.querySelector("#article-list");
    const articleListFooter = document.querySelector("#article-list > footer");
    let offset = 0;

    loadButton.addEventListener("click", function() {
      toggleLoadButton();

      fetch(jsonURL + "?offset=" + offset)
        .then(function(res) {
          return res.json();
        })
        .then(function(jsonArticles) {
          if (jsonArticles.posts.length) {
            offset += 4;
            toggleLoadButton();

            jsonArticles.posts.forEach(function(postData) {
              createArticle(postData);
            });
          } else {
            loadButton.setAttribute("disabled", "disabled");
            loadButton.innerText = "End of Archive";
          }
        })
        .catch(handleArticleError);
    });

    function toggleLoadButton() {
      if (loadButton.disabled) {
        loadButton.removeAttribute("disabled");
        loadButton.innerText = "Load more";
      } else {
        loadButton.setAttribute("disabled", "disabled");
        loadButton.innerText = "Loading articles";

        const loadIcon = document.createElement("i");
        loadIcon.classList.add("fa", "fa-spinner", "fa-pulse");
        loadButton.appendChild(loadIcon);
      }
    }

    function createArticle(articleData) {
      const article = document.createElement("article");

      const icon = document.createElement("i");
      icon.classList.add("fa", articleData.category);
      article.appendChild(icon);

      const fromTheArchive = document.createElement("h2");
      fromTheArchive.innerText = "From the Archive";
      article.appendChild(fromTheArchive);

      const title = document.createElement("h1");
      title.innerText = articleData.title;
      article.appendChild(title);

      const date = document.createElement("h3");
      date.innerText = articleData.date;
      article.appendChild(date);

      const blurb = document.createElement("p");
      blurb.innerText = articleData.blurb;
      article.appendChild(blurb);

      articleList.insertBefore(article, articleListFooter);
    }

    function handleArticleError(err) {
      loadButton.setAttribute("disabled", "disabled");
      loadButton.innerText = "Error loading articles";
      console.error(err);
    }
  });
})();
