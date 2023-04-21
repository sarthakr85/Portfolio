import ProfilePic from "../resources/images/ProfilePic.jpg";
import BackgroundImage from "../resources/images/bg-image.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div
        id="background-change"
        className={theme === "luxury" ? "hero-overlay bg-opacity-60" : ""}
      ></div>
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={ProfilePic}
          className="max-w-sm rounded-lg shadow-2xl"
          style={{ maxWidth: "20rem" }}
        />
        <div>
          <h1 className="text-5xl font-bold">Welcome to my Portfolio!</h1>
          <p className="py-6 ">
            Hi! My name is Sarthak. I am a 23 year old aspiring to become a
            frontend developer.
          </p>
          <Link to="/about">
            <button className="btn bg-accent ">Know more about me!</button>
          </Link>
          <span className="pl-2"></span>
          <Link to="/projects">
            <button className="btn bg-accent ">My Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
