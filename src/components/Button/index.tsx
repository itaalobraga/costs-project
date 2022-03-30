import { Link } from "react-router-dom";
import { Container } from "./styles";

type ButtonProps = {
    to: string;
    text?: string;
    padding?: string;
};

export function Button({ to, text, padding }: ButtonProps) {
    return (
        <Container padding={padding}>
            <Link to={to}>{text}</Link>
        </Container>
    );
}