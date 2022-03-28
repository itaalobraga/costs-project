import { CardButtonArea, Container } from './styles';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

type CardProps = {
    projectName: string;
    value: string;
    category: string;
    handleDeleteProject: () => void;
};

export const Card = ({projectName, value, category, handleDeleteProject}: CardProps) => {
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
                <button type="button">
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
