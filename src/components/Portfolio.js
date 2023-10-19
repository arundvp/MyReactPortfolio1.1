import React from "react";
import Project from "./Project";
import RecipeConcierge from "../images/RecipeConcierge.jpg";
import TaskTitan from "../images/TaskTitan.jpg";
import WedLoc from "../images/WedLoc.jpg";
import OCIStack from "../images/OCIStack.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Portfolio.css";

// Portfolio component
function Portfolio() {
  return (
        // Portfolio container
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "A Recipe Concierge",
              description: "A website that will help search for recipes and save them to a separate favorites page. Once on the favorites page, it is possible to select ingredients from the recipes and search for local stores that supply them close to your location.",
              imgSrc: RecipeConcierge,
              deployedLink:
                "https://arundvp.github.io/recipeConcierge/",
              githubLink:
                "https://github.com/arundvp/recipeConcierge",
            },
            {
              title: "Task-Titan Full Stack Web development",
              description: "An application focuses on project management, user authentication, and collaborative features. support full-stack development, including front-end, back-end, and database components.",
              imgSrc: TaskTitan,
              deployedLink:
                "https://task-titan-bec51c55ebe5.herokuapp.com/",
              githubLink:
                "https://github.com/arundvp/Task-Titan",
            },
            {
              title: "WedLoc",
              description: "A website for wedding photographers/videographers to showcase their clients' wedding and give their clients a place to share their wedding with their guests.",
              imgSrc: WedLoc,
              deployedLink:
                "https://wedloc-84c89e3ae29d.herokuapp.com/",
              githubLink:
                "https://github.com/markthos/wedloc",
            },
            {
              title: "OCI Stack",
              description: "OCI (Oracle Cloud Infrastructure) Stack refers to the suite of cloud services and products offered by Oracle that enable organizations to build and deploy applications on Oracle's cloud platform. OCI provides a comprehensive set of infrastructure and platform services to support various application workloads. .",
              imgSrc: OCIStack
           }

          ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              {/* <h2>{project.title}</h2> */}
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;
