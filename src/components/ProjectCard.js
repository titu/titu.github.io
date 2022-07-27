export default function ProjectCard({ title, thumb, onClick, index }) {
  const onProjectClick = () => {
    onClick(index);
  };
  return (
    <div className="project-card">
      <div className="img_holder">
        <img
          className="h-30 sm:flex-shrink-0 rounded-lg bg-[#F5F5F5]"
          src={thumb}
          alt="Profile"
          onClick={onProjectClick}
        />
      </div>
      <div className="card-title py-3">{title}</div>
    </div>
  );
}
