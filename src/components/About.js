import aboutData from '../data/about';

export default function About() {
  return (
    <div id="about" className="h-screen scroll-mt-16 px-8 snap-start">
      <div className="el-container">
        <h1 className="content-title">About Me</h1>
        <div
          className="mt-10 description-text"
          dangerouslySetInnerHTML={{ __html: aboutData.text }}
        />
      </div>
    </div>
  );
}
