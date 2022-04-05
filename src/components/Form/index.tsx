import { FormEvent, useContext, useState } from 'react';
import { ProjectsContext } from '../../contexts/ProjectsContext';
import { Container } from './styles';
import CurrencyFormat from 'react-currency-format';

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
                <CurrencyFormat
                    type="text"
                    prefix="R$ "
                    decimalSeparator=","
                    thousandSeparator="."
                    decimalScale={2}
                    fixedDecimalScale={true}
                    placeholder={new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(projectValue)}
                    onValueChange={(values) => {
                        setProjectValue(values.floatValue);
                    }}
                    spellCheck={false}
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
