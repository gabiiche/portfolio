import { useParams, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import InternalNavigation from "../components/InternalNavigation"; 
import "../styles/project-detail.css";

import nationalhighwayHero from "../assets/nh/mock-phone-solo.png";
import nationalhighwayDesktop from "../assets/nh/desktop-screens.png";
import nationalhighwayDesignSystem from "../assets/nh/design-system.webp";
import nationalhighwayPhoneHand from "../assets/nh/phpne-hand.png";
import nationalhighwayMultiScreen from "../assets/nh/mock-up-multiple.png";

import ballantinesHero from "../assets/ballantines/mock-phone-solo.png";
import ballantinesDesktop from "../assets/ballantines/desktop-screens.png";
import ballantinesDesignSystem from "../assets/ballantines/design-system.webp";
import ballantinesPhoneHand from "../assets/ballantines/phpne-hand.png";
import ballantinesMultiScreen from "../assets/ballantines/mock-up-multiple.png";

import ecobeatHero from "../assets/ecobeat/mock-phone-solo.png";
import ecobeatDesktop from "../assets/ecobeat/desktop-screens.png";
import ecobeatDesignSystem from "../assets/ecobeat/design-system.png";
import ecobeatPhoneHand from "../assets/ecobeat/phpne-hand.png";
import ecobeatMultiScreen from "../assets/ecobeat/mock-up-multiple.png";

import mysteryHero from "../assets/mg/visit-card.png";
import mysteryDesktop from "../assets/mg/instagram.png";
import mysteryDesignSystem from "../assets/mg/michelin.png";
import mysteryPhoneHand from "../assets/mg/showcase-1.png";
import mysteryMultiScreen from "../assets/mg/showcase-2.png";

import dynamicHero from "../assets/dy/mock-phone-solo.png";
import dynamicDesktop from "../assets/dy/desktop-screens.png";
import dynamicDesignSystem from "../assets/dy/mock-up-2.png";
import dynamicPhoneHand from "../assets/dy/phpne-hand-1.png";
import dynamicMultiScreen from "../assets/dy/phpne-hand-2.png";

const PROJECTS_LIST = [
  "national-highways",
  "ballantines",
  "ecobeat",
  "mystery-guest",
  "dynamic-jeunes"
];

const PROJECTS_DATA = {
    "national-highways": {
    title: "National Highways",
    heroImage: nationalhighwayHero,
    intro: "National Highways wanted to refresh the UX and UI of four key pages, bringing a more modern, editorial feel to the experience. Working at Oliver, an in-house agency model, I was on the project from start to finish. The client gave us more flexibility this time, on both the UX and the branding, guided by moodboards rather than strict guidelines, which left real room for design decisions.\n\nI designed all four pages, collaborating closely with the UX designer to question and improve the wireframes. I built the prototype, contributed to the design system, and prepared the developer documentation. In the lead designer's absence, I handled the design production autonomously. Accessibility was a strict requirement across all of Oliver's work, and every component was designed to meet it.",
    images: [
      {
        src: nationalhighwayDesktop,
        caption: "Desktop — support and contact page."
      },
      {
        src: nationalhighwayDesignSystem,
        caption: "design system — components and states.",

      },
      {
        src: nationalhighwayPhoneHand,
        caption: "mobile — travel updates page.",
        pair: {
          src: nationalhighwayMultiScreen,
          caption: ""
        }
      }
    ]
  },
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
        src: ballantinesDesignSystem,
        caption: "design system — components and states.",

      },
      {
        src: ballantinesPhoneHand,
        caption: "mobile — product details page.",
        pair: {
          src: ballantinesMultiScreen,
          caption: ""
        }
      }
    ]
  },
  "ecobeat": {
    title: "Ecobeat",
    heroImage: ecobeatHero,
    intro: "Ecobeat is an AI-powered environmental monitoring product by Highline Global, the agency where I worked before Oliver. Its connected pods track electricity, water, temperature and more across a client's locations, helping businesses like hotels cut resource waste.\n\nAs the only designer in the agency, I rethought the product beyond its UX and UI. The app showed raw numbers with nothing to compare them against, so I restructured the dashboard and reworked its sections to give the data meaning: clear savings and alerts views, reports translating consumption into money saved or lost, comparisons between locations, and tips based on their records. I built the design system and prototype, and presented the work to the leadership.",
    images: [
      {
        src: ecobeatDesktop,
        caption: "Desktop — Alerts page."
      },
      {
        src: ecobeatDesignSystem,
        caption: "design system — components and states.",

      },
      {
        src: ecobeatPhoneHand,
        caption: "mobile — Dashboard page.",
        pair: {
          src: ecobeatMultiScreen,
          caption: ""
        }
      }
    ]
  },
    "mystery-guest": {
    title: "Mystery Guest",
    heroImage: mysteryHero,
    intro: "Mystery Guest is a hotel rating service, evaluating hospitality the way Michelin stars evaluate restaurants: anonymous visits, graded results. At Highline Global, I was asked to build its visual identity from scratch.\n\nI explored multiple logo directions across several presentations before landing on the mask, a mark that became the heart of the whole system, from the app icon to the rating scale itself, one mask to five. From there I built the full brand book, defining how the identity lives everywhere from typography and colour to photography and social media, with concepts presented as options and refined through the founder's feedback, round after round.",
    images: [
      {
        src: mysteryDesktop,
        caption: "mock up — instagram."
      },
      {
        src: mysteryDesignSystem,
        caption: "concept — rating system.",

      },
      {
        src: mysteryPhoneHand,
        caption: "mock up — primary and secondary logo.",
        pair: {
          src: mysteryMultiScreen,
          caption: ""
        }
      }
    ]
  },
      "dynamic-jeunes": {
    title: "Dynamic Jeunes",
    heroImage: dynamicHero,
    intro: "Dynamic Jeunes is an association in Meaux offering activities for young people, from tutoring to sports. As my Master's graduation project, our team was tasked with delivering their first proper website: a place to present their activities and capture course sign-ups, built on WordPress so the association could manage it themselves.\n\nI led the project, managing communication between the team and the client and organising the team's workload. Beyond the lead role, I contributed hands-on at every stage: the UX research, running the user questionnaire and turning its analysis into wireframes, the branding, the UI and the prototype in Figma. I then moved to the build, coding both the front end and the back end of the WordPress site.",
    images: [
      {
        src: dynamicDesktop,
        caption: "desktop — home page."
      },
      {
        src: dynamicDesignSystem,
        caption: "mobile — atelier image et video page and form.",

      },
      {
        src: dynamicPhoneHand,
        caption: "behind the scenes — PHP code and UX research.",
        pair: {
          src: dynamicMultiScreen,
          caption: ""
        }
      }
    ]
  },

};

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = PROJECTS_DATA[slug];

  const currentIndex = PROJECTS_LIST.indexOf(slug);
  
  const nextProject = currentIndex < PROJECTS_LIST.length - 1 
    ? PROJECTS_LIST[currentIndex + 1] 
    : null;
  
  const nextProjectData = nextProject ? PROJECTS_DATA[nextProject] : null;

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
    <div className="">
      <Nav />

<div className="container-fluid">
  <div className="align-items-center row">
    <div className="d-xl-block col-xxl-5 col-xl-5 d-lg-none">
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
</div>
<main className="project-detail-main">
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

       <InternalNavigation 
        nextProjectName={nextProjectData?.title}
        nextProjectLink={nextProject ? `/projects/${nextProject}` : undefined}
        onBackClick={() => navigate('/projects')}
      />
 
      <Footer />
    </div>
  );
}