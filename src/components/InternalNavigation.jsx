import { Link } from "react-router-dom";
import { useState } from "react";
import arrowProjectsGrey from "../assets/arrow-projects-grey.svg"; 
import arrowProjectsWhite from "../assets/arrow-projects-white.svg";
import "../styles/internal-navigation.css"; 

/**
 * InternalNavigation Component
 * 
 * Internal navigation for project detail pages
 * - Shows "Back" button to return to projects list
 * - Shows next project link (if not the last project)
 * - Full-width line on top with 48px gap
 * - No top/bottom padding, left/right padding matches nav/footer
 * 
 * @param {Object} props
 * @param {string} props.nextProjectName - Name of the next project (optional)
 * @param {string} props.nextProjectLink - Link to the next project (optional)
 * @param {Function} props.onBackClick - Callback for back button
 */
export default function InternalNavigation({ 
  nextProjectName, 
  nextProjectLink = "/projects",
  onBackClick 
}) {
  const [isBackHovered, setIsBackHovered] = useState(false);

  return (
    <div className="project-navigation">
      {/* Full-width divider line */}
      <div className="project-navigation__divider" />
      
      {/* 48px gap between line and content */}
      <div className="project-navigation__gap" />
      
      {/* Navigation content */}
      <div className="project-navigation__content">
        
        {/* Back Button */}
        <button 
          onClick={onBackClick}
          className="project-navigation__back-btn"
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)}
          aria-label="Back to projects"
        >
          {/* Arrow Icon - use as img src like in Projects.jsx */}
          <div className="project-navigation__arrow">
            <img 
              src={isBackHovered ? arrowProjectsGrey : arrowProjectsWhite}
              alt="Arrow"
            />
          </div>
          
          {/* Back Text */}
          <p className="project-navigation__back-text">Back</p>
        </button>

        {/* Next Project Link */}
        {nextProjectName && (
          <Link to={nextProjectLink} className="project-navigation__next-link">
            <p className="project-navigation__next-text">{nextProjectName}</p>
          </Link>
        )}
      </div>
    </div>
  );
}