const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')
const navLink = document.querySelectorAll('.nav__link')

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show')
})

function linkAction(){
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Accordion skills
const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
  let itemClass = this.parentNode.className

  for(i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close'
  }
  if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach( (el) => {
  el.addEventListener('click', toggleSkills)
})

// Portfolio Swiper
let swiper = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

// Show scroll up
const scrollTop = document.getElementById('scroll-up')

window.onscroll = function(){ scrollUp() };

function scrollUp() {
  if(document.body.scrollTop > 560 || document.documentElement.scrollTop > 560){
    scrollTop.classList.add('show-scroll');
  } else {
    scrollTop.classList.remove('show-scroll');
  }
}