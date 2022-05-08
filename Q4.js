function articleCookieCreator() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://www.telegraph.co.uk/business/2018/04/27/pound-slips-six-week-low-markets-brace-growth-slowdown-uk-us", true);
    xhr.responseType = "document";

    xhr.onload = function () {

        if (xhr.readyState == 4 && xhr.status == 200) {
            const response = xhr.responseXML.cookie

            let optimizelyenduserid = ''

            //function to retreive 'optimizelyenduserid' cookie content

            function getCookieData() {
                //there does not seem to be a cookie present called 'optimizelyenduserid'
                //unsure how to retreive cookie data from external website (I don't think it is permitted), to then save onto mine

                const cookiesArray = document.cookie.split(";")

                const targetCookie = cookiesArray.filter(keyword => keyword.includes('optimizelyenduserid'))

                const cookieKeyValue = targetCookie.toString().split('=')

                optimizelyenduserid = cookieKeyValue[1]
            }


            function setCookie(cname, cvalue, exdays) {
                const d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                let expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }

            console.log(response)
            getCookieData()
            setCookie('testopt', optimizelyenduserid, 30)
        }

    }

    xhr.onerror = function () {
        console.error(xhr.status, xhr.statusText);
    }

    xhr.send();
}

articleCookieCreator();
