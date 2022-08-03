import homeData from '../data/home';

export default function Home() {
  return (
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
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
}
