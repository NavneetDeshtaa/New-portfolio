"use client";

import { Container } from "../container";
import {
    MotionUp,
    ProjectCard,
    MagicButton,
    Modal,
    ModalBody,
    ModalContent,
} from "../animations";
import { SmallGridBackground } from "../bg-patterns";
import { useState, useMemo } from "react"; 
import Image from "next/image";
import Link from "next/link";
import { useModal } from "@/context";
import { FaEye, FaGithub } from "react-icons/fa";
import { Heading } from "../";
import { Project } from "../../lib/types"; 

const projects: Project[] = [
    {
        title: "DevDock- IDE",
        description: "Developed a fully functional web-based IDE with support for real-time code editing, project creation, deletion, and code download functionality, allowing users to code in up to 7 programming languages.Implemented secure authentication using OTP-based email verification (Nodemailer, OTP-Generator), ensuring account security and preventing unauthorized access",
        techStack: [ "Node-Mailer","OTP-Generator","Monaco-Editor","React", "Tailwind CSS", "File-Saver", "Morgan"],
        images: ["/devdock01.png", "/devdock02.png","/devdock03.png","/devdock04.png"],
        liveUrl: "https://dev-dock-ide-murex.vercel.app",
        gitUrl: "https://github.com/NavneetDeshtaa/DevDock--IDE",
    },
    {
        title: "Photo- Lytics",
        description: "Created an AI-powered platform that translates textual descriptions into detailed images, achieving 90% positive feedback during initial testing. Implemented Razorpay (TEST MODE) integration for efficient and secure payment gateway functionality, enabling 15+ trial subscriptions. Successfully generated over 70+ high-quality AI images and maintained a 97% success rate for error-free image generation.",
        techStack: ["Razorpay","Clip-drop API", "React", "TailwindCSS", "Bcrypt", ],
        images: ["/photolytics01.png", "/photolytics02.png", "/photolytics03.png", "/photolytics04.png"],
        liveUrl: "https://photo-lytics.vercel.app",
        gitUrl: "https://github.com/NavneetDeshtaa/PHOTO-LYTICS",
    },
    {
        title: "Chessverse -Backend Project",
        description: "Built a real-time multiplayer chess platform supporting two-player gameplay, featuring seamless turn-based interaction, robust game state updates, and sub-500ms latency. Successfully hosted 10+ active games and engaged 50+ players during the college hackathon and demo phase",
        techStack: ["Socket.IO", "Chessboard.js", "Node.Js", "Uuid","Chess.js"],
        images: ["/chess01.png", "/chess02.png"],
        liveUrl: "https://chess-game-1mz3.onrender.com",
        gitUrl: "https://github.com/NavneetDeshtaa/-CHESSVERSE",
    },
    {
        title: "Blog-Verse",
        description: " A dynamic blogging platform that empowers users to create, read, and share engaging content through a user-friendly interface featuring rich text editing, customizable profiles, social interactions",
        techStack: ["Node.js","JWT Tokens", "Express", "MongoDB"],
        images: ["/blog01.png", "/blog02.png"],
        liveUrl: "https://blog-verse-navneetdeshta.netlify.app/",
        gitUrl: "https://github.com/NavneetDeshtaa/BLOG-WEBSITE",
    },
    {
        title: "TUTION-MASTER",
        description: "Unlocking Educational Potential: Say goodbye to the struggle of finding the perfect mentor. Our platform seamlessly connects passionate mentors with eager students, transcending geographical boundaries and making quality education accessible to all.",
        techStack: [ "React","Node.js", "Express", "MongoDB"],
        images: ["/tution01.png", "/tution02.png"],
        liveUrl: "https://github.com/NavneetDeshtaa/TutionMaster",
        gitUrl: "https://github.com/NavneetDeshtaa/TutionMaster",
    },
    {
        title: "GITSCOUT",
        description: "A Userfriendly platform that allow users to search for GitHub profiles, displaying their profile information, followers, following, and repositories and much more ....",
        techStack: ["Passport.Js","Node.js", "Express", "MongoDB"],
        images: ["/git01.png", "/git02.png"],
        liveUrl: "https://gitscout.onrender.com/",
        gitUrl: "https://github.com/NavneetDeshtaa/GITSCOUT-",
    },
];


const INITIAL_ITEMS = 3;

export function Projects() {
    const { modalData, setModalData, open, openModal } = useModal();

    const [showAll, setShowAll] = useState(false);

    const displayedItems = useMemo(
        () => (showAll ? projects : projects.slice(0, INITIAL_ITEMS)),
        [showAll]
    );

    const toggleShowMore = () => setShowAll((prev) => !prev);

    const handleSetModalContent = (data: Project) => {
        setModalData(data);
        openModal();
    };
    return (
        <SmallGridBackground className="py-10" id="projects">
            <Container>
                <MotionUp delay={0.1}>
                    <Heading className="text-4xl" text="A Small Selection of Recent Projects" />

                    {/* Project Grid */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {displayedItems.map((project) => (
                            <ProjectCard
                                key={project.title}
                                data={project}
                                onClick={() => handleSetModalContent(project)} 
                            />
                        ))}
                    </div>

                    {/* Show More/Less Button */}
                    {projects.length > INITIAL_ITEMS && (
                        <MagicButton
                            title={showAll ? "Show Less" : "Show More"}
                            handleClick={toggleShowMore}
                            className="mx-auto !block mt-12"
                        />
                    )}
                </MotionUp>
            </Container>

            {/* Modal for Project Details */}
            {modalData && open && (
                <Modal>
                    <ModalBody className="!max-w-[700px]">
                        <ModalContent className="mt-5">
                            {/* Modal Header */}
                            <div className="mb-5 flex items-center flex-wrap gap-x-5 gap-y-2">
                                <h5 className="text-xl font-semibold text-blue-100">
                                    {modalData?.title}
                                </h5>
                                <div className="flex gap-4 items-center">
                                    {modalData?.liveUrl && (
                                        <Link
                                            href={modalData.liveUrl}
                                            target="_blank"
                                            className="flex justify-center items-center text-purple"
                                        >
                                            <FaEye className="me-1" />
                                            <span className="text-[15px]">Check Live Site</span>
                                        </Link>
                                    )}
                                    {modalData?.gitUrl && (
                                        <Link
                                            href={modalData.gitUrl}
                                            target="_blank"
                                            className="flex justify-center items-center text-purple"
                                        >
                                            <FaGithub className="me-1" />
                                            <span className="relative top-[1px] text-[15px]">
                                                Get code
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Project Description */}
                            <div className="border border-gray-700 border-opacity-75 p-4 rounded-lg mb-5">
                                <p className="leading-relaxed text-sm text-blue-100">
                                    {modalData?.description}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-3 mb-5">
                                {modalData?.techStack?.map((item) => (
                                    <p
                                        key={item}
                                        className="bg-slate-800/50 px-5 py-2 text-sm text-blue-100 rounded-sm"
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>

                            {/* Project Images */}
                            <div className="flex flex-wrap gap-x-2 gap-y-5 mb-5">
                                {modalData?.images?.map((image) => (
                                    <Link
                                        key={image}
                                        className="w-full sm:w-[49%]"
                                        href={image}
                                        target="_blank"
                                    >
                                        <Image
                                            src={image}
                                            alt={modalData.title}
                                            height={500}
                                            width={500}
                                            className="rounded-lg w-full max-h-48 cursor-pointer aspect-video object-cover"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </ModalContent>
                    </ModalBody>
                </Modal>
            )}
        </SmallGridBackground>
    );
}




