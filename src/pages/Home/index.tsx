import { SectionContainer } from "../../components/ContainerWrapper/styles";
import { Container } from "./styles";
import Banner from '../../../assets/savings.svg';
import { LinkButton } from '../../components/LinkButton'

export function Home() {
    return (
        <SectionContainer>
            <Container>
                <h1>Bem-vindo ao <span>Costs</span></h1>
                <p>Comece a gerenciar os seus projetos agora mesmo!</p>
                <LinkButton to="/newproject" text="Criar Projeto"/>
                <img src={Banner} alt="Banner" />
            </Container>
        </SectionContainer>
    );
}
