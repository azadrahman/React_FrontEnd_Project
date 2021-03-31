import { FaArrowLeft } from "react-icons/fa"
import {Link} from "react-router-dom"

export default function About() {
    return (
        <div>
            <h3>Version -- 1.0.0</h3>
            <p>Track Your Task</p>
            <br />
            <Link className="link" to="/"><FaArrowLeft />  Go Back</Link>
        </div>
    )
}