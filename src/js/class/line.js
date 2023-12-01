export class Line {
    constructor(ctx, x, y, type, color, canvas) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.type = type;
        this.color = color;
        this.canvas = canvas;
    }

    hexToRGBA(hex) {
        hex = hex.replace('#', '');

        const r = parseInt(hex.slice(0, 2), 16);
        const g = parseInt(hex.slice(2, 4), 16);
        const b = parseInt(hex.slice(4, 6), 16);

        return `rgba(${r}, ${g}, ${b}, .09)`;
    }

    draw() {
        const gradient1 = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient1.addColorStop(0, this.color);

        this.ctx.fillStyle = gradient1;

        if (this.type === 'horizontal') {
            this.ctx.fillRect(this.x, this.y, this.canvas.width, 1);
        } else {
            this.ctx.fillRect(this.x, this.y, 1, this.canvas.height);
        }
    }

    updateColor(color) {
        this.color = this.hexToRGBA(color);
        this.draw();
    }
}
