import { SectionContainer } from "../../components/ContainerWrapper/styles";
import { Form } from "../../components/Form";
import { Container } from "./styles";

export function NewProject() {
    
    return (
        <SectionContainer>
            <Container>
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois adicionar os serviços</p>
                <Form />
            </Container>
        </SectionContainer>
    );
}
