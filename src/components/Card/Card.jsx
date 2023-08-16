import React from "react";
import picpay from "../../img/picpay.png"
import "./card.css"

const Card = () => {
    return (
        <div className="hud_card">
            <h1 className="h1_card">Cartão de crédito</h1>
            <a href="https://app.picpay.com/user/alexandre_shiguemi">
                <img src={picpay} className='picpay' />
            </a><br></br>
            <a href="https://app.picpay.com/user/alexandre_shiguemi">
                <h2>Selecionar</h2>
            </a>
        </div>
    )
}

export default Card;