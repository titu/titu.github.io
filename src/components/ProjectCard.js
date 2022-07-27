export default function ProjectCard({ title, thumb, onClick, index }) {
  const onProjectClick = () => {
    onClick(index);
  };
  return (
    <div className="project-card">
      <div className="img_holder">
        <img
          className="max-h-[160px] w-full sm:flex-shrink-0 bg-[#F5F5F5] object-cover"
          src={thumb}
          alt="Profile"
          onClick={onProjectClick}
        />
      </div>
      <div className="font-semibold text-base pt-1">{title}</div>
    </div>
  );
}
