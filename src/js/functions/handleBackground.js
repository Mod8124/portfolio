import { Particle } from '../class/particle.js';
import { Dot } from '../class/dot.js';
import { Line } from '../class/line.js';

const main = document.querySelector('.background');
const canvas = document.createElement('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

main.appendChild(canvas);

canvas.classList.add('canvas');

const ctx = canvas.getContext('2d');

let particles = [];
const lines = [];
const dots = [];

// elements of background
const numbersParticles = 50;
const dotSize = 1.1;
const spacing = dotSize * 22;
let setBackground = 'particles';
let setColor = 'rgba(0, 255, 255, .03)';

const createParticles = () => {
    for (let i = 0; i < numbersParticles; i++) {
        const newParticle = new Particle(canvas, ctx, '#00ffff');
        particles.push(newParticle);
    }
};

const createDots = () => {
    const { height, width } = screen;

    for (let i = 0; i < width; i += spacing) {
        for (let j = 0; j < height; j += spacing) {
            const newDot = new Dot(i + spacing / 2, j + spacing / 2, dotSize, 'rgba(0, 255, 255, .09)', ctx);
            dots.push(newDot);
        }
    }
};

const createLines = () => {
    const spacing = 20;
    for (let i = 0; i < canvas.height; i += spacing) {
        lines.push(new Line(ctx, 0, i + spacing / 2, 'horizontal', setColor, canvas));
    }

    for (let i = 0; i < canvas.width; i += spacing) {
        lines.push(new Line(ctx, i + spacing / 2, 0, 'vertical', setColor, canvas));
    }
};

const setBackgroundElements = () => {
    createParticles();
    createDots();
    createLines();
};

export const changeColor = (color) => {
    dots.forEach((dot) => dot.updateColor(color));
    particles.forEach((particle) => particle.updateColor(color));
};

function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, innerWidth, innerHeight);

    if (setBackground === 'particles') {
        particles.forEach((particle) => particle.update());
    }

    if (setBackground === 'dots') {
        dots.forEach((dot) => dot.draw());
    }
}

export const changeBackground = (background) => (setBackground = background);

export const handleBackground = () => {
    setBackgroundElements();
    animate();
};

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (setBackground === 'particles') {
        particles.forEach((particle) => particle.reDraw(canvas));
    }

    if (setBackground === 'dots') animate();
}

window.addEventListener('resize', resizeCanvas);
