export default function SkillCard({ title, list }) {
  return (
    <div className="card skill-card">
      <div className="card-title">{title}</div>
      <ul className="">
        {list.map((listItem) => (
          <li>{listItem}</li>
        ))}
      </ul>
    </div>
  );
}
