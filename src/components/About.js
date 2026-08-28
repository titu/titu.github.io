import { Helmet } from 'react-helmet-async';
import aboutData from '../data/about';

export default function About() {
  const description =
    'Abdullah Al Mohammad is a Senior Full-Stack Developer with 15+ years of experience building scalable web applications, product platforms, and digital experiences.';

  return (
    <>
      <Helmet>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
      </Helmet>
      <section id="about" className="pages" aria-labelledby="about-title">
        <div className="el-container">
          <h2 id="about-title" className="content-title">
            About Me
          </h2>
          <div
            className="mt-10 description-text"
            dangerouslySetInnerHTML={{ __html: aboutData.text }}
          />
        </div>
      </section>
    </>
  );
}
