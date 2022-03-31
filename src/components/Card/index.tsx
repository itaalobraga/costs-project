import { CardButtonArea, Container } from './styles';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext';

type CardProps = {
    projectName: string;
    value: string;
    category: string;
    projectId: number;
    handleDeleteProject: () => void;
    openModal: (param: boolean) => void;
};

export const Card = ({ projectName, value, category, projectId, handleDeleteProject, openModal }: CardProps) => {
    const { getProjectById } = useContext(ProjectsContext);

    return (
        <Container>
            <h1>{projectName}</h1>
            <div>
                <p>
                    Orçamento: <span>{value}</span>
                </p>
                <p>
                    Categoria: <span>{category}</span>
                </p>
            </div>
            <CardButtonArea>
                <button
                    type="button"
                    onClick={() => {
                        openModal(true), getProjectById(projectId);
                    }}
                >
                    <FaEdit />
                    Editar
                </button>
                <button type="button" onClick={handleDeleteProject}>
                    <FaTrashAlt />
                    Excluir
                </button>
            </CardButtonArea>
        </Container>
    );
};
