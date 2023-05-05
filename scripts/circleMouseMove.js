//Mouse follow 1
class Circle {
    constructor() {
        this.circle = document.createElement("div");
        this.colors = [
            "0F384D",
            "0074AF",
            "EE8134",
        ];
    }
    draw(x, y) {
        this.circle.classList.add("circle");
        this.circle.style.top = `${y}px`;
        this.circle.style.left = `${x}px`;
        this.circle.style.background = `#${this.colors[Math.floor(Math.random() * this.colors.length - 1)]
            }`;
        document.querySelector("body").append(this.circle);
    }
}

window.addEventListener("mousemove", function (e) {
    let c = new Circle();
    c.draw(e.clientX, e.clientY);
    let cicles = document.querySelectorAll(".circle");
    setTimeout(() => {
        c.circle.remove();
    }, 1000);
});
