function startAnimation() {
    gsap.to(".cube", {
        rotationX: "270deg",
        rotationY: "270deg",
        duration: 3,
        onComplete: resetAnimation
    });
}

function resetAnimation() {
    gsap.set(".cube", { rotationX: 0, rotationY: 0 });
}

// Run the animation initially
startAnimation();

// Trigger the animation every 3 seconds
setInterval(startAnimation, 3000)