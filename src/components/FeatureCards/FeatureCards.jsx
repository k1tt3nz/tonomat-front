import React from "react";
import "./FeatureCards.css";

const FeatureCards = () => {
    return (
        <div className="feature-cards">
            <div className="card blue">
                <div className="title"> Бесплатный TON каждый час </div>
                <div className="text"><span className="dark-text">Каждый час мы раздаем до 1 TON через наш блокчейн-кран.</span></div>
                <div className="text"><span className="dark-text"> Никаких излишеств, никаких скрытых планов — это просто способ начать работу с невероятными мировыми явлениями, такими как криптовалюты.</span></div>
            </div>
            <div className="card white">
                <div className="title"> <span className="dark-text">Игры</span></div>
                <div className="text"> <span className="blue-text">Играйте в нашу игры и умножьте свои баланс TON в 4750 раз.</span></div>
            </div>
            <div className="card dark">
                <div className="title"><span className="blue-text">Щедрая партнерская программа</span></div>
                <div className="text">Пригласите своих друзей на Tonomat и получите 50% от того, что они заработают с крана, навсегда.</div>
            </div>
        </div>
    );
};

export default FeatureCards;
