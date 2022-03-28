import { ReactNode } from "react"
import { Container } from "./styles";

type ContainerProps = {
    children: ReactNode
}

export function ContainerWrapper({children}: ContainerProps) {
    
    return <Container>{children}</Container>;
}