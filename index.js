const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]

let currentImg = 0;
const slideShoeImage = document.querySelector('.image')
slideShoeImage.setAttribute('src', images[currentImg])

const prevBtn = document.querySelector('.previous')
prevBtn.addEventListener('click', function(e){
    //check if your zero
    //console.log('prev')
    if(currentImg === 0){
        currentImg = images.length-1
    }
    else{
        currentImg--
    }
    slideShoeImage.setAttribute('src', images[currentImg])
})

const nextBtn = document.querySelector('.next')
console.log(nextBtn)
nextBtn.addEventListener('click', function(e){
    //check if your at the max
    //console.log('next')
    if(currentImg === images.length-1){
        currentImg = 0
    }
    else{
        currentImg++
    }
    slideShoeImage.setAttribute('src', images[currentImg])
})

const bubbles = document.querySelectorAll('.bubble')
for (let i = 0; i < bubbles.length; i++){
    bubbles[i].addEventListener('click', function(e){
        //console.log('bubble')
        //console.log(parseFloat(bubbles[i].id.slice(-1)))
        currentImg = parseFloat(bubbles[i].id.slice(-1))
        slideShoeImage.setAttribute('src', images[currentImg])
    })
}

//○● TODO: need to draw the bubbles