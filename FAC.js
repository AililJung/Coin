const coin = document.getElementById("coin");
const button = document.getElementById("flipButton");

button.addEventListener("click", () => {
    const randomSide = Math.random() < 0.5 ? "front" : "back";

    const rotationXUp = Math.floor(Math.random() * 360) + 1080;
    const rotationYUp = Math.floor(Math.random() * 45);

    coin.style.transition = "transform 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
    coin.style.transform = `translateY(-200px) rotateX(${rotationXUp}deg) rotateY(${rotationYUp}deg)`;

    setTimeout(() => {
        const landingRotationX = randomSide === "front" ? 0 : 180;
        const landingRotationY =  Math.random() * 5;

        coin.style.transition = "transform 1s ease";
        coin.style.transform = `translateY(0px) rotateX(${landingRotationX}deg) rotateY(${landingRotationY}deg)`;
    }, 1400);
});
