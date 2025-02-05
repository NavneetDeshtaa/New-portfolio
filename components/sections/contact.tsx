import { Container } from "../container";
import { MotionUp } from "../animations";
import { SmallGridBackground } from "../bg-patterns";
import { ContactForm } from "../form";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { Heading } from "../";

const personalInfo = {
  setupImage: "",
  email: "navneetdeshtaa@gmail.com",
  workingHours: "Mon - Fri, 10AM - 5PM",
  address: "Shimla, Himachal Pradesh",
};

const socialLinks = [
  {
    title: "GitHub",
    url: "https://github.com/NavneetDeshtaa",
  },
  {
    title: "Twitter",
    url: "https://x.com/DeshtaNavn29518",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/navneetdeshta_",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/navneet-deshta-14662b259",
  },
];

const getSocialIcons = (title: string) => {
  switch (title) {
    case "GitHub":
      return <FaGithub size={30} />;
    case "Twitter":
      return <FaTwitter size={30} />;
    case "Instagram":
      return <FaInstagram size={30} />;
    default:
      return <FaLinkedinIn size={30} />;
  }
};

const getIconColors = (title: string) => {
  switch (title) {
    case "GitHub":
      return "text-gray-200 hover:text-gray-700";
    case "Twitter":
      return "text-blue-500 hover:text-blue-700";
    case "Instagram":
      return "text-pink-500 hover:text-pink-700";
    default:
      return "text-blue-500 hover:text-blue-700";
  }
};

export function Contact() {
  return (
    <SmallGridBackground className="py-10 md:py-20" id="contact">
      <Container>
        <MotionUp delay={0.1}>
          <Heading className="text-5xl" text="Let's Have a Chat" />

          <div className="flex sm:flex-nowrap flex-wrap mt-6 sm:mt-12">
            
            <div
              className="order-2 sm:order-1 mt-5 w-full md:w-[60%] rounded-lg overflow-hidden sm:mr-10 p-5 md:p-10 flex items-center justify-start relative"
              style={{
                background: "rgba(255, 255, 255, 0.05)", 
                backdropFilter: "blur(20px)", 
                WebkitBackdropFilter: "blur(20px)",  
                borderRadius: "20px", 
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",  
                padding: "20px",
            }}
            
            
            >
              <div className="relative flex flex-wrap justify-center items-center w-full shadow-md">
                <div className="w-full px-6">
                  <h6 className="text-blue-100 italic font-bold text-xl uppercase">
                    Code. Create.<span className="text-purple"> Innovate.</span>
                  </h6>
                </div>

                <div className="w-full lg:w-1/2 px-6 mt-4">
                  <h6 className="title-font font-semibold text-blue-100  tracking-widest text-xs">
                    EMAIL
                  </h6>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-100 leading-relaxed"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                <div className="w-full lg:w-1/2 px-6 mt-4">
                  <h6 className="title-font font-semibold text-blue-100 tracking-widest text-xs">
                    WORKING HOURS
                  </h6>
                  <p className="text-blue-100 leading-relaxed">
                    {personalInfo.workingHours}
                  </p>
                </div>

                <div className="w-full lg:w-1/2 px-6 mt-4">
                  <h6 className="title-font font-semibold text-blue-100  tracking-widest text-xs">
                    ADDRESS
                  </h6>
                  <p className="mt-1 text-blue-100 leading-relaxed">
                    {personalInfo.address}
                  </p>
                </div>

                <div className="w-full lg:w-1/2 px-6 mt-4 gap-2 sm:mt-8 flex items-center">
                  {socialLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      target="_blank"
                      className={`inline-flex items-center mr-4 ${getIconColors(
                        item.title
                      )}`}
                    >
                      {getSocialIcons(item.title)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 sm:order-2 w-full md:w-[40%] flex flex-col md:ml-auto mt-8 md:mt-0">
              <ContactForm/>
            </div>
          </div>
        </MotionUp>
      </Container>
    </SmallGridBackground>
  );
}
