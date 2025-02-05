import './globals.css'; 
import { Hero, ExperienceSkills, Projects, Contact } from '../components/sections';
import { ModalProvider } from '../context/modal-provider';
// const Testimonials = React.lazy(() => import('../components/sections/Testimonials'));


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
