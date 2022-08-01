import skillsData from '../data/skills';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <div id="skills" className="h-screen scroll-mt-16 px-8 snap-start">
      <div className="el-container">
        <h1 className="content-title">My Skills</h1>
        <div className="pt-10 flex flex-wrap justify-center gap-5">
          {skillsData.map((skill, index) => (
            <SkillCard title={skill.title} list={skill.list} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
