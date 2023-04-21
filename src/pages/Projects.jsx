import HouseMarketPlaceImage from "../resources/images/HouseMarketPlace_Image.png";
import SupportDeskAppImage from "../resources/images/SupportDeskApp-Image.png";
import FeedbackUIImage from "../resources/images/FeedbackUI_Image.png";
import ForkifyImage from "../resources/images/Forkify_Image.png";
import GithubFinderImage from "../resources/images/GithubFinderApp_Image.png";

function Projects() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center" style={{ width: "100vw" }}>
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold">My Projects</h1>
          <div className="flex flex-column flex-wrap justify-center ">
            <span>
              <div className="card card-compact  w-80 bg-base-100 shadow-xl card-border">
                <figure>
                  <img
                    src={SupportDeskAppImage}
                    alt="SupportDeskAppPageImage"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title ">Support Desk (MERN Stack)</h2>
                  <p>
                    Developed a support desk website with CRUD functionality.
                    Built the front-end using React.js and HTML/CSS and
                    integrated it with the back-end built with Node.js and
                    MongoDB. Implemented user authentication and authorization
                    using JWT tokens. Created APIs for database queries and
                    integrated them with the frontend using Axios.
                  </p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        window.open(
                          "https://support-desk-app-6igy.onrender.com",
                          "_blank"
                        )
                      }
                    >
                      Visit Website
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        window.open(
                          "https://github.com/sarthakr85/Support-desk-project",
                          "_blank"
                        )
                      }
                    >
                      Github
                    </button>
                  </div>
                </div>
              </div>
            </span>
            <span>
              <div className="card card-compact w-80 bg-base-100 shadow-xl card-border">
                <figure>
                  <img
                    src={HouseMarketPlaceImage}
                    alt="HouseMarketPlacePageImage"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">House MarketPlace</h2>
                  <p>
                    Developed a House Market place application with CRUD
                    functionality. Designed the front-end using React.js, HTML,
                    CSS and implemented a mobile-first design approach. Used
                    Firebase as back-end for user authentication and
                    authorization and integrated Google OAuth as well.
                  </p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        window.open(
                          "https://house-marketplace-lilac-mu.vercel.app",
                          "_blank"
                        )
                      }
                    >
                      Visit Website
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        window.open(
                          "https://github.com/sarthakr85/House-Marketplace",
                          "_blank"
                        )
                      }
                    >
                      Github
                    </button>
                  </div>
                </div>
              </div>
            </span>
            <span>
              <div className="card card-compact w-80 bg-base-100 shadow-xl card-border">
                <figure>
                  <img src={ForkifyImage} alt="ForkifyPageImage" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Forkify</h2>
                  <p>
                    A web application that allows users to search, create and
                    edit recipes. Built the front-end using Javascript, HTML,
                    CSS, SASS.
                  </p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        window.open(
                          "https://forkify-sarthakr.netlify.app",
                          "_blank"
                        )
                      }
                    >
                      Visit Website
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        window.open(
                          "https://github.com/sarthakr85/forkify-course",
                          "_blank"
                        )
                      }
                    >
                      Github
                    </button>
                  </div>
                </div>
              </div>
            </span>
            <span>
              <div className="card card-compact w-80 bg-base-100 shadow-xl card-border">
                <figure>
                  <img src={GithubFinderImage} alt="GithubFinderPageImage" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Github Finder</h2>
                  <p>
                    A web application that fetches and displays user and user
                    information from Github's Rest API using Axios. Built the
                    front-end using React.js, Tailwind and daisyUI.
                  </p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        window.open(
                          "https://github-finder-two-taupe.vercel.app",
                          "_blank"
                        )
                      }
                    >
                      Visit Website
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        window.open(
                          "https://github.com/sarthakr85/Github-Finder",
                          "_blank"
                        )
                      }
                    >
                      Github
                    </button>
                  </div>
                </div>
              </div>
            </span>
            <span>
              <div className="card card-compact w-80 bg-base-100 shadow-xl card-border">
                <figure>
                  <img src={FeedbackUIImage} alt="FeedbackUIPageImage" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">FeedBack UI</h2>
                  <p>
                    A Feedback web application that allows users to give and
                    update feedbacks. Made using React.js, HTML and CSS.
                  </p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        window.open(
                          "https://feedbackuirathi.netlify.app",
                          "_blank"
                        )
                      }
                    >
                      Visit Website
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        window.open(
                          "https://github.com/sarthakr85/Feedbakc-UI",
                          "_blank"
                        )
                      }
                    >
                      Github
                    </button>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
