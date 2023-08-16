import React from "react";
import "./transferencia.css"

function hud_transferencia () {
    return (
        <div className="transferencia_componentes">
            <h1 className="transferencia_h1">Transferência</h1>
            <h2>Agencia:</h2>
            <input defaultValue="Agencia" readOnly className="input"></input><br></br>
            <h2>Conta Corrente:</h2>
            <input defaultValue="ContaCorrente" readOnly className="input"></input><br></br>
            <h2>Nome:</h2>
            <input defaultValue="Nome" readOnly className="input"></input><br></br>
            <h2>Banco:</h2>
            <input defaultValue="Banco" readOnly className="input"></input><br></br>
        </div>
    )
}

export default hud_transferencia