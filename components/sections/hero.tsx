import { FaLocationArrow, FaGithub  } from "react-icons/fa6";
import {
  MagicButton,
  MotionUp,
  Highlight,
  TextAppearAnimation,
} from "../animations";
import { Container } from "../container";
import Image from "next/image";
import { DotBackground, Heading } from "../";

export function Hero() {
  const data = {
    personalInfo: {
      name: "Navneet Deshta",
      position: "Software Engineer",
      address: "Himachal Pradesh, India",
      github: "https://github.com/NavneetDeshtaa",
      setupImage: "/contact.webp",
      profileImage: "/hero2.jpg",
      moreInfo: `🔹I am passionate about coding.\n\n🔹I specialize in building web applications with React and Next.js.\n\n🔹Strong problem-solving skills, with experience in data structures, algorithms, and LeetCode challenges.\n\n🔹An ECE student with experience in software development and leading projects, focused on working efficiently.`,
    },
  };

  const personalInfo = data.personalInfo;

  return (
    <DotBackground className="pt-20" spotlight>

      <Container className="flex justify-center relative z-10 w-full">
        <div className="flex flex-col items-center justify-center w-full">
          <MotionUp delay={0}>
            <h1 className="text-3xl md:text-6xl text-neutral-700 dark:text-blue-100 !leading-snug text-center mx-auto font-[900]">
              Hi 👋, I'm {personalInfo.name.split(" ")[0]} Deshta
              <br />
              <Highlight delay={1.8}>{personalInfo.position}</Highlight>
            </h1>
          </MotionUp>

          <MotionUp delay={0.3} className="my-4">
            <h6 className="text-center !leading-7 md:!leading-10 font-semibold text-2 lg:text-3xl max-w-xl text-blue-100">
              Based in {personalInfo.address},
              <br />
              Proficient in <Highlight delay={1.8}>React</Highlight> and{" "}
              <Highlight delay={1.8}>Next.js</Highlight>
            </h6>
          </MotionUp>

          <MotionUp delay={0.6} className="flex items-center gap-3 mt-5">
            <MagicButton
              title="Say Hi"
              icon={<FaLocationArrow />}
              position="right"
              className="w-[150px] text-lg"
              scroll="#contact"
            />

            <MagicButton
              title="Github"
              icon={<FaGithub  />}
              position="right"
              className="w-[150px] text-lg"
              externalLink={personalInfo.github}
            />
          </MotionUp>
        </div>
      </Container>

      <Container className="mt-20 lg:mt-16 z-20 relative">
        <MotionUp delay={0.9}>
          <div
            className="p-0 py-10 md:p-14 rounded-lg"
            style={{
              background: `linear-gradient(90deg, rgba(0,0,0,0.90) 20%, rgba(0,1,2,0.50) 100%), url('${personalInfo.setupImage}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex gap-8 flex-wrap lg:flex-nowrap lg:gap-16 overflow-hidden">
              <div className="order-2 lg:order-1 w-full lg:w-[70%]">
                <Heading
                  text="Introduction"
                  className="uppercase mb-5 text-left text-purple"
                />
                {personalInfo.moreInfo.split("\n\n").map((paragraph, index) => (
                  <p className="leading-relaxed mb-2 last:mb-0" key={index}>
                    {paragraph}
                  </p>
                ))}
                <TextAppearAnimation
                  className="text-white italic font-semibold text-xl mt-5 uppercase animate-pulse"
                  text="Strongly believe in Karma"
                />
              </div>

              <div className="flex justify-center order-1 lg:order-2 w-full max-h-[300px] lg:w-[30%]">
                <Image
                  src={personalInfo.profileImage}
                  width={400}
                  height={400}
                  alt={personalInfo.name}
                  className="rounded-lg aspect-square overflow-hidden max-w-full"
                />
              </div>
            </div>
          </div>
        </MotionUp>
      </Container>

    </DotBackground>
  );
}
