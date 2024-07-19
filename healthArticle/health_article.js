var xhr = new XMLHttpRequest();
var url = './health_article.json';
// XHR request with parameters:
// GET: Specifies the HTTP method used for the request(GET request)
// URL: url from where data is fetched
//true: indicates whether the request is async(true) or sync(false)
xhr.open('GET', url, true);
//Specify response in which format we are expecting (JSON format)
xhr.responseType = 'json';
//Define what should happen when data is loaded 
//using xhr.onload function.
xhr.onload = function(){
    //To retrieve articles array from JSON response.
    var articles = xhr.response.articles;
    //To get HTML element where fetched content will
    //be displayed.
    var articlesDiv = document.getElementById('articles'); 
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
    
        var title = document.createElement('h2');
        title.textContent = article.title;
    
        var description = document.createElement('p');
        description.textContent = article.description;
    
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
    
        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
          var listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });
    
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
    
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
          var listItem = document.createElement('li');
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });
    
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
    
        articlesDiv.appendChild(articleDiv);
      });
    
     
}

xhr.send();
