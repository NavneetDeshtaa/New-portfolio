import { Container } from "../container";
import { MagicCard, MotionUp, Timeline } from "../animations";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Heading } from "../";

function sortByStartDate(arr: any[]): any[] {
  return arr.toSorted(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
}

export function ExperienceSkills() {
  // Static data
  const experiences = [
    {
      companyName: "NIT HAMIRPUR",
      position: "B.Tech in Electronics & Communication",
      startDate: "2022-11-15",
      endDate: "2026-06-01",
      companyLogo: "/NIT-Hamirpur-Logo.webp",
      jobDescription: [
        "⚡Pursuing a comprehensive education in Electronics and Communication Engineering.",
        " Apart from this, I have done Full Stack Development and still exploring more.",
        " Regularly participate in recreational sports activities, including volleyball and badminton.",
      ],
    },
    {
      companyName: "SpringDale School",
      position: "Formal Education",
      startDate: "2012-04-05",
      companyLogo: "/springdale-school.webp",
      endDate: "2021-04-05",
      jobDescription: [
        "⚡I have scored 93% in Matric and 96% in 12th Boards.",
        " Engaged actively in diverse academic pursuits, fostering a well-rounded skill set and a thirst for knowledge.",
        " Participated in many Quizes, Science Models( representing Model at IIT,Delhi).",
      ],
    },
    // {
    //     companyName: "Company B",
    //     position: "Junior Developer",
    //     startDate: "2021-01-01",
    //     companyLogo:"https://picsum.photos/200/300",
    //     endDate: "2022-01-01",
    //     jobDescription: "Assisted in building backend APIs.You can use this component by passing an array of work experience data that matches the WorkExperience interface. Example usage:",
    // },
    // Add more experiences as needed
  ];

  const skills = [
    { name: "React", image: "/ReactLogo.webp", url: "https://reactjs.org" },
    { name: "Node.js", image: "/nodejs-icon.webp", url: "https://nodejs.org" },
    { name: "Next.js", image: "/nextjs-icon.webp", url: "https://nextjs.org" },
    {
      name: "JavaScript",
      image: "/js logo.webp",
      url: "https://www.javascript.com/",
    },
    {
      name: "Tailwind CSS",
      image: "/tailwindlogo.webp",
      url: "https://tailwindcss.com",
    },
    { name: "GitHub", image: "/git logo.webp", url: "https://github.com" },
    {
      name: "CSS",
      image: "/csslogo.webp",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    { name: "MongoDB", image: "/mongo logo.webp", url: "https://mongodb.com" },
    {
      name: "VS Code",
      image: "/vscode logo.webp",
      url: "https://code.visualstudio.com",
    },
    {
      name: "TypeScript",
      image: "/tslogo.webp",
      url: "https://www.typescriptlang.org",
    },
  ];

  const certificates = [
    {
      title: "JavaScript(Intermediate)",
      image: "/hackerrank.png",
      url: "https://www.hackerrank.com/certificates/iframe/72b727b8969f",
    },
    {
      title: "Software Engineering Job Simulation",
      image: "/forage.png",
      url: "https://drive.google.com/file/d/14R8vQBj0fW938mSPJuNk6xcUrKodJd8H/view?usp=drive_link",
    },
  ];

  const sortedExperiences = sortByStartDate(experiences);

  return (
    <section className="w-full py-10 md:py-20" id="about">
      <Container>
        
        <MotionUp delay={0.1}>
          <Heading className="text-5xl" text="Academic Background" />
          <Timeline data={sortedExperiences} />
        </MotionUp>

        <MotionUp className="mt-10 p-0 py-10 rounded-lg" delay={0.1}>
          <Heading className="text-5xl" text="Expertise" />
          <Marquee
            speed={90}
            pauseOnHover
            className="mt-5 overflow-hidden py-5"
          >
            {skills.map((skill, index) => (
              <MagicCard
                className="hover:scale-105 transition-all duration-500 w-40 h-40 ms-10 flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl"
                gradientColor="#262626"
                key={index}
              >
                <div className="flex flex-col items-center w-full gap-2">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={80}
                    height={80}
                    className="h-16 w-16 rounded-full object-cover border border-white bg-white"
                  />
                  <h6 className="text-start text-lg font-bold text-blue-100">
                    {skill.url ? (
                      <Link
                        target="_blank"
                        href={skill.url}
                        className="hover:underline"
                      >
                        {skill.name}
                      </Link>
                    ) : (
                      skill.name
                    )}
                  </h6>
                </div>
              </MagicCard>
            ))}
          </Marquee>
        </MotionUp>

        <MotionUp className="mt-10 p-0 py-10 rounded-3xl" delay={0.1}>
          {certificates.length > 1 ? (
            <Heading className="text-5xl" text="Certifications" />
          ) : (
            <Heading text={`${certificates[0].title} Certified`} />
          )}
          {certificates.length === 1 ? (
            <div className="max-w-3xl mx-auto mt-8 relative">
              <a
                href={certificates[0].url}
                target="_blank"
                rel="noopener noreferrer"
                title={certificates[0].title}
                className="block border border-gray-400 shadow-lg rounded-3xl overflow-hidden"
              >
                <Image
                  src={certificates[0].image}
                  alt={certificates[0].title}
                  width={1280}
                  height={800}
                  className="rounded-3xl w-full h-full object-cover"
                />
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {certificates.map((certificate, index) => (
                <a
                  href={certificate?.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="block border border-gray-300 hover:border-gray-500 transition-all shadow-md rounded-3xl overflow-hidden"
                >
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={1280}
                    height={720}
                    className="w-full max-h-[400px] aspect-square rounded-3xl"
                  />
                </a>
              ))}
            </div>
          )}
        </MotionUp>

      </Container>
    </section>
  );
}
