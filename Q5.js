//Q5. Write a function that will parse through the list of keywords in the keywords metatag on 
//this page and return any keyword terms that contain the word ‘prince’.  

function articleKeywordLocator() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://www.telegraph.co.uk/news/2018/04/27/prince-louis-arthur-charles-new-royal-baby-name-announced-duke/", true);
    xhr.responseType = "document";

    xhr.onload = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {
            const response = xhr.responseXML

            function getMeta(metaName) {
                const metas = xhr.responseXML.getElementsByTagName('meta');

                for (let i = 0; i < metas.length; i++) {
                    if (metas[i].getAttribute('name') === metaName) {

                        let desiredMetaContent = metas[i].getAttribute('content')

                        const arrayKeywords = desiredMetaContent.split(',')

                        const filteredKeywords = arrayKeywords.filter(keyword => keyword.includes('Prince'))

                        console.log(filteredKeywords)

                        return filteredKeywords
                    }
                }
            }

            getMeta('keywords')
        }

    }

    xhr.onerror = function () {
        console.error(xhr.status, xhr.statusText);
    }

    xhr.send();
}

articleKeywordLocator();