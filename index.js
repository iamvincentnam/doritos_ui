gsap.to('.overlay',{ duration:1, 
    delay:.5, 
    stagger:.65,
  top:'-100%',
     ease: "ease"});
// gsap.from('.nav-anim',{ duration:1, 
//     delay:.1, 
//     stagger:.65,
// y:-100,
//      ease: "ease"});
gsap.from('.product_anim',{ duration:1, 
    delay:.5, 
 opacity:0,
height:0,
stagger: .51,
ease:  "power1.in"});

gsap.from('.btn-anim',{ duration:1, 
    delay:3, 
 opacity:0,
x:-100,
ease:  "power1.in"});