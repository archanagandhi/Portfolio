let spinnerWrapper = document.querySelector('.spinner-wrapper');
window.addEventListener('load', function () {
    // spinnerWrapper.style.display = 'none';
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});

// Menu Show
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
            
        })
    }
}
showMenu('nav-toggle','nav-menu')

// Remove menu
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

// Scroll section active link
 const sections = document.querySelectorAll('section[id]')
 window.addEventListener('scroll',scrollActive)
 function scrollActive(){
     const scrollY = window.pageYOffset
     sections.forEach(current =>{
         const sectionHeight = current.offsetHeight
         const sectionTop = current.offsetTop - 50;
         sectionId = current.getAttribute('id')
         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active')

         }else{
             document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active')

         }
     })
 }

//  Scroll animation
window.sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.title_small',{})
sr.reveal('.home_title',{delay:300})
sr.reveal('.title_para',{delay:500})
sr.reveal('.home_img',{origin:'right',delay:400})
sr.reveal('.email_home',{delay:500})

/*SCROLL ABOUT*/
sr.reveal('.about_img', {delay: 500})
sr.reveal('.about_subtitle', {delay: 300})
sr.reveal('.about_profession', {delay: 400})
sr.reveal('.about_text', {delay: 500})
sr.reveal('.about_social-icon', {delay: 300, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle', {})
sr.reveal('.skills_name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills_img', {delay: 400})

/*SCROLL WORKS*/
sr.reveal('.works_img', {interval: 200})

// /*SCROLL CONTACT*/
sr.reveal('.contact_info', {})
sr.reveal('.email-link', {interval: 200})
sr.reveal('.contact_social-icon', {delay: 300})


