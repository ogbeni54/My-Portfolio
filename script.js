const header = document.querySelector('.nav-ul');
const hamburger = document.querySelector('.fa-solid');
const head = document.querySelector('header');
console.log(head);
// const hamburger1 = document.querySelector('.fa-xmark');


// console.log(header);

hamburger.addEventListener('click', () => {
    header.classList.toggle('show');
    // hamburger.classList.toggle('active');
   
    if(hamburger.classList.contains('fa-bars')) {
        hamburger.classList.replace('fa-bars', 'fa-xmark')
        // console.log(header);
    } else {
        hamburger.classList.replace('fa-xmark', 'fa-bars')
    }
});

window.addEventListener('scroll',  () => {
    if(window.scrollY > 10) {
        head.classList.add('active')
    } else {
        head.classList.remove('active')
    }
})

// // Scroll animation 
// const animates = document.querySelectorAll('.animate')
// window.addEventListener('scroll', checkBoxes)

// checkBoxes()

// function checkBoxes() {
//    const triggerBottom =  window.innerHeight / 5 * 4;

//    animates.forEach(param => {
//        const paramTop = param.getBoundingClientRect().top

//        if(paramTop < triggerBottom) {
//            param.classList.add('display')
//        } else {
//            param.classList.remove('display')
//        }
//    })
// }
