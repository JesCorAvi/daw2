'use strict'
const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')
const segmento  = document.querySelectorAll('.segmento')
const tab       = document.querySelectorAll('.tab')
punto.forEach( ( cadaPunto , i )=> {
    punto[i].addEventListener('click',()=>{

        let posicion  = i
        let operacion = posicion * - 100/3

        grande.style.transform = `translateX(${ operacion }%)`

        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
})


tab.forEach((cadaSegmento , i) =>{
    tab[i].addEventListener('click',()=>{
        tab[i].style.backgroundColor = "#c57412";
        segmento[i].style.display = "block";
        tab.forEach((cadaSegmento , x) =>{
            if(x != i){
                tab[x].style.backgroundColor = "#F99417";
                segmento[x].style.display = "none";
            }
        })})})

