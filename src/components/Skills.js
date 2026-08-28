import { Helmet } from 'react-helmet-async';
import skillsData from '../data/skills';
import SkillCard from './SkillCard';

export default function Skills() {
  const description =
    'Explore Abdullah Al Mohammad’s technical expertise across React, Node.js, TypeScript, Vue, MongoDB, PostgreSQL, GraphQL, and modern full-stack engineering.';

  return (
    <>
      <Helmet>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
      </Helmet>
      <section id="skills" className="pages" aria-labelledby="skills-title">
        <div className="el-container">
          <h2 id="skills-title" className="content-title">
            My Skills
          </h2>
          <div className="pt-10 flex flex-wrap justify-center gap-5">
            {skillsData.map((skill, index) => (
              <SkillCard title={skill.title} list={skill.list} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
