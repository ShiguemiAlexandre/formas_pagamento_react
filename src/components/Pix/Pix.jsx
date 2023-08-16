import React from "react";
import "./pix.css"

function Pix() {
    return (
        <div className="pix_componentes">
            <h1 className="pix_h1">Pix</h1>
            <h2>Telefone:</h2>
            <input type="text" id="input_pix" defaultValue="16997670116"></input><br></br>
            <button className="button_copy">Copiar</button>
        </div>
    )
}

export default Pix;