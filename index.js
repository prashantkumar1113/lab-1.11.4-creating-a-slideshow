const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]

let currentImg = 1;
let slideShoeImage = document.querySelector('.image')
slideShoeImage.setAttribute('src', images[currentImg])

let prevBtn = document.querySelector('.previous side-bar')
prevBtn.addEventListener('click', function(e){
    //to do
})

let nextBtn = document.querySelector('.next side-bar')
nextBtn.addEventListener('click', function(e){
    //to do
})

let bubbles = document.querySelectorAll('.bubble')
