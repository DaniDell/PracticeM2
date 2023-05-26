import {Link} from "react-router-dom";

const Landing = () => {
    return (
        <div>
            <h1> WELLCOME </h1>
            <button>
                <Link to="/login">Enter</Link>
            </button>
        </div>
    )
}

export default Landing;