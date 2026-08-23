import { useState } from "react";
import arrowProjectsGrey from "../assets/arrow-projects-grey.svg"; 
import arrowProjectsWhite from "../assets/arrow-projects-white.svg";
import "../styles/internal-navigation.css"; 

/**
 * InternalNavigation Component
 * 
 * Internal navigation for project detail pages
 * - Shows "Back" button to return to previous page
 * - Shows next project link (if not the last project)
 * - Full-width line on top with 48px gap
 * - No top/bottom padding, left/right padding matches nav/footer
 * - Instant scroll to top on navigation
 * 
 * @param {Object} props
 * @param {string} props.nextProjectName - Name of the next project (optional)
 * @param {string} props.nextProjectLink - Link to the next project (optional)
 */
export default function InternalNavigation({ 
  nextProjectName, 
  nextProjectLink = "/projects"
}) {
  const [isBackHovered, setIsBackHovered] = useState(false);

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'auto' }); 
    window.history.back(); 
  };

  const handleNextProject = () => {
    window.scrollTo({ top: 0, behavior: 'auto' }); 
    window.location.href = nextProjectLink;
  };

  return (
    <div className="project-navigation">
      {/* Full-width divider line */}
      <div className="project-navigation__divider" />
      
      {/* 48px gap between line and content */}
      <div className="project-navigation__gap" />
      
      {/* Navigation content */}
      <div className="project-navigation__content d-flex align-items-center justify-content-between">

        {/* Back Button */}
        <button
          onClick={handleBack}
          className="project-navigation__back-btn d-flex align-items-center gap-4"
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)}
          aria-label="Back to previous page"
        >
          {/* Arrow Icon */}
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
          <a
            href={nextProjectLink}
            className="project-navigation__next-link flex-grow-1 d-flex align-items-center justify-content-end"
            onClick={(e) => {
              e.preventDefault();
              handleNextProject();
            }}
          >
            <p className="project-navigation__next-text">{nextProjectName}</p>
          </a>
        )}
      </div>
    </div>
  );
}