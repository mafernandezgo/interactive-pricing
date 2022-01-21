const numPageViews = document.querySelector(".numPageViews")
const price = document.querySelector(".priceValue")
const checkbox = document.querySelector(".checkbox")
const payment = document.querySelector(".payment")
const container = document.querySelector(".sliderRange")
const views = [10, 50, 100, 500, 1000]
const prices = {
    monthly: [8,12,16,24,36],
    annual: [72,108,144,216,324]
} 

let selectedOption = "monthly"
let rangeValue

function priceUpdate() {
    rangeValue = parseInt(container.value)
    price.innerHTML = prices[selectedOption][rangeValue]
    payment.innerHTML = checkbox.checked ? "/year": payment.innerHTML = "/month"
}

container.addEventListener("input", () => {
    priceUpdate()
    let colorProgress = 'linear-gradient(90deg, hsl(174, 86%, 45%)'  + rangeValue*25 + '%, hsl(224, 65%, 95%)' + rangeValue*25 + '%)' 
    numPageViews.innerHTML = views[rangeValue]
    container.style.background = colorProgress
})

checkbox.addEventListener("change",() => {
    if (!checkbox.checked) {
        selectedOption = "monthly"
        priceUpdate()
    } else if(checkbox.checked){
        selectedOption = "annual"
        priceUpdate()
    } 
})

