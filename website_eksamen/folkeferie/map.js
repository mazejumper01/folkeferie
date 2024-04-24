//Referencer til DOM elementer

//Div tag

const mapContainer = document.querySelector(".map-container")

//Img tag

const img = document.querySelector(".map-img")

//Area tag

const areas = document.querySelector("#image-map")

//Div class="infobox"

const infobox = document.querySelector(".infobox")

//Button element inde i infobox

const closeBtn = document.querySelector(".close")







//Klik event på imagemappet

areas.addEventListener("click", function(event){

    //Aflys default klik event (dvs. naviger ikke til href)

    event.preventDefault()

    

        //event.target er det child-element der er blevet klikket på

    console.log(event.target)

        //Der er et p tag i infoboxen

        //vi putter teksten fra data-text attributten ind i denne

        infobox.querySelector("p").innerHTML = event.target.dataset.text

        //infobox bliver synlig

        infobox.style.display = "block"

        

        //knappen skjuler infoboxen igen

       closeBtn.addEventListener("click", function(){

            infobox.style.display = "none"

            infobox.innerHTML =""

        })
    

})







//når siden loader skal mappet scaleres 

//så vi kalder scaleMap funktionen

window.addEventListener("load", function(){

    scaleMap()

})




//Når browseren resizes skal funktionen også køre

window.addEventListener("resize", function(){

    scaleMap()

})




//Magiske runer :D

//vi ændrer noget transform CSS

//tænk ikke over det

//og RØR DET IKKE

// window.setInterval(function () {

//     scaleMap()

//     console.log("Hallo")

// },1000)





function scaleMap(){

    //billedets bredte og højde

//Bliver brugt i vores scaleMap funktion

let imgWidth = img.offsetWidth

let imgHeight = img.offsetHeight

    let scale = mapContainer.offsetWidth / imgWidth

    //console.log(scale)

    img.style.transform = "scale("+scale+")"

    mapContainer.style.height = imgHeight * scale + "px"

}