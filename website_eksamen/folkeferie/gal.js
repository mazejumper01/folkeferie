    // Variabler der peger på HTML elementerne
    const overlay = document.querySelector(".modal-outer")
    const btn = document.querySelector("#close")
    const imgView = document.querySelector("#modal-img")

    const imgLinks = document.querySelectorAll(".gallery-link")

    imgLinks.forEach( function(element) {
        element.onclick = function (){
            imgClick(element)
            return false   
        }
    })

    //Klik event på lukke knappen
    btn.onclick = function(){
        //Vi skifter klasse på overlay/modal 
        //så den bliver usynlig
        overlay.classList.add("hidden")
    }

    //Funktion der bliver kaldt på link elementerne
    function imgClick(element){

        //src attributten på img tag skal svare til
        //href attribut fra linket (link = element) 
        imgView.setAttribute("src", element.href)
        //Vi skifter klasse på overlay/modal 
        //så den bliver synlig
        overlay.classList.remove("hidden")
    }