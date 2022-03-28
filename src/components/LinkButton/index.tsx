import { Link } from "react-router-dom";
import { Container } from "./styles";

type LinkButtonProps = {
    to: string;
    text: string;
}

export function LinkButton({to, text}: LinkButtonProps) {
    return (
        <Container>
            <Link to={to}>{text}</Link>
        </Container>
    );
}