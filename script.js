const next = document.getElementById('next')
const prev = document.getElementById('prev')
const swiper = document.querySelector('.push')
const lists = document.querySelectorAll('li')
const dots =  document.querySelectorAll('.dots li')
let P_Style = 74

// functions
const RemoveAllActive =()=>{
    dots.forEach((dot)=>{
        dot.classList.remove('active-dot')
    })
}

const PS_numN = ()=>{
    P_Style -= 74
    swiper.style.marginLeft = `${P_Style}rem`
}

const PS_nump = ()=>{
    P_Style += 74
    swiper.style.marginLeft = `${P_Style}rem`
}

const stopNext = ()=>{
    next.classList.remove('active') 
    next.classList.add('disabled') 
}

const stopPrev = ()=>{
    prev.classList.remove('active') 
    prev.classList.add('disabled') 
}

stopPrev()
PS_numN()

// Events 
dots[0].addEventListener('click',()=>{
    swiper.style.marginLeft = `0rem`
    RemoveAllActive()
    dots[0].classList.add('active-dot')
    next.classList.add('active') 
    stopPrev()
})

dots[1].addEventListener('click',()=>{
    swiper.style.marginLeft = `-74rem`
    RemoveAllActive()
    dots[1].classList.add('active-dot')
    next.classList.add('active') 
    prev.classList.add('active') 
})

dots[2].addEventListener('click',()=>{
    swiper.style.marginLeft = `-148rem`
    RemoveAllActive()
    dots[2].classList.add('active-dot')
    prev.classList.add('active') 
    stopNext()
})


next.addEventListener('click',()=>{
        PS_numN()
        RemoveAllActive()
        dots[1].classList.add('active-dot')
        prev.classList.add('active')
        if(P_Style < -145){
            RemoveAllActive()
            dots[2].classList.add('active-dot')
            stopNext()
        }

})

prev.addEventListener('click',()=>{
    PS_nump()
    RemoveAllActive()
    dots[1].classList.add('active-dot')
    next.classList.add('active')
    if(P_Style > -15){
        stopPrev()
        RemoveAllActive()
        dots[0].classList.add('active-dot')
    }
})