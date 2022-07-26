export default function ProjectCard({ title, thumb }) {
  console.log(title, thumb);

  return (
    <div className="project-card">
      <div className="img_holder">
        <img
          className="h-30 sm:flex-shrink-0 rounded-lg bg-[#F5F5F5]"
          src={thumb}
          alt="Profile"
        />
      </div>
      <div className="card-title py-3">{title}</div>
    </div>
  );
}
