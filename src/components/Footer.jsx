import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import Resume from "../resources/Sarthak_Rathi_Resume.pdf";

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">
          Home
        </Link>
        <Link to="/about" className="link link-hover">
          About Me
        </Link>

        <Link to="/projects" className="link link-hover">
          Projects
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            className="btn-ghost"
            onClick={() =>
              window.open("https://github.com/sarthakr85", "_blank")
            }
          >
            <FaGithub
              className="fill-current "
              style={{
                width: "24",
                height: "24",
              }}
            />
          </a>
          <a
            className="btn-ghost"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/sarthak-rathi-0188291ab/",
                "_blank"
              )
            }
          >
            <FaLinkedin
              className="fill-current"
              style={{
                width: "24",
                height: "24",
              }}
            />
          </a>
          <a className="btn-ghost" href={Resume} target="_blank">
            <ImProfile
              className="fill-current"
              style={{
                width: "24",
                height: "24",
              }}
            />
          </a>
        </div>
      </div>
      <div>
        <p>
          Copyright © 2023 - All right reserved by{" "}
          <a
            className="link link-hover"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "_blank"
              )
            }
          >
            Sarthak Rathi
          </a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
