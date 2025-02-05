import './globals.css'; 
import { Hero, ExperienceSkills, Projects, Contact } from '../components/sections';
import { ModalProvider } from '../context/modal-provider';

export default async function page() {
  return (
    <ModalProvider>
      <Hero />
      <ExperienceSkills />
      <Projects />
      <Contact/>
    </ModalProvider>
  );
}
