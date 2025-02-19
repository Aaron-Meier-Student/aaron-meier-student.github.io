document.querySelectorAll("#dark button").forEach((button) => {
    button.addEventListener("mousedown", function (e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        ripple.addEventListener("animationend", () => {
            ripple.remove();
        });
    });
});
