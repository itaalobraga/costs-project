import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from '../../components/Card';
import { SectionContainer } from '../../components/ContainerWrapper/styles';
import { Button } from '../../components/Button';
import { Message } from '../../components/Message';
import { ProjectsContext } from '../../contexts/ProjectsContext';
import { CardsSection, Container } from './styles';
import { Modal } from '../../components/Modal';

export function Projects() {
    const location = useLocation();

    const message = location.state;

    const { projects, handleDeleteProject } = useContext(ProjectsContext);

    const [openModal, setOpenModal] = useState(false);

    return (
        <SectionContainer>
            <Message messageStatus={!!message} message={String(message)} />
            {openModal && (
                    <Modal closeModal={setOpenModal} />
            )}
            <Container>
                <div>
                    <h1>Projects</h1>
                    <Button to="/newproject" text="Create Project" />
                </div>
                <CardsSection>
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            projectId={project.id}
                            projectName={project.name}
                            category={project.category}
                            value={new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(project.value)}
                            handleDeleteProject={() =>
                                handleDeleteProject(project.id)
                            }
                            openModal={setOpenModal}
                        />
                    ))}
                </CardsSection>
            </Container>
        </SectionContainer>
    );
}
