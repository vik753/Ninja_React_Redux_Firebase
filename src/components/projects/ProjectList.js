import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
    const allProjects = projects && projects.map(project => (
        <ProjectSummary project={project} key={project.id} />
    ));
    return (
        <div className="project-list section">
            {allProjects}
        </div>
    );
}

export default ProjectList;