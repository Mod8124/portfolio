const randomNumber = (max, min) => {
    return Math.random() * (max - min) + min;
};

export class Particle {
    constructor(canvas, ctx, color) {
        (this.canvas = canvas),
            (this.ctx = ctx),
            (this.x = Math.random() * this.canvas.width),
            (this.y = Math.random() * this.canvas.height),
            (this.size = randomNumber(0.8, 3)),
            (this.opacity = randomNumber(0, 1)),
            (this.speed = 0.2),
            (this.angle = Math.random() * 2 * Math.PI),
            (this.opacitySpeed = 0.005),
            (this.increasingOpacity = true),
            (this.color = color);
    }

    hexToRGBA(hex) {
        // Remove the '#' symbol if it exists
        hex = hex.replace('#', '');

        // Split the hex color code into red, green, and blue components
        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);

        // Return the color in RGBA format with the specified opacity
        return `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.hexToRGBA(this.color);
        this.ctx.fill();
    }

    reDraw(canvas) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
    }

    handleOpacity() {
        if (this.increasingOpacity) {
            this.opacity += this.opacitySpeed; // Increase opacity
            if (this.opacity >= 1) {
                this.opacity = 1; // Cap opacity at 1
                this.increasingOpacity = false;
            }
        } else {
            this.opacity -= this.opacitySpeed; // Decrease opacity
            if (this.opacity <= 0) {
                this.opacity = 0; // Cap opacity at 0
                this.increasingOpacity = true;
            }
        }
    }

    handleMove() {
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);

        // Check if the particle is about to go outside the canvas boundaries
        if (this.x > this.canvas.width - this.size || this.x < this.size) {
            this.angle = Math.PI - this.angle; // Reverse the horizontal direction
        }

        if (this.y > this.canvas.height - this.size || this.y < this.size) {
            this.angle = -this.angle; // Reverse the vertical direction
        }
    }

    update() {
        this.handleMove();
        this.handleOpacity();

        this.draw();
    }

    updateColor(color) {
        this.color = color;
    }
}
