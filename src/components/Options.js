import { Link } from "react-router-dom"

function OptionsHud() {
    return (
        <div className="container_button">
            <Link to="/pix" className="button">
                <button>Pix</button>
            </Link>
            <Link to="transferencia" className="button">
                <button>Transferência Bancária</button>
            </Link>
            <Link to="card" className="button">
                <button>Cartão de crédito</button>
            </Link>

        </div>
    )
}

export default OptionsHud