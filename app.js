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
        numPageViews.innerHTML = rangeValue;
        
        let monthValue 
        // switch (rangeValue){
            //     case 10:
            //         monthValue = 8;
            //         price.innerHTML = monthValue
            //         numPageViews.innerHTML = rangeValue
            //         break;
            //     case 50:
            //         monthValue = 12;
            //         price.innerHTML = monthValue
            //         numPageViews.innerHTML = rangeValue
            //         break;
            //     case 100:
            //         monthValue = 16;
            //         price.innerHTML = monthValue
            //         numPageViews.innerHTML = rangeValue
            //         break;
            //     case 500:
            //         monthValue = 26;
            //         price.innerHTML = monthValue
            //         numPageViews.innerHTML = rangeValue
            //         break;
            //     case 1000:
            //         monthValue = 36;
            //         price.innerHTML = monthValue
            //         numPageViews.innerHTML = rangeValue
            //         break;
            // }   
            
            if (rangeValue <= 10){
                monthValue = 8;
                price.innerHTML = monthValue
                numPageViews.innerHTML = rangeValue
            } else if (rangeValue <= 50 ) {
                monthValue = 12;
                price.innerHTML = monthValue
                numPageViews.innerHTML = rangeValue
            } else if ( rangeValue <= 100 ){ 
                monthValue = 16;
                price.innerHTML = monthValue
                numPageViews.innerHTML = rangeValue
            } else if (rangeValue <= 500 ) {
                monthValue = 26;
                price.innerHTML = monthValue
                numPageViews.innerHTML = rangeValue
            } else if ( rangeValue <= 1000){
                monthValue = 36;
                price.innerHTML = monthValue
                numPageViews.innerHTML = rangeValue}
                
                var colorProgress = 'linear-gradient(90deg, hsl(174, 86%, 45%)'  + rangeValue/10 + '%, hsl(224, 65%, 95%)' + rangeValue/10 + '%)' 
                container.style.background = colorProgress
                
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

    bolita.addEventListener("mouseup", () =>{
        bolita.style.background = 'hsl(174, 86%, 45%)'
        console.log("me esta escuchando")
        container.addEventListener("mousedown", () => {
        bolita.style.background = "red"
        })
    })
})

