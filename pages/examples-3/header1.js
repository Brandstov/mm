// Appear on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



// Blob follow
const blob=document.querySelector('.blob');
window.addEventListener('pointermove',(e)=>{
  const {clientX,clientY}=e;
  console.log(clientX,clientY)
  // blob.style.left=`${clientX}px`;
  // blob.style.top=`${clientY}px`;
  blob.animate({
    left:`${clientX}px`,
    top:`${clientY}px`
  },{duration:3000, fill:"forwards"})
})

//hb menu
function moveMenu() {
    document.getElementById("hbMenu").classList.toggle('moveHb')
}

//Scrol container
function scrollDown() {
    document.getElementById("appear").style.opacity = "0";
    smoothScroll({yPos: 1000, duration: 750});
}

//move second text
window.onscroll = function () { scrollFunction(); };

document.getElementById("appear").style.transform = "translateY(400%)";
document.getElementById("hbNavbar").style.transform = "translateY(-100%)";

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("appear").style.transform = "translateY(10%)";
        document.getElementById("fullNavbar").style.transform = "translateY(-100%)";
        document.getElementById("hbNavbar").style.transform = "translateY(0)";
        document.getElementById("scroll-container").style.opacity = "0";
    } else {
        document.getElementById("appear").style.transform = "translateY(400%)";
        document.getElementById("hbNavbar").style.transform = "translateY(-100%)";
        document.getElementById("fullNavbar").style.transform = "translateY(0)";
        document.getElementById("scroll-container").style.opacity = "1";
    }
}