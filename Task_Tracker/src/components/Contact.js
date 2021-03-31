import {Link} from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

export default function Contact() {
    return (
        <div>
            <h3>Contact Us</h3>
            <Link className="link" to="/"><FaArrowLeft />  Go Back</Link>
            <form className="add-form">
                <div className="form-control">
                    <label>Email</label>
                    <input 
                        type="text" 
                        placeholder="Type Your Email" 
                    />
                </div>

                <div className="form-control">
                    <label>Message</label>
                    <textarea
                        type="text" 
                        placeholder="What's on your mind"
                    />
                </div>

                <input type="submit" value="Send" className="btn btn-block" />
            </form>
        </div>
    ) 
}