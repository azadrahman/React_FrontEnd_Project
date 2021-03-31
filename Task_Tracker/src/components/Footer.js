import { FaBloggerB } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import {Link} from "react-router-dom"

export default function Footer() {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link className="link" to="/about"><FaBloggerB/> About</Link>
            <Link className="link" to="/contact"><FaPhone /> Contact</Link>
        </footer>
    )
}