const API_KEY="e4fc72735a3743afae298a92b13d3dd0"
// console.log(API_KEY)

console.log("welcome");
// topNewsContainer = document.querySelector(".top-news-container")
newscontainer=document.getElementById("news-container")
// console.log(topNewsContainer)
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${API_KEY}`, true);
// xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e4fc72735a3743afae298a92b13d3dd0', true);


// for wait or loading 
let wait=document.getElementById('wait').addEventListener('progress',waitfunc());
function waitfunc(){
    let wait = document.getElementById('wait');
    // alert("Video progress");
    wait.innerHTML="<h1>please wait....</h1>"
}

// var date= new Date()
// console.log(date.toLocaleDateString())

//  when data is loaded 

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        
        let newsHtml = "";
        
        console.log(articles)
        articles.forEach(function (element, index) {

            // let date =element["publishedAt"]
            // console.log(date)
           
            let news =  `<div class="news">

        
                <div class="title center">
                    <h2>Breaking News:${index+1} </h2>
                </div>
                <div class="news-container">

                    <div class="image"><img src="${element['urlToImage']}" alt="No Image Found..."></div>
                    <div class="news-title"><b>${element["title"]}</b></div>
                

                    <div class="card-body">
                    <button class="read-more"> <a href="${element['url']}" target="_blank">Read more
                            here</a> </button></div>
        
        
                </div>
            </div>`
                newsHtml += news; 
        })
        // topNewsContainer.innerHTML = newsHtml;
        newscontainer.innerHTML=newsHtml
    } else {

        console.log("Some error occured")
    }
    wait = document.getElementById('wait').style.display='none';
}


xhr.send();
