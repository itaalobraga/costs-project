import { Link } from "react-router-dom";
import { Container, Nav } from "./styles";
import Logo from '../../../assets/costs_logo.png'
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export function Header() {
    const [isActive, setIsActive] = useState(false)
    return (
        <Container>
            <img src={Logo} alt="Logomarca" />
            <Nav isActive={isActive} onClick={() => setIsActive(false)}>
                <Link to="/">Home</Link>
                <Link to="/projects">Projetos</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/company">Company</Link>
            </Nav>
            <button type="button" onClick={() => setIsActive(!isActive)}>
                <FaBars />
            </button>
        </Container>
    );
}