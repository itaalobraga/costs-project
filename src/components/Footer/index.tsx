import { Container, Icons } from "./styles";
import { FaGithub, FaInstagram,FaLinkedinIn } from 'react-icons/fa';

export function Footer() {
    return (
        <Container>
            <Icons>
                <a href="#" target="_blank">
                    <FaGithub />
                </a>
                <a href="#" target="_blank">
                    <FaInstagram />
                </a>
                <a href="#" target="_blank">
                    <FaLinkedinIn />
                </a>
            </Icons>
        </Container>
    );
}