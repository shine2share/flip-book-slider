const next = document.querySelector('#Next')
const prev = document.querySelector('#Prev')
const slider = document.querySelector('#Slider')

let images = slider.querySelectorAll('img')
let currentImageIndex = 0
let maxImageIndex = images.length - 1

next.addEventListener('click', e => {
  updateCurrentImageIndex(1)
  slideImage()
})

prev.addEventListener('click', e => {
  updateCurrentImageIndex(-1)
  slideImage()
})

function updateCurrentImageIndex(value) {
  currentImageIndex += value
  if (currentImageIndex < 0) currentImageIndex = maxImageIndex
  else if (currentImageIndex > maxImageIndex) currentImageIndex = 0
}

function slideImage() {
  images.forEach(image => {
    image.style.transform = `translateX(${-100 * currentImageIndex}%)`
  })
}