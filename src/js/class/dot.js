export class Dot {
    constructor(x, y, size, color, ctx) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.ctx = ctx;
    }

    hexToRGBA(hex) {
        hex = hex.replace('#', '');

        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);

        return `rgba(${r}, ${g}, ${b}, 0.13)`;
    }

    update(mouseX, mouseY, mouseIsMoving, areaAffected) {
        let distance = Math.sqrt(Math.pow(mouseX - this.x, 2) + Math.pow(mouseY - this.y, 2));

        if (mouseIsMoving && distance < areaAffected) {
            this.color = '#00ffff';
        } else {
            this.color = 'rgba(255, 255, 255, 0.1)';
        }
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath(); // Close the path
    }

    updateColor(color) {
        this.color = this.hexToRGBA(color);
        this.draw();
    }
}
