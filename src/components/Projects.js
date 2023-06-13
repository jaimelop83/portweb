import React from "react";

const Projects = () => {
  const projectData = [
    { title: "RITH Trading App", description: "This is an application designed to have trading capabilities and financial analysis. Used the PERN stack and AWS", link: "https://rith-trading.onrender.com/" },
    { title: "Stocks App", description: "This is an application that is designed to provide a financial analysis when entering a stock ticker along with a few fundamental charts. Using openai, polygon.io and plotly", link: "https://main--bejewelled-malabi-d4c0e1.netlify.app/" },
    { title: "Project 3", description: "This is a brief description of Project 3" },
  ];

  return (
    <section className="py-8 px-4" id="projects">
      <div className="flex flex-wrap -mx-2">
        {projectData.map((project, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              < a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Project
              </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
