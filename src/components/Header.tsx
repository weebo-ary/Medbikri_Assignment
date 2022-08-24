import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="headLink">
            <h2>Medbikri Assignment - 2022</h2>
            </Link>
        </div>
    )
}