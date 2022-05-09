//Q2. Every article has a publish date. Build a function that returns the article publish date,
//using information stored in the html of the page or elsewhere, in a dd - mm - yyyy format, 
//without including the time(hh: mm) the article was created

function articlePublishDate() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://www.telegraph.co.uk/news/2018/04/27/kim-jong-un-becomes-first-north-korean-leader-cross-south-65", true);
    xhr.responseType = "document";

    xhr.onload = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {
            const response = xhr.responseXML.head

            function getMeta(metaName) {
                const metas = xhr.responseXML.getElementsByTagName('meta');

                for (let i = 0; i < metas.length; i++) {
                    if (metas[i].getAttribute('name') === metaName) {

                        let desiredMetaContent = metas[i].getAttribute('content')

                        let pubDate = new Date(desiredMetaContent)

                        let yyyy = pubDate.getFullYear();
                        let mm = pubDate.getMonth() + 1;
                        let dd = pubDate.getDate();

                        if (dd < 10) dd = '0' + dd;
                        if (mm < 10) mm = '0' + mm;

                        pubDate = dd + '-' + mm + '-' + yyyy;

                        console.log(pubDate);
                        return pubDate
                    }
                }
            }

            getMeta("DCSext.articleFirstPublished")
        }

    }

    xhr.onerror = function () {
        console.error(xhr.status, xhr.statusText);
    }

    xhr.send();
}

articlePublishDate();
