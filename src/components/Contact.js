export default function Contact() {
  const onEmailClick = () => {
    window.open('mailto:email.to.titu@gmail.com', '_blank');
  };
  const onHireMeClick = () => {
    window.open(
      'https://www.upwork.com/freelancers/abdullahalmohammad',
      '_blank'
    );
  };

  return (
    <div id="contact" className="h-screen scroll-mt-16 px-8 snap-start">
      <div className="el-container">
        <h1 className="pt-8 text-4xl font-semibold text-gray-500 uppercase">
          Get In Touch
        </h1>
        <p className="description-text pt-10">
          Hi! Please do not hesitate to contact me. Feel free to reach me
          directly any time by email at email.to.titu@gmail.com
        </p>
        <div>
          <button className="icon-button mail-button" onClick={onEmailClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="pl-3"> Email Me</span>
          </button>
          <button className="icon-button hireme-button" onClick={onHireMeClick}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              stroke="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
            </svg>

            <span className="pl-3"> Hire Me</span>
          </button>
        </div>
      </div>
    </div>
  );
}
