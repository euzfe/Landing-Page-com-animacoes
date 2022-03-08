gsap.registerPlugin(ScrollTrigger); //animação

gsap.from(".animate-inicial-texto",{
    duration: 0.6,
    opacity: 0, 
    y: -150,//y é porque está mexendo no eixo da vertical, ou seja, o eixo y
    stagger: 0.4 //a quantidade de segundos de diferença entre as animações da parte inicial do texto
});

gsap.from(".animate-inicial-img",{
    duration: 0.8,
    opacity: 0,
    x: 250,
});

gsap.from(".animate-artigos",{
    duration:0.8,
    opacity:0,
    x: -100,
    stagger: 1.2,
    delay: 1
});

gsap.from(".animate-final",{
    scrollTrigger:".animate-final",
    duration:0.8,
    opacity: 0,
    y: -200,
    delay: 0.5,
    stagger:0.4
});