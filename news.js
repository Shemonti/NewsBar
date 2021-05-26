
//fd5afa9fe7694c998a1a6900ed27876e//
// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = 'fd5afa9fe7694c998a1a6900ed27876e'

let newsAccordion = document.getElementById('newsaccordion');
//Create the get request
let xhr = new XMLHttpRequest();

xhr.open("GET", `https://gnews.io/api/v4/top-headlines?token=bd765394ab0657dc8fd148438771ec44`, true)

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            
            let news = `<div class="accor accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                    <b>Breaking News ${index+1}:</b>  ${element["title"]}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ${element["content"]}.<a href="${element['url']}" target="_blank" >Read more here</a> 
                </div>
            </div>
        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


// srh=document.getElementById("srch");
// srh.addEventListener("click",searchsome)
srh=document.getElementById("serach_text");
srh.addEventListener("keyup",searchsome)

function searchsome(){
    let inputval=srh.value.toLowerCase()
    // console.log(inputval)
    
    let newsAccor = document.getElementsByClassName('accor');
    Array.from(newsAccor).forEach(function(element){
        
        let ctxt=element.innerText;
        // console.log(ctxt)

        //condition of matching alphabets
        if(ctxt.includes(inputval)){
            element.style.display="block"
        }
        else{
            element.style.display="none"
        }
    })
}

