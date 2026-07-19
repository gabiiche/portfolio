import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/project-detail.css";

import ballantinesHero from "../assets/ballantines/mock-phone-solo.png";
import ballantinesDesktop from "../assets/ballantines/desktop-screens.png";
import ballantinesDesignSystem from "../assets/ballantines/design-system.webp";
import ballantinesPhoneHand from "../assets/ballantines/phpne-hand.png";
import ballantinesMultiScreen from "../assets/ballantines/mock-up-multiple.png";

const PROJECTS_DATA = {
  "ballantines": {
    title: "Ballantine's",
    heroImage: ballantinesHero,
    intro: "Ballantine's was modernising its digital presence with a fresh, culture-driven showcase site. Working at Oliver, an in-house agency model, I joined the project already in motion, quickly picking up the client's established brand guidelines and designing within them.\n\nI designed pages from wireframes to high-fidelity and prototypes, challenging UX decisions along the way and building on existing work to elevate it. I contributed to the design system and shared library, defining component and section states, and took part in design and engineering syncs. Accessibility was a strict requirement across all of Oliver's work, and every component was designed to meet it.",
    images: [
      {
        src: ballantinesDesktop,
        caption: "Desktop — true music page."
      },
      {
        src: ballantinesDesktop,
        caption: "design system — components and states.",

      },
      {
        src: ballantinesPhoneHand,
        caption: "mobile — product detail pages.",
        pair: {
          src: ballantinesMultiScreen,
          caption: ""
        }
      }
    ]
  },

};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS_DATA[slug];

  if (!project) {
    return (
      <div className="home">
        <Nav />
        <main className="w-100" style={{ padding: "100px 20px", textAlign: "center" }}>
          <h1>Project not found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <Nav />

      <main className="w-100 project-detail-main">


<div className="row align-items-center">
  <div className="d-xl-block col-xxl-6 col-xl-6 d-lg-none">
    <div className="project-detail-hero-image">
      <img src={project.heroImage} alt={project.title} />
    </div>
  </div>
  
  <div className="col-xxl-6 col-xl-6 col-lg-12 solo-paragraph">
    <h1 className="projects-title remove-margin">{project.title}</h1>
    <div className="project-detail-intro-text mt-5">
      {project.intro.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  </div>
</div>
     {/* Images with captions */}
        {project.images.map((image, index) => (
          <div key={index}>
            {image.pair ? (
              // Side by side images
              <section className="project-detail-images-grid">
                <div className="project-detail-image-item">
                  <img src={image.src} alt="" />
                  <p className="image-caption">{image.caption}</p>
                </div>
                <div className="project-detail-image-item">
                  <img src={image.pair.src} alt="" />
                  <p className="image-caption">{image.pair.caption}</p>
                </div>
              </section>
            ) : (
              // Full width image
              <section className="project-detail-image-full">
                <img src={image.src} alt="" />
                <p className="image-caption">{image.caption}</p>
              </section>
            )}
          </div>
        ))}
 
      </main>
 
      <Footer />
    </div>
  );
}