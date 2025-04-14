import React, { useEffect, useRef } from 'react';
import './RandomShapes.css';

class Shape {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.size = Math.random() * 50 + 30; // Random size between 20-50

    this.width = this.size;
    this.height = this.size;
    this.x = Math.random() * canvas.width; // Random x position
    this.y = canvas.height + this.height; // Start below canvas
    this.speed = Math.random() * 0.5 + 0.25; // Random speed between .25-.75
    this.rotation = 0;
    this.rotationSpeed = (Math.random() - 0.5) * 0.0075; // Random rotation speed between -0.0025 and 0.0025
    this.type = Math.floor(Math.random() * 3); // 0: circle, 1: square, 2: triangle
    this.color = `hsl(${Math.random() * 360}, 70%, 60%)`; // Random color
    //this.color = 'rgba(244, 244, 245, 0.8)'; // Slightly transparent light gray
  }

  update() {
    this.y -= this.speed;
    this.rotation += this.rotationSpeed;
  }

  draw() {
    this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(this.rotation);
    this.ctx.fillStyle = this.color;

    switch (this.type) {
      case 0: // Circle
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.width / 2, 0, Math.PI * 2);
        this.ctx.fill();
        break;
      case 1: // Rounded Square
        this.ctx.beginPath();
        this.ctx.roundRect(-this.width / 2, -this.height / 2, this.width, this.height, 10);
        this.ctx.fill();
        break;
      case 2: // Equilateral Triangle
        const width = this.width;
        const height = width * (Math.sqrt(3) / 2); // Height of equilateral triangle
        const halfWidth = width / 2;
        const halfHeight = height / 2;
        
        this.ctx.beginPath();
        this.ctx.moveTo(0, -halfHeight); // Top point
        this.ctx.lineTo(halfWidth, halfHeight); // Bottom right
        this.ctx.lineTo(-halfWidth, halfHeight); // Bottom left
        this.ctx.closePath();
        this.ctx.fill();
        break;
    }

    this.ctx.restore();
  }

  isOffScreen() {
    return this.y < -this.height;
  }
}

const RandomShapes = ({ className }) => {
  const canvasRef = useRef(null);
  const shapesRef = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size to match container
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw shapes
      shapesRef.current = shapesRef.current.filter(shape => {
        shape.update();
        shape.draw();
        return !shape.isOffScreen();
      });

      // Add new shapes randomly
      if (Math.random() < 0.02) { // 2% chance each frame
        shapesRef.current.push(new Shape(canvas));
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div className={`random-shapes-container ${className}`}>
      <canvas ref={canvasRef} className="random-shapes-canvas" />
    </div>
  );
};

export default RandomShapes;
