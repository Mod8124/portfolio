'use client';
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import styles from '../css/dots.module.css';

const Dots = () => {
    const sketchRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        const dotSize: number = 4;
        const spacing: number = dotSize * 10;
        const minTvalue: number = 50;
        const areaAffected: number = 50;
        let mouseIsMoving: boolean = false;
        let dots: Dot[] = [];

        const sketch = (p: p5) => {
            p.disableFriendlyErrors = true;

            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight);
                createDots();
            };

            p.draw = () => {
                p.background(0);
                dots.forEach((dot: Dot) => {
                    dot.update(
                        p.mouseX,
                        p.mouseY,
                        mouseIsMoving,
                        areaAffected,
                        minTvalue
                    );
                    dot.render(p);
                });
            };

            p.mouseMoved = () => {
                mouseIsMoving = true;
                setTimeout(() => {
                    mouseIsMoving = false;
                }, 100);
            };

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
                createDots();
            };

            const createDots = () => {
                dots = [];
                for (let i = 0; i < p.width; i += spacing) {
                    for (let j = 0; j < p.height; j += spacing) {
                        let dot = new Dot(
                            i + spacing / 2,
                            j + spacing / 2,
                            dotSize
                        );
                        dots.push(dot);
                    }
                }
            };
        };

        class Dot {
            x: number;
            y: number;
            size: number;
            transparency: number;

            constructor(x: number, y: number, size: number) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.transparency = minTvalue;
            }

            update(
                mouseX: number,
                mouseY: number,
                mouseIsMoving: boolean,
                areaAffected: number,
                minTvalue: number
            ) {
                let distance = Math.sqrt(
                    Math.pow(mouseX - this.x, 2) + Math.pow(mouseY - this.y, 2)
                );

                if (mouseIsMoving && distance < areaAffected) {
                    this.transparency = 255;
                } else {
                    this.transparency = Math.max(
                        minTvalue,
                        this.transparency - 10
                    );
                }
            }

            render(p: p5) {
                p.fill(255, this.transparency);
                p.ellipse(this.x, this.y, this.size);
            }
        }

        if (typeof window !== 'undefined') {
            const p5 = require('p5');
            new p5(sketch, sketchRef.current);
        }
    }, []);

    return <div className={styles.background} ref={sketchRef} />;
};

export default Dots;
