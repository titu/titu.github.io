import homeData from '../data/home';
import { Helmet } from 'react-helmet-async';
import contactData from '../data/contact';

export default function Home() {
  const siteUrl = 'https://titu.github.io';
  const title = `${homeData.name} — ${homeData.whatIDo}`;
  const description =
    'Senior Full-Stack Developer (React, TypeScript, Node.js). 15+ years building SaaS, dashboards, and product-grade web apps.';

  const personStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: homeData.name,
    url: siteUrl,
    jobTitle: 'Senior Full-Stack Developer',
    description: homeData.whatIDo,
    sameAs: [contactData.linkedIn, contactData.github, contactData.upwork],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: contactData.email,
        contactType: 'professional'
      }
    ]
  };

  const webSiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: homeData.name,
    url: siteUrl,
    sameAs: [contactData.linkedIn, contactData.github]
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="Senior Full-Stack Developer, TypeScript, React, Node.js, Freelance, SaaS" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/assets/images/profile.png`} />
        <script type="application/ld+json">{JSON.stringify(personStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(webSiteStructuredData)}</script>
      </Helmet>

      <div id="home" className="pages">
        <div className="h-screen el-container sm:flex items-center">
          <div className="w-full pt-20 sm:pt-5 sm:w-2/4 flex justify-center align-middle">
            <div>
              <p className="text-lg text-cyan-900 font-medium uppercase">
                {homeData.greetings}
              </p>
              <p className="mt-8 text-4xl font-semibold text-cyan-900 uppercase">
                {homeData.name}
              </p>
              <p className="mt-8 text-sm text-cyan-900 uppercase">
                {homeData.whatIDo}
              </p>
            </div>
          </div>
          <div className="w-full sm:w-2/4 flex justify-center">
            <img
              className="max-w-[250px] sm:max-w-xs sm:ml-5 mt-5 flex-shrink-0 duration-500 hover:scale-105 rounded-lg bg-[#F5F5F5] shadow-lg shadow-cyan-900"
              src="../assets/images/profile.png"
              alt={homeData.name}
            />
          </div>
        </div>
      </div>
    </>
  );
}
