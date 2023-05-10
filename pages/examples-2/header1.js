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

// Move navbar on scroll
document.getElementById("hbNavbar").style.transform = "translateY(-100%)";

window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    console.log(document.documentElement.scrollTop)
    console.log(window.innerHeight)
    const breakpoint = window.innerHeight - 70
    if (document.body.scrollTop > breakpoint || document.documentElement.scrollTop > breakpoint) {
        document.getElementById("fullNavbar").style.transform = "translateY(-100%)";
        document.getElementById("hbNavbar").style.transform = "translateY(0)";
    } else {
        document.getElementById("hbNavbar").style.transform = "translateY(-100%)";
        document.getElementById("fullNavbar").style.transform = "translateY(0)";
    }
}

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