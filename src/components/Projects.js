import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectCard from './ProjectCard';
import ProjectDialog from './ProjectDialog';
import projects from '../data/projects';

export default function Projects() {
  const imagePath = '../assets/projects';
  const [showDialog, setShowDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(false);
  const description =
    'Browse Abdullah Al Mohammad’s portfolio of web applications, SaaS platforms, product dashboards, and full-stack engineering projects across startups and enterprise products.';

  const onProjectClick = (index) => {
    setShowDialog(true);
    setSelectedProject(projects[index]);
  };
  const onProjectDialogClose = () => {
    setShowDialog(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Helmet>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
      </Helmet>
      <ProjectDialog
        showDialog={showDialog}
        onClose={onProjectDialogClose}
        selectedProject={selectedProject}
      />
      <section id="projects" className="pages" aria-labelledby="projects-title">
        <div className="el-container">
          <h2 id="projects-title" className="content-title">
            Projects
          </h2>
          <div className="pt-10 flex flex-wrap justify-center gap-3">
            {projects.map((project, index) => (
              <ProjectCard
                title={project.title}
                thumb={`${imagePath}/${project.imageDirName}/${project.thumb}`}
                key={index}
                index={index}
                onClick={onProjectClick}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
