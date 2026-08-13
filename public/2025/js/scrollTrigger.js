// Scroll Trigger Animation

// tracks
let tracks = gsap.timeline({
    scrollTrigger: {
        trigger: '.tracksbg',
        start: "top center",
    }
});
tracks.from(".tracks-title", { y: 200, opacity: 0, duration: 0.6 });
// tracks.from(".tracks-soon", { y: 200, opacity: 0, duration: 0.6 });
tracks.addLabel("start")
    .from(".tc1", { y: 100, autoAlpha: 0 }, "-=0.6")
    .addLabel("end");
tracks.addLabel("start")
    .from(".tc2", { y: 100, autoAlpha: 0 }, "-=0.7")
    .addLabel("end");
tracks.addLabel("start")
    .from(".tc3", { y: 100, autoAlpha: 0 }, "-=0.8")
    .addLabel("end");
tracks.addLabel("start")
    .from(".tc4", { y: 100, autoAlpha: 0 }, "-=0.9")
    .addLabel("end");
tracks.addLabel("start")
    .from(".tc5", { y: 100, autoAlpha: 0 }, "-=1")
    .addLabel("end");
tracks.addLabel("start")
    .from(".tc6", { y: 100, autoAlpha: 0 }, "-=1")
    .addLabel("end");
tracks.addLabel("start")
    .from(".tc7", { y: 100, autoAlpha: 0 }, "-=1")
    .addLabel("end");

// Theme
let theme = gsap.timeline({
    scrollTrigger: {
        trigger: '.themebg',
        start: "top center",
    }
});
theme.from(".theme-title", { y: 200, opacity: 0, duration: 0.6 });
theme.addLabel("start")
    .from(".th1", { y: 100, autoAlpha: 0 }, "-=0.6")
    .addLabel("end");
theme.addLabel("start")
    .from(".th2", { y: 100, autoAlpha: 0 }, "-=0.7")
    .addLabel("end");
theme.addLabel("start")
    .from(".th3", { y: 100, autoAlpha: 0 }, "-=0.8")
    .addLabel("end");
theme.addLabel("start")
    .from(".th4", { y: 100, autoAlpha: 0 }, "-=0.9")
    .addLabel("end");
theme.addLabel("start")
    .from(".th5", { y: 100, autoAlpha: 0 }, "-=1")
    .addLabel("end");
theme.addLabel("start")
    .from(".th6", { y: 100, autoAlpha: 0 }, "-=1")
    .addLabel("end");
theme.addLabel("start")
    .from(".th7", { y: 100, autoAlpha: 0 }, "-=1")
    .addLabel("end");

// about section
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: "top center",
    }
});


tl.from("h2", { y: 200, opacity: 0, duration: 0.6 });
tl.from(".para", { y: 200, opacity: 0, duration: 1 }, "-=0.6");
tl.from(".mbmlogo", { y: 200, opacity: 0, duration: 0.4 }, "-=1");
tl.from(".mbmtxt", { y: 200, opacity: 0, duration: 0.4 }, "-=0.9");
tl.from(".ideaxlogo", { y: 200, opacity: 0, duration: 0.4 }, "-=1");
tl.from(".ideaxtxt", { y: 200, opacity: 0, duration: 0.4 }, "-=0.9");

// Hero Section 
let hero = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: "top center",
    }
});
hero.from(".hero-title", { x: -100, opacity: 0, duration: 0.6 }, "-=1");
hero.from(".hero-para", { x: -100, opacity: 0, duration: 0.6 }, "-=1");
hero.from(".reg-btn", { x: -100, opacity: 0, duration: 0.6 }, "-=1");
hero.addLabel("start")
    .from(".hero-img", { x: 50, autoAlpha: 0 }, "-=1")
    .addLabel("end");


// Nav Bar
let nav = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: "top center",
    }
});
nav.from(".nl1", { y: 30, opacity: 0, duration: 1 }, "-=1");
nav.from(".nl2", { y: 30, opacity: 0, duration: 0.8 }, "-=1");
nav.from(".nl3", { y: 30, opacity: 0, duration: 0.2 }, "-=1");
nav.from(".nl4", { y: 30, opacity: 0, duration: 0.1 }, "-=1");
nav.from(".nl5", { y: 30, opacity: 0, duration: 0.1 }, "-=1");
nav.from(".nl6", { y: 30, opacity: 0, duration: 0.1 }, "-=1");
nav.from(".nl7", { y: 30, opacity: 0, duration: 0.1 }, "-=1");
nav.from(".nl8", { y: 30, opacity: 0, duration: 0.1 }, "-=1");