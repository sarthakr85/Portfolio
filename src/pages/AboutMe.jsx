import { FaReact, FaNode, FaNpm, FaGithub } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

function AboutMe() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            As an entry level Front End Developer, I am equipped with the
            necessary skills to design, develop and maintain responsive and
            user-friendly websites. I possess a strong foundation in HTML, CSS,
            JavaScript and React.js.
          </p>
          <p className="py-6">
            Furthermore, I am adept at adapting to new technologies and trends,
            ensuring that my work stays relevant and up-to-date. My
            problem-solving skills and attention to detail have been
            instrumental in identifying and troubleshooting bugs and
            inconsistencies.
          </p>

          <h2 className="text-3xl m-4 font-bold">
            Tools and Technologies Used:
          </h2>

          <div className="flex flex-column flex-wrap">
            <div className="p-4 m-2">
              <AiFillHtml5
                className="logo link "
                onClick={() =>
                  window.open(
                    "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="p-4 m-2">
              <DiCss3
                className="logo link"
                onClick={() =>
                  window.open(
                    "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="p-4 m-2">
              <SiJavascript
                className="logo link"
                onClick={() =>
                  window.open(
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    "_blank"
                  )
                }
              />
            </div>
            <div className="p-4 m-2">
              <FaReact
                className="logo link"
                onClick={() => window.open("https://react.dev", "_blank")}
              />
            </div>
            <div className="p-4 m-2">
              <FaNode
                className="logo link "
                onClick={() => window.open("https://nodejs.org/en", "_blank")}
              />
            </div>
            <div className="p-4 m-2">
              <FaNpm
                className="logo link"
                onClick={() => window.open("https://www.npmjs.com", "_blank")}
              />
            </div>
            <div className="p-4 m-2">
              <SiTailwindcss
                className="logo link"
                onClick={() => window.open("https://tailwindcss.com", "_blank")}
              />
            </div>
            <div className="p-4 m-2">
              <FaGithub
                className="logo link"
                onClick={() => window.open("https://github.com", "_blank")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
