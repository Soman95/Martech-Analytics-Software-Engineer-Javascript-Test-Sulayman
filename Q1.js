//Q1. Build a function that will allow you to return the article ID 
//of this article using information stored in the html of the page or elsewhere 

function articleIDRetriever() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://www.telegraph.co.uk/news/2018/04/27/kim-jong-un-becomes-first-north-korean-leader-cross-south-65", true);
    xhr.responseType = "document";

    xhr.onload = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {
            const response = xhr.responseXML.head

            function getMeta(metaName) {
                const metas = xhr.responseXML.getElementsByTagName('meta');

                for (let i = 0; i < metas.length; i++) {
                    if (metas[i].getAttribute('property') === metaName) {

                        console.log(metas[i].getAttribute('content'));
                        return metas[i].getAttribute('content')
                    }
                }
            }

            getMeta('vf:container_id')
        }

    }

    xhr.onerror = function () {
        console.error(xhr.status, xhr.statusText);
    }

    xhr.send();
}

articleIDRetriever();
