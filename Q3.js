//Q3. Some of the articles on the Telegraph sit behind a paywall and are known as premium articles. 
//Build a function that will identify whether or not this article is premium, 
//using information stored in the html of the page or elsewhere, 
//and return true if the article is premium or return false if it is not premium. 

function articlePremiumCheck() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://www.telegraph.co.uk/business/2018/04/27/pound-slips-six-week-low-markets-brace-growth-slowdown-uk-us", true);
    xhr.responseType = "document";

    xhr.onload = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {
            const response = xhr.responseXML.head

            function getMeta(metaName) {
                const metas = xhr.responseXML.getElementsByTagName('meta');

                for (let i = 0; i < metas.length; i++) {
                    if (metas[i].getAttribute('name') === metaName) {

                        let desiredMetaContent = metas[i].getAttribute('content')

                        console.log('Premium: ' + desiredMetaContent);
                        return desiredMetaContent
                    }
                }
            }

            getMeta("tmg.premium.state")
        }

    }

    xhr.onerror = function () {
        console.error(xhr.status, xhr.statusText);
    }

    xhr.send();
}

articlePremiumCheck();
