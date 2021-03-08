const counter = document.querySelectorAll('.container')

// const span = document.getElementsByTagName("span");
// span.forEach((spanEffect) => {
//     spanEffect.classList.add("active")
// })

counter.forEach((count) => {
    count.innerText='0';

    const updateCounter = () => {
        const target = count.getAttribute('data-target')
        // + operator to convert string to number ,we use Number() also 
        const c = +count.innerText

        const increment = target / 100

        if(c<target) {
            count.innerText = `${Math.ceil(c+increment)}`
            setTimeout(updateCounter,1)
        }

    }
    updateCounter()
})