import React from "react";
import "./FallingCircles.css";

const FallingCircles = () => {
    const circles = Array.from({ length: 30 }).map((_, index) => {
        const size = Math.random() * 50 + 10; // Размер от 10px до 60px
        const left = Math.random() * 100; // Позиция по горизонтали (0-100%)
        const duration = Math.random() * 5 + 5; // Скорость (5-10 сек)
        const delay = Math.random() * 5; // Разное время старта

        return (
            <img
                key={index}
                src="/ton_symbol.svg"
                alt="TON Symbol"
                className="falling-circle"
                style={{
                    width: size,
                    height: size,
                    left: `${left}%`,
                    animationDuration: `${duration}s`,
                    animationDelay: `-${delay}s`
                }}
            />
        );
    });

    return <div className="falling-circles-container">{circles}</div>;
};

export default FallingCircles;
