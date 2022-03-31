import { FormEvent, useContext, useState } from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext';
import { Container } from './styles';

export function Form() {
    const { categories, handleCreateProject } = useContext(ProjectsContext);

    const [projectName, setProjectName] = useState('');
    const [projectCategory, setProjectCategory] = useState('Infra');
    const [projectValue, setProjectValue] = useState(0);

    function handlePostProject(event: FormEvent) {
        event.preventDefault();

        handleCreateProject({
            name: projectName,
            category: projectCategory,
            value: projectValue,
        });
    }

    return (
        <Container onSubmit={(e) => handlePostProject(e)}>
            <div>
                <label>Nome do Projeto:</label>
                <input
                    type="text"
                    placeholder="Insira o nome do projeto"
                    onChange={(e) => setProjectName(e.target.value)}
                    value={projectName}
                    required
                />
            </div>
            <div>
                <label>Orçamento do Projeto:</label>
                <input
                    type="number"
                    placeholder="Insira o orçamento do projeto"
                    onChange={(e) => setProjectValue(Number(e.target.value))}
                    value={projectValue}
                    required
                />
            </div>
            <div>
                <label>Selecione uma categoria:</label>
                <select value={projectCategory} onChange={(e) => setProjectCategory(e.target.value)}>
                    {categories.map((category) => (
                        <option key={category.id} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Criar Projeto</button>
        </Container>
    );
}
