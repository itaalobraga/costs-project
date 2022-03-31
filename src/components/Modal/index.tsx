import { FormEvent, useContext, useState } from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext';
import { Container, Content, Form } from './styles';
import { FaWindowClose } from 'react-icons/fa';
import CurrencyFormat from 'react-currency-format';

type ModalProps = {
    closeModal: (param: boolean) => void;
};

export function Modal({ closeModal }: ModalProps) {
    const { categories, projectById, handleEditProject } = useContext(ProjectsContext);

    const [projectName, setProjectName] = useState('');
    const [projectCategory, setProjectCategory] = useState('');
    const [projectValue, setProjectValue] = useState(0);

    async function handleFormSubmitEvent(e: FormEvent) {
        e.preventDefault();

        const userUpdated = {
            name: projectName ? projectName : projectById.name,
            category: projectCategory ? projectCategory : projectById.category,
            value: projectValue ? projectValue : projectById.value,
        };

        await handleEditProject(userUpdated, projectById.id);

        closeModal(false);
    }

    return (
        <Container>
            <Content>
                <button type="button" onClick={() => closeModal(false)}>
                    <FaWindowClose />
                </button>
                <Form onSubmit={(e) => handleFormSubmitEvent(e)}>
                    <div>
                        <label>Nome do Projeto:</label>
                        <input
                            type="text"
                            placeholder={projectById.name}
                            onChange={(e) => setProjectName(e.target.value)}
                            value={projectName}
                        />
                    </div>
                    <div>
                        <label>Orçamento do Projeto:</label>
                        <CurrencyFormat
                            type="text"
                            prefix="R$ "
                            decimalSeparator=","
                            thousandSeparator="."
                            decimalScale={2}
                            fixedDecimalScale={true}
                            onValueChange={(values) => {
                                setProjectValue(values.floatValue);
                            }}
                            placeholder={new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(projectById.value)}
                            spellCheck={false}
                        />
                    </div>
                    <div>
                        <label>Selecione uma categoria:</label>
                        <select value={projectCategory} onChange={(e) => setProjectCategory(e.target.value)}>
                            <option>Atual: {projectById.category}</option>
                            {categories.map((category) => {
                                if (category.name !== projectById.category) {
                                    return (
                                        <option key={category.id} value={category.name}>
                                            {category.name}
                                        </option>
                                    );
                                }
                                return;
                            })}
                        </select>
                    </div>
                    <button type="submit">Editar Projeto</button>
                </Form>
            </Content>
        </Container>
    );
}
