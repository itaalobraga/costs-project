import { FormEvent, useContext, useState } from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext';
import { Container, Content, Form } from './styles';
import { FaWindowClose } from 'react-icons/fa';

type ModalProps = {
    isActive: boolean;
    closeModal: (param: boolean) => void;
};


export function Modal ({ isActive, closeModal }: ModalProps)  {

    const { categories, handleEditProject, projectId } =
        useContext(ProjectsContext);

    const [projectName, setProjectName] = useState('');
    const [projectCategory, setProjectCategory] = useState('');
    const [projectValue, setProjectValue] = useState(0);

    async function handleFormSubmitEvent(e: FormEvent) {
        e.preventDefault();

        const userUpdated = {
            name: projectName,
            category: projectCategory,
            value: projectValue,
        };

        await handleEditProject(userUpdated, projectId);

        closeModal(false);
        setProjectName('');
        setProjectValue(0);
    }

    return (
        <Container isActive={isActive}>
            <Content>
                <button type="button" onClick={() => closeModal(false)}>
                    <FaWindowClose />
                </button>
                <Form onSubmit={(e) => handleFormSubmitEvent(e)}>
                    <div>
                        <label>Nome do Projeto:</label>
                        <input
                            type="text"
                            placeholder="Insira o nome do projeto"
                            onChange={(e) => setProjectName(e.target.value)}
                            value='test'
                        />
                    </div>
                    <div>
                        <label>Orçamento do Projeto:</label>
                        <input
                            type="number"
                            placeholder="Insira o orçamento do projeto"
                            onChange={(e) =>
                                setProjectValue(Number(e.target.value))
                            }
                            value='3'
                        />
                    </div>
                    <div>
                        <label>Selecione uma categoria:</label>
                        <select
                            value={projectCategory}
                            onChange={(e) => setProjectCategory(e.target.value)}
                        >
                            <option disabled value="">
                                Selecione
                            </option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit">Editar Projeto</button>
                </Form>
            </Content>
        </Container>
    );
};
