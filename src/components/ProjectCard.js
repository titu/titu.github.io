import { useState } from 'react';
import Placeholder from './Placeholder';

export default function ProjectCard({ title, thumb, onClick, index }) {
  const [loading, setLoading] = useState(true);

  const onProjectClick = () => {
    onClick(index);
  };
  return (
    <div className="project-card">
      <div className="img_holder md:h-[120px] items-center justify-center flex">
        {loading && <Placeholder />}
        <img
          style={{ display: loading ? 'none' : 'block' }}
          className="md:h-[120px] w-full sm:flex-shrink-0 bg-[#F5F5F5] object-cover"
          src={thumb}
          alt="Profile"
          onClick={onProjectClick}
          onLoad={() => setLoading(false)}
        />
      </div>
      <div className="font-semibold text-base pt-1">
        {loading ? '...' : title}
      </div>
    </div>
  );
}
