import profileImage from '../assets/images/titu.png';

export default function Home() {
  return (
    <div
      id="home"
      className="scroll-mt-16 px-8 snap-start"
    >
      <div className="h-screen el-container sm:flex items-center">
        <div className="w-2/4 flex justify-center align-middle">
          <div>
            <p className="text-lg text-slate-500 font-medium uppercase">
              Hello, I'm
            </p>
            <p className="mt-8 text-4xl font-semibold text-gray-500 uppercase">
              Abdullah Al Mohammad
            </p>
            <p className="mt-8 text-sm text-slate-500 uppercase">
              A Computer Engineer and working as a Senior Full-Stack Developer
            </p>
          </div>
        </div>
        <div className="w-2/4 flex justify-center">
          <img
            className="h-96 sm:flex-shrink-0 duration-500 hover:scale-105 grayscale rounded-lg bg-[#F5F5F5]"
            src={profileImage}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}

/* export default function Home() {
  return (
    <div id="home" className="h-screen scroll-mt-16 sm:flex sm:items-center">
      <div className="w-2/4 flex justify-center align-middle">
        <div>
          <p className="text-lg text-slate-500 font-medium uppercase">Hello, My Name is</p>
          <p className="mt-8 text-4xl font-semibold text-gray-500 uppercase">
            Abdullah Al Mohammad
          </p>
          <p className="mt-8 text-sm text-slate-500 uppercase">
            I'm A Computer Engineer and working as a Senior Full-Stack Developer
          </p>
        </div>
      </div>
      <div className="w-2/4 flex justify-center">
        <div>
          <img
          className="h-full sm:flex-shrink-0 duration-500 hover:scale-105 grayscale rounded-lg bg-[#F5F5F5]"
          src={profileImage}
          alt="Profile"
        />
        </div>
      </div>
    </div>
  );
} */
