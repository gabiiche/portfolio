import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/projects.css";
import SlideInUp from "../components/SlideInUp";
import SlideInView from "../components/SlideInView";

import nhImage from "../assets/screen/nh.png";
import ballantinesImage from "../assets/screen/ballantines.png";
import ecobeatImage from "../assets/screen/ecobeat.png";
import mysteryGuestImage from "../assets/screen/my.png";
import dynamicJeunesImage from "../assets/screen/dy.png";

import arrowWhite from "../assets/arrow-projects-white.svg";
import arrowGrey from "../assets/arrow-projects-grey.svg";

const PROJECTS = [
  {
    id: "national-highways",
    name: "National Highways",
    slug: "national-highways",
    tags: ["UI Design", "Design System", "UX Design", "Prototype"],
    image: nhImage,
  },
  {
    id: "ballantines",
    name: "Ballantine's",
    slug: "ballantines",
    tags: ["UI Design", "Design System", "UX Design"],
    image: ballantinesImage,
  },
  {
    id: "ecobeat",
    name: "Ecobeat",
    slug: "ecobeat",
    tags: ["UX Design", "UI Design", "Product Strategy", "Prototype", "Front-end", "Art Direction"],
    image: ecobeatImage,
  },
  {
    id: "mystery-guest",
    name: "Mystery Guest",
    slug: "mystery-guest",
    tags: ["Branding", "Brand Book", "Art Direction"],
    image: mysteryGuestImage,
  },
  {
    id: "dynamic-jeunes",
    name: "Dynamic Jeunes",
    slug: "dynamic-jeunes",
    tags: ["UX Design", "UI Design", "Project Management", "Wordpress", "Front-end", "Back-end"],
    image: dynamicJeunesImage,
  },
];

const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 300;
const OFFSET = 20;

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    let x = e.clientX + OFFSET;
    let y = e.clientY + OFFSET;


    if (x + IMAGE_WIDTH > window.innerWidth) {
      x = e.clientX - IMAGE_WIDTH - OFFSET;
    }


    if (y + IMAGE_HEIGHT > window.innerHeight) {
      y = e.clientY - IMAGE_HEIGHT - OFFSET;
    }


    if (x < 0) {
      x = OFFSET;
    }


    if (y < 0) {
      y = OFFSET;
    }

    setMousePos({ x, y });
  };

  const handleProjectHover = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

  return (
     <div className="projects-page" ref={containerRef} onMouseMove={handleMouseMove}>
      <Nav />

      <main className="w-100 projects-main">
        
        {/* Hero Section - CHANGED: Use SlideInView */}
        <section className="row">
          <div className="col-12">
            <SlideInView as="h1" className="projects-title">Projects</SlideInView>
          </div>
        </section>

        {/* Projects List */}
        <section className="projects-list">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-item">
              {/* CHANGED: Wrap project-description in SlideInView */}
              <SlideInView as="div" className="project-description">
                <Link
                  to={`/projects/${project.slug}`}
                  className="project-link"
                  onMouseEnter={() => handleProjectHover(project.id)}
                  onMouseLeave={handleProjectLeave}
                >
                  <h2 className="project-name">{project.name}</h2>
                  <img 
                    src={hoveredProject === project.id ? arrowGrey : arrowWhite} 
                    alt="Arrow" 
                    className="project-arrow"
                  />
                </Link>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                      {index < project.tags.length - 1 && <span className="tag-separator">|</span>}
                    </span>
                  ))}
                </div>
              </SlideInView>

              <SlideInView className="project-divider"></SlideInView>
            </div>
          ))}
        </section>

      </main>

      {/* Hover Image - Shows near cursor */}
      {hoveredProject && (
        <div
          className="project-hover-image"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        >
          <img
            src={PROJECTS.find((p) => p.id === hoveredProject)?.image}
            alt=""
          />
        </div>
      )}

      <Footer />
    </div>
  );
}