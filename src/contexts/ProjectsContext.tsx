import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

type ProjectsContextProvider = {
    children: ReactNode;
};

type CategoryProps = {
    id: number;
    name: string;
};

type ProjectProps = {
    id: number;
    name: string;
    value: number;
    category: string;
};

type createProjectProps = Omit<ProjectProps, 'id'>;

type ProjectsContextProps = {
    projects: ProjectProps[];
    categories: CategoryProps[];
    createProject: (project: createProjectProps) => Promise<void>;
    handleDeleteProject: (id: Number) => void;
};

export const ProjectsContext = createContext<ProjectsContextProps>(
    {} as ProjectsContextProps
);

export function ProjectsContextProvider({ children }: ProjectsContextProvider) {
    const [categories, setCategories] = useState<CategoryProps[]>([]);
    const [projects, setProjects] = useState<ProjectProps[]>([]);
    const navigate = useNavigate();

    const getCategories = async () => {
        try {
            const response = await api.get('/categories');
            setCategories([...response.data]);
        } catch (error) {
            
        }
    };

    const getProjects = async () => {
        try {
            const response = await api.get('/projects');
            setProjects([...response.data]);
        } catch (error) {
            
        }
    };

    useEffect(() => {
        getCategories();
        getProjects();

    }, []);

    async function createProject(project: createProjectProps) {
        try {
            const response = await api.post('/projects', project);
            setProjects([...projects, response.data]);

            navigate('/projects', { state: 'Projeto criado com sucesso!' });
        } catch (error) {
            alert('b');
        }
    }

    async function handleDeleteProject(id : Number) {
        console.log("id => ", id)
        const response = await api.delete(`/projects/${id}`)
        const newProjects = projects.filter(project => project.id !== id)
        setProjects(newProjects)
        console.log('response => ', response);
    }

    return (
        <ProjectsContext.Provider
            value={{ projects, categories, createProject, handleDeleteProject }}
        >
            {children}
        </ProjectsContext.Provider>
    );
}
