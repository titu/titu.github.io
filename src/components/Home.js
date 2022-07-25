import profileImage from '../assets/images/titu.png';

export default function Home() {
  return (
    <div id="home" className="scroll-mt-16 px-8 snap-start">
      <div className="h-screen el-container flex items-center">
        <div className="w-2/4 flex justify-center align-middle">
          <div>
            <p className="text-lg text-cyan-900 font-medium uppercase">
              Hello, I'm
            </p>
            <p className="mt-8 text-4xl font-semibold text-cyan-900 uppercase">
              Abdullah Al Mohammad
            </p>
            <p className="mt-8 text-sm text-cyan-900 uppercase">
              A Computer Engineer and working as a Senior Full-Stack Developer
            </p>
          </div>
        </div>
        <div className="w-2/4 flex justify-center">
          <img
            className="h-96 sm:flex-shrink-0 duration-500 hover:scale-105 rounded-lg bg-[#F5F5F5] shadow-lg shadow-cyan-900"
            src={profileImage}
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}
