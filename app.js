window.addEventListener  ("load", async () =>   {
    const numPageViews = document.querySelector(".numPageViews")
    const price = document.querySelector(".priceValue")
    const checkbox = document.querySelector(".checkbox")
    const payment = document.querySelector(".payment")
    const container = document.querySelector(".sliderRange")
    const bolita = document.querySelector(".discount")

    container.addEventListener("input",myFunction )

    function myFunction() {
        let rangeValue = parseInt(container.value)
        let views = [10, 50, 100, 500, 1000]
        let monthValue = [8,12,16,24,36]
        let anualValue = monthValue.map( x => x*12*0.75 )
        price.innerHTML = monthValue[rangeValue]
        numPageViews.innerHTML = views[rangeValue]
                
        var colorProgress = 'linear-gradient(90deg, hsl(174, 86%, 45%)'  + rangeValue*25 + '%, hsl(224, 65%, 95%)' + rangeValue*25 + '%)' 
        container.style.background = colorProgress
        
        checkbox.addEventListener('change',() => {
            if( !checkbox.checked){
                price.innerHTML = monthValue[rangeValue]
                payment.innerHTML = "/month"
            } else if (checkbox.checked) {
                price.innerHTML = anualValue[rangeValue]
                payment.innerHTML = "/year"
            } 
        })
    }

    bolita.addEventListener("mouseup", () =>{
        bolita.style.background = 'hsl(174, 86%, 45%)'
        console.log("me esta escuchando")
        container.addEventListener("mousedown", () => {
        bolita.style.background = "red"
        })
    })
})

