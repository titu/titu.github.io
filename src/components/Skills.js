import SkillCard from './SkillCard';

export default function Skills() {
  const skills = [
    {
      title: 'Front-End',
      list: [
        '- React.js, React Native',
        '- Vue.js, Vuex, Vuetify.js, Nuxt.js',
        '- Angular, AngularJS, NgRx, RxJS',
        '- JavaScript, ES 6+',
        '- TypeScript',
        '- GraphQL',
        '- JQuery',
        '- Firebase',
        '- BackboneJS, Sencha ExtJS',
        '- WebSocket, Socket.IO',
        '- D3.js',
        '- Google Maps, ESRI, OpenLayers',
        '- Google Material, Bootstrap',
        '- HTML 5, CSS3, Sass/Less, Tailwind CSS'
      ]
    },
    {
      title: 'Back-End',
      list: [
        '- Node.js, Express, Sails, Hapi',
        '- AWS S3, EC2, Lambda',
        '- Socket.IO',
        '- GraphQL',
        '- Mongoose, Sequelize'
      ]
    },
    {
      title: 'Database',
      list: [
        '- PostgreSQL, MSSQL, MySQL',
        '- Firebase, firestore, MongoDB, Redis'
      ]
    },
    {
      title: 'API Integration',
      list: ['- Quickbook', '- Facebook', '- Dropbox']
    },
    {
      title: 'Others',
      list: [
        '- TravisCI, Netlify',
        '- Agile, Scrum',
        '- Github, GitLab, BitBucket',
        '- Asana, Trello, Jira',
        '- Basic Photoshop'
      ]
    }
  ];
  return (
    <div id="skills" className="h-screen scroll-mt-16 px-8 snap-start">
      <div className="el-container">
        <h1 className="content-title">My Skills</h1>
        <div className="pt-10 flex flex-wrap justify-center gap-5">
          {skills.map((skill) => (
            <SkillCard title={skill.title} list={skill.list} />
          ))}
        </div>
      </div>
    </div>
  );
}
