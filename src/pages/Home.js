import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { GitHubCalendar } from 'react-github-calendar';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    setIsDarkMode(document.documentElement.classList.contains('dark'));

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);
  const skills = [
    { 
      name: "TypeScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      url: "https://www.typescriptlang.org/"
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    { 
      name: "Python", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      url: "https://www.python.org/"
    },

    { 
      name: "Java", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      url: "https://www.oracle.com/java/"
    },
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      url: "https://react.dev/"
    },
    { 
      name: "React Native", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      url: "https://reactnative.dev/"
    },
    { 
      name: "Vue.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      url: "https://vuejs.org/"
    },
    { 
      name: "Next.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      url: "https://nextjs.org/"
    },
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      url: "https://nodejs.org/"
    },
    { 
      name: "Express.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      url: "https://expressjs.com/"
    },
    { 
      name: "FastAPI", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      url: "https://fastapi.tiangolo.com/"
    },
    { 
      name: "MySQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      url: "https://www.mysql.com/"
    },
    { 
      name: "PostgreSQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      url: "https://www.postgresql.org/"
    },
    { 
      name: "MongoDB", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      url: "https://www.mongodb.com/"
    },
    { 
      name: "Microsoft SQL Server", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      url: "https://www.microsoft.com/en-us/sql-server"
    },
    { 
      name: "Docker", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      url: "https://www.docker.com/"
    },
    { 
      name: "Kubernetes", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
      url: "https://kubernetes.io/"
    },
    { 
      name: "AWS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      url: "https://aws.amazon.com/"
    },
    { 
      name: "Firebase", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
      url: "https://firebase.google.com/"
    },
    { 
      name: "Terraform", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
      url: "https://www.terraform.io/"
    },
    { 
      name: "Git", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      url: "https://git-scm.com/"
    },
   
    { 
      name: "Android Studio", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
      url: "https://developer.android.com/studio"
    },
    { 
      name: "Xcode", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg",
      url: "https://developer.apple.com/xcode/"
    }
  ];

  return (
    <Layout>
      <h1 >Hello.</h1>
      <p>
        Software Engineer with 2 years of experience delivering enterprise
        solutions for Fortune 500 clients at Capgemini. Currently pursuing a
        Master's in Software Engineering at the University of Maryland.
        Proficient in building scalable web applications using TypeScript,
        Python, and React, with a strong focus on clean code and system
        architecture and yes, I can center a div on the first try.
      </p>

      <p>
        You can find me on{' '}
        <a href="https://www.linkedin.com/in/rohithknair27/">Linkedin</a> and{' '}
        <a href="https://github.com/RohithNair27">GitHub</a>.
      </p>

      <h2>Stack</h2>
      <div className="skills-stack">
        <div className="skills-container">
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-icon"
              title={skill.name}
            >
              <img
                src={skill.icon}
                alt={skill.name}
              />
            </a>
          ))}
        </div>
      </div>

      {/* <h2>Contributions</h2>
     
        <GitHubCalendar 
          username="RohithNair27"
          hideColorLegend
          hideMonthLabels
          // hideTotalCount
          fontSize={12}
          blockSize={12}
          blockMargin={2}
          theme={{
            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
          }}
          colorScheme={isDarkMode ? 'dark' : 'light'}
        />
        <p className="contributions-note">
          <a href="https://github.com/RohithNair27" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
      */}
     

      <h2>Selected Projects</h2>
      <ul>
        <li>
          <a href="https://github.com/GIND123/Yelp-AI">Yelp-AI</a> -
          Multi-agent visual review analysis.
        </li>
        <li>
          <a href="https://github.com/RohithNair27/Native-audio">Native Audio</a> -
          Lightweight React Native music app.
        </li>
        <li>
          <a href="https://github.com/RohithNair27/Beam">Beam</a> -
          Contactless identity sharing.
        </li>
      </ul>
    </Layout>
  );
};

export default Home;