const numPageViews = document.querySelector(".numPageViews")
const price = document.querySelector(".priceValue")
const checkbox = document.querySelector(".checkbox")
const payment = document.querySelector(".payment")
const container = document.querySelector(".sliderRange")


// for (let i = 0 ; i < container.length; i++){
//     const slider = container[i].querySelector(".sliderRange")
//     const thumb = container[i].querySelector(".sliderThumb")
//     const progress = container[i].querySelector(".progress")
    
//     function customSlider (){
//         const maxVal = slider.getAttribute("max")
//         const val = (slider.value/maxVal) * 100 
    
//         progress.style.width = val
//         thumb.style.left= val
//     }
    
//     customSlider()

//     slider.addEventListener("input", () => {
//         customSlider()
//     })
// }

container.addEventListener("input",myFunction )

function myFunction() {
    let rangeValue = parseInt(container.value)
    numPageViews.innerHTML = rangeValue;

    let monthValue 
    switch (rangeValue){
        case 10:
            monthValue = 8;
            price.innerHTML = monthValue
            numPageViews.innerHTML = rangeValue
            break;
        case 50:
            monthValue = 12;
            price.innerHTML = monthValue
            numPageViews.innerHTML = rangeValue
            break;
        case 100:
            monthValue = 16;
            price.innerHTML = monthValue
            numPageViews.innerHTML = rangeValue
            break;
        case 500:
            monthValue = 26;
            price.innerHTML = monthValue
            numPageViews.innerHTML = rangeValue
            break;
        case 1000:
            monthValue = 36;
            price.innerHTML = monthValue
            numPageViews.innerHTML = rangeValue
            break;
    }   

    let anualValue = monthValue*12*0.75

    checkbox.addEventListener('change',() => {
        if( !checkbox.checked){
            price.innerHTML = monthValue
            payment.innerHTML = "/month"
        } else if (checkbox.checked){
            price.innerHTML = anualValue
            payment.innerHTML = "/year"
        } 
    })
}

