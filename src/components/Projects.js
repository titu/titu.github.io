import ProjectCard from './ProjectCard';

/* eslint-disable no-unused-vars */
export default function Projects() {
  const imagePath = '../assets/projects';
  const projects = [
    {
      title: 'Paleo',
      imageDirName: 'paleo',
      thumb: '1.png',
      skills: ['React, Node.js, TypeScript, GraphQL'],
      database: 'PostgreSQL',
      description:
        'Paleo is targeting powering the B2B commerce. Paleo is a platform and technology for global trade. Paleo centralizes and connects product data and offers powerful trade tools to trade merchants, which powers the trading platform.      ',
      role: 'Senior Full-Stack Developer',
      url: 'https://axel-arigato.paleo-store.com/',
      images: [
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png',
        '10.png',
        '11.png',
        '12.png',
        '13.png'
      ]
    },
    {
      title: 'Paleo',
      imageDirName: 'paleo',
      thumb: '1.png',
      skills: ['React, Node.js, TypeScript, GraphQL'],
      database: 'PostgreSQL',
      description:
        'Paleo is targeting powering the B2B commerce. Paleo is a platform and technology for global trade. Paleo centralizes and connects product data and offers powerful trade tools to trade merchants, which powers the trading platform.      ',
      role: 'Senior Full-Stack Developer',
      url: 'https://axel-arigato.paleo-store.com/',
      images: [
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png',
        '10.png',
        '11.png',
        '12.png',
        '13.png'
      ]
    },
    {
      title: 'Paleo',
      imageDirName: 'paleo',
      thumb: '1.png',
      skills: ['React, Node.js, TypeScript, GraphQL'],
      database: 'PostgreSQL',
      description:
        'Paleo is targeting powering the B2B commerce. Paleo is a platform and technology for global trade. Paleo centralizes and connects product data and offers powerful trade tools to trade merchants, which powers the trading platform.      ',
      role: 'Senior Full-Stack Developer',
      url: 'https://axel-arigato.paleo-store.com/',
      images: [
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png',
        '10.png',
        '11.png',
        '12.png',
        '13.png'
      ]
    },
    {
      title: 'Paleo',
      imageDirName: 'paleo',
      thumb: '1.png',
      skills: ['React, Node.js, TypeScript, GraphQL'],
      database: 'PostgreSQL',
      description:
        'Paleo is targeting powering the B2B commerce. Paleo is a platform and technology for global trade. Paleo centralizes and connects product data and offers powerful trade tools to trade merchants, which powers the trading platform.      ',
      role: 'Senior Full-Stack Developer',
      url: 'https://axel-arigato.paleo-store.com/',
      images: [
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png',
        '10.png',
        '11.png',
        '12.png',
        '13.png'
      ]
    },
    {
      title: 'Paleo',
      imageDirName: 'paleo',
      thumb: '1.png',
      skills: ['React, Node.js, TypeScript, GraphQL'],
      database: 'PostgreSQL',
      description:
        'Paleo is targeting powering the B2B commerce. Paleo is a platform and technology for global trade. Paleo centralizes and connects product data and offers powerful trade tools to trade merchants, which powers the trading platform.      ',
      role: 'Senior Full-Stack Developer',
      url: 'https://axel-arigato.paleo-store.com/',
      images: [
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png',
        '10.png',
        '11.png',
        '12.png',
        '13.png'
      ]
    }
  ];
  return (
    <div id="projects" className="h-screen scroll-mt-16 px-8 snap-start">
      <div className="el-container">
        <h1 className="content-title">Projects</h1>
        <div className="pt-10 flex flex-wrap justify-center gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              title={project.title}
              thumb={`${imagePath}/${project.imageDirName}/${project.thumb}`}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
