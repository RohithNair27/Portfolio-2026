import Layout from '../components/Layout';
import VideoPlayer from '../components/VideoPlayer';

const Projects = () => {
  const projects = [
    {
      video: "/assets/Test.mov",
      poster: "https://placehold.co/600x400/222/222",
      content: "WTF (Where's The Food)",
      features:["🤖 Computer vision + LLM reasoning","Agent-driven dining verdict","Multi-Step Agentic Reasoning"],
      category: "AI/Machine learning",
      date: "Dec 15, 2025",
      githubUrl: "https://github.com/GIND123/WTF",
    },
    {
      video: "/assets/Portfolio.mov",
      poster: "https://placehold.co/600x400/222/222",
      content: "The Portfolio website 🤩",
      category: "Web development",
      date: "Dec 20, 2026",
      githubUrl: "https://github.com/yourusername/picture-in-picture-demo",
    },
    {
      video: "/assets/native_player.mov",
      poster: "https://placehold.co/600x400/222/222",
      content: "Native Music Player 🎸",
      // features: ["Real-time reflection", "Wave simulation"],
      category: "Mobile development",
      date: "Mar 10, 2025",
      githubUrl: "https://github.com/RohithNair27/Native-audio",
    },
    {
      video: "/assets/Agent_news.mov",
      poster: "https://placehold.co/600x400/222/222",
      content: "Agentic News APP 📰",
      features: ["Agentic news", "Ai summaries"],
      category: "AI/Machine learning",
      date: "Jan 5, 2026",
      githubUrl: "https://github.com/RohithNair27/Google-gemini-NewsAgent",
    },
    {
      video: "",
      poster: "/assets/image.png",
      content: "Beam ☎️",
      category: "Mobile development",
      
      date: "Feb 15, 2023",
      githubUrl: "https://github.com/RohithNair27/Beam",
    },
   {
  video: "/assets/JavaScript-router-core.mov",
  poster: "/assets/image.png",
  content: "Vanilla JS Router Core ⚡",
  category: "Web Development",
  features: ["History API", "SPA Routing"],
  date: "Jan 08, 2025",
  githubUrl: "https://github.com/RohithNair27/Js-Router-Core",
},
   
  ];

  // Sort projects by date (latest first)
  const sortedProjects = [...projects].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  // No useEffect needed - using pure CSS animations

  return (
    <Layout className="projects-page">
      <section className="demos-section">
        <h2 className="animate-in" style={{ animationDelay: '0s' }}>Projects</h2>
        <p className="animate-in" style={{ animationDelay: '0.1s' }}>List of projects that I made outisde of work.</p>
        <div className="demos-grid">
          {sortedProjects.map((project, index) => (
            <a 
              key={index} 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card demo-card animate-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="demo-media">
                {project.video ? (
                  <VideoPlayer
                    src={project.video}
                    poster={project.poster}
                    alt={project.content}
                  />
                ) : (
                  <img 
                    src={project.poster} 
                    alt={project.content}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
              </div>
              <div className="demo-content">
                <p>{project.content}</p>
                {project.features && (
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                )}
                <div className="demo-meta">
                  <span>{project.category}</span>
                  <span className="separator">·</span>
                  <span>{project.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;