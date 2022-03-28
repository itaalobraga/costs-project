import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from '../../components/Card';
import { SectionContainer } from '../../components/ContainerWrapper/styles';
import { LinkButton } from '../../components/LinkButton';
import { Message } from '../../components/Message';
import { ProjectsContext } from '../../contexts/ProjectsContext';
import { CardsSection, Container } from './styles';

export function Projects() {
    const location = useLocation();

    let message = '';

    const { projects, handleDeleteProject } = useContext(ProjectsContext);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        message = String(location.state);

        if (!message) {
            setIsActive(false);
            return;
        }

        setIsActive(true);
    }, []);

    console.log('message => ', message);

    return (
        <SectionContainer>
            <Container>
                {console.log('isActive => ', isActive)}
                {isActive && (
                    <>
                        <Message message={message} />
                    </>
                )}
                <div>
                    <h1>Projects</h1>
                    <LinkButton to="/newproject" text="Create Project" />
                </div>
                <CardsSection>
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            projectName={project.name}
                            category={project.category}
                            value={new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(project.value)}
                            handleDeleteProject={() =>
                                handleDeleteProject(project.id)
                            }
                        />
                    ))}
                </CardsSection>
            </Container>
        </SectionContainer>
    );
}
