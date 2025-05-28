import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  // Fetch projects from Node.js backend
  useEffect(() => {
    fetch('http://backendalb-694318972.eu-west-1.elb.amazonaws.co/api/projects')  // Replace with your actual backend ALB DNS
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Hi, I'm Manasa Nuvvala</h1>
        <p>Full Stack Developer | AWS Enthusiast</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a cloud-native full-stack developer with hands-on experience in deploying
          3-tier architectures on AWS using services like EC2, ALB, Route53, Aurora, and Auto Scaling.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>React, Node.js</li>
          <li>AWS: EC2, ALB, Route53, Aurora, Auto Scaling</li>
          <li>Docker, Git, Linux, MySQL</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {projects.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>📞 Phone: 9392501308</p>
        <p>📧 Email: <a href="mailto:manasaroyals01@gmail.com">manasaroyals01@gmail.com</a></p>
        <p>🔗 LinkedIn: <a href="https://linkedin.com/in/manasa-nuvvala-8359b2283" target="_blank" rel="noopener noreferrer">linkedin.com/in/manasa-nuvvala-8359b2283</a></p>

        <form method="POST" action="http://YOUR-BACKEND-ALB-DNS/api/contact"> {/* Replace with your actual backend DNS */}
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>© 2025 Manasa Nuvvala</p>
      </footer>
    </div>
  );
}

export default App;

