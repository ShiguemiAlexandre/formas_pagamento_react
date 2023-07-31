import React from "react";
import OptionsHud from "../components/Options";

const Home = () => {
    return (
        <div className="hud_home">
            <h2>Selecione a forma de pagamento que desejar:</h2>
            <OptionsHud />
        </div>
    )
}

export default Home;