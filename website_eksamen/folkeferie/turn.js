const range = document.querySelector("#range")
const turnImg = document.querySelector("#turn-img")

range.addEventListener("input", function(){
    console.log(this.value)
    let extraDigit = "0"
    if (this.value > 9){
        extraDigit = ""
    }
    else{
        extraDigit = "0"
    }
    turnImg.setAttribute("src", "turntable/00" + extraDigit + this.value + ".png")


})