import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDialog from './ProjectDialog';
import projects from '../data/projects';

export default function Projects() {
  const imagePath = '../assets/projects';
  const [showDialog, setShowDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState(false);
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
      <ProjectDialog
        showDialog={showDialog}
        onClose={onProjectDialogClose}
        selectedProject={selectedProject}
      />
      <div id="projects" className="h-screen scroll-mt-16 px-8 snap-start">
        <div className="el-container">
          <h1 className="content-title">Projects</h1>
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
      </div>
    </>
  );
}
