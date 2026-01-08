import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" }
      ]
    },
    {
      category: "Frameworks",
      items: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
        { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/amazonaws.svg", style: { filter: 'brightness(0.8)' } },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" }
      ]
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

      <h2>Skills</h2>
      <ul>
        {skills.map((skillGroup, index) => (
          <li key={index}>
            <div className="logo-container">
              <span className="category-label">{skillGroup.category}</span>
              <div className="skills-list">
                {skillGroup.items.map((skill, skillIndex) => (
                  <section key={skillIndex} className="logo-box">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      style={skill.style || {}}
                    />
                    <p>{skill.name}</p>
                  </section>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>

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