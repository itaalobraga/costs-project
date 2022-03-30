import { CardButtonArea, Container } from './styles';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext';
import { api } from '../../services/api';

type CardProps = {
    projectName: string;
    value: string;
    category: string;
    projectId: number;
    handleDeleteProject: () => void;
    openModal: (param: boolean) => void;
};

export const Card = ({
    projectName,
    value,
    category,
    projectId,
    handleDeleteProject,
    openModal
}: CardProps) => {
    const { setProjectId } = useContext(ProjectsContext);

    async function getProjectId(projectId: number) {
        const response = await api.get(`/projects/${projectId}`);
        console.log('response => ', response);

        setProjectId(projectId);
    }

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
                        openModal(true), getProjectId(projectId);
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
