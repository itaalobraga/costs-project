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

type editProjectProps = Omit<ProjectProps, 'id'>;

type ProjectsContextProps = {
    projects: ProjectProps[];
    categories: CategoryProps[];
    projectId: Number;
    handleCreateProject: (project: createProjectProps) => Promise<void>;
    handleDeleteProject: (id: Number) => void;
    handleEditProject: (
        projectUpdated: editProjectProps,
        id: Number
    ) => Promise<void>;
    setProjectId: (param: number) => void;
};

export const ProjectsContext = createContext<ProjectsContextProps>(
    {} as ProjectsContextProps
);

export function ProjectsContextProvider({ children }: ProjectsContextProvider) {
    const [categories, setCategories] = useState<CategoryProps[]>([]);
    const [projects, setProjects] = useState<ProjectProps[]>([]);
    const [projectId, setProjectId] = useState(0);

    const navigate = useNavigate();

    const getCategories = async () => {
        try {
            const response = await api.get('/categories');
            setCategories([...response.data]);
        } catch (error) {}
    };

    const getProjects = async () => {
        try {
            const response = await api.get('/projects');
            setProjects([...response.data]);
        } catch (error) {}
    };

    useEffect(() => {
        getCategories();
        getProjects();
    }, []);

    async function handleCreateProject(project: createProjectProps) {
        try {
            const response = await api.post('/projects', project);
            setProjects([...projects, response.data]);

            navigate('/projects', { state: 'Projeto criado com sucesso!' });
        } catch (error) {
            alert('b');
        }
    }

    async function handleDeleteProject(id: Number) {
        const response = await api.delete(`/projects/${id}`);
        const newProjects = projects.filter((project) => project.id !== id);
        setProjects(newProjects);
    }

    async function handleEditProject(
        projectUpdated: editProjectProps,
        id: Number
    ) {
        try {
            const response = await api.put(`/projects/${id}`, projectUpdated);
            const projectUpdate = projects.map((project) => {
                if (response.data.id === project.id) {
                    return response.data;
                }
                return project;
            });
            
           
            setProjects(projectUpdate);


        } catch (error) {}
    }

    return (
        <ProjectsContext.Provider
            value={{
                projects,
                categories,
                projectId,
                setProjectId,
                handleCreateProject,
                handleDeleteProject,
                handleEditProject,
            }}
        >
            {children}
        </ProjectsContext.Provider>
    );
}
