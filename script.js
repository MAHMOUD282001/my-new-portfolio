
var typed = new Typed(".typing", {
    strings : ["Front End Developer", "Freelancer"],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
})

var typed = new Typed(".typing-2", {
    strings : ["Front End Developer", "Freelancer"],
    typeSpeed : 100,
    backSpeed : 60,
    loop : true
})


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});

let navbar = document.querySelector("nav");

let allSections = document.querySelectorAll("section")

let links = document.querySelectorAll("nav ul a");

let darkLightBtn = document.querySelector(".dark-light");

let darkLightIcon = document.querySelector(".dark-light i");


let body = document.querySelector("body");

let allRights = document.querySelector(".all-rights");

let scrollBtn = document.querySelector(".scroll-up-btn");

let skills = document.querySelectorAll(".skills .skill");





window.addEventListener("scroll", ()=>{
    if(window.scrollY > 20){
        navbar.classList.add("sticky");
    }
    
    else{
        navbar.classList.remove("sticky");
    }
    
    if(window.scrollY > 500){
        scrollBtn.classList.add("show");
    }
    
    else{
        scrollBtn.classList.remove("show");
    }
    
    
    var current = "";
    
    allSections.forEach((section) => {
        const sectionTop = section.offsetTop;
        
        if(pageYOffset === 0){
            current = "home"
        }
        
        if (pageYOffset >= sectionTop - 100) {
          current = section.getAttribute("id"); 
        }
    })
    
    links.forEach((link) => {
        link.classList.remove("active")
        
        let target = link.dataset.arrive
        
        if (target == current) {
            link.classList.add("active");
        }
    });

})



darkLightBtn.addEventListener("click", ()=>{
    
    if(darkLightBtn.innerHTML == '<i class="fa-solid fa-moon"></i>'){        
        darkLightBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'
        body.classList.add("active")
        
        allRights.style.color = "#0b051d";
        
        
        let lightMode = getAppliedMode("light")
        
        localStorage.setItem("mode", lightMode);
        
    }
    
    else if(darkLightBtn.innerHTML == '<i class="fa-solid fa-sun"></i>'){
        darkLightBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'
        body.classList.remove("active")
        
        allRights.style.color = "#fff";
        
        
        let darkMode = getAppliedMode("dark")
        
        localStorage.setItem("mode", darkMode);
        
        
    }
})




window.onload = ()=>{
    // localStorage.clear()
    
    if(localStorage.getItem("mode") === null){
        let systemMode = getAppliedMode("system")
        
        if(systemMode === "system-light"){
            darkLightBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'
        
            body.classList.add("active")
            
            allRights.style.color = "#0b051d";
            
        }
        
        else if(systemMode === "system-dark"){
            darkLightBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'
        
            body.classList.remove("active")
        
            allRights.style.color = "#fff";
            
        }
        
    }
    
    console.log(localStorage.getItem("mode"))
    
    if(localStorage.getItem("mode") === "light"){
        darkLightBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'
        
        body.classList.add("active")
        
        allRights.style.color = "#0b051d";
    }
    
    else if(localStorage.getItem("mode") === "dark"){
        darkLightBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'
        
        body.classList.remove("active")
        
        allRights.style.color = "#fff";
    }

}


function getAppliedMode(userPreference) {
    if (userPreference === 'light') {
      return 'light';
    }
    
    if (userPreference === 'dark') {
      return 'dark';
    }
    
    // system
    if (matchMedia('(prefers-color-scheme: light)').matches) {
      return 'system-light';
    }
    return 'system-dark';
}



scrollBtn.addEventListener("click", ()=>{
    scrollTo(0,0);
})