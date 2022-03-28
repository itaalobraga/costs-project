import { Route, Routes } from 'react-router-dom';
import { ContainerWrapper } from './components/ContainerWrapper';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProjectsContextProvider } from './contexts/ProjectsContext';
import { Company } from './pages/Company';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { NewProject } from './pages/NewProject';
import { Projects } from './pages/Projects';
import { GlobalStyle } from './styles/GlobalStyle';

export function App() {
    return (
        <>
            <Header />
            <ContainerWrapper>
                <ProjectsContextProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/company" element={<Company />} />
                        <Route path="/newproject" element={<NewProject />} />
                    </Routes>
                </ProjectsContextProvider>
                <Footer />
            </ContainerWrapper>
            <GlobalStyle />
        </>
    );
}
