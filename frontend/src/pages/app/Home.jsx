import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="px-5 py-4 border-b border-neutral-800 flex items-center justify-between">
        <h1 className="text-lg font-semibold">SkillBoost</h1>
        <Link to="/app/profile" className="text-sm text-orange-500">Profile</Link>
      </div>

      <div className="flex-1 overflow-auto p-5 space-y-4">
        <h2 className="text-2xl">Welcome</h2>
        <p className="text-neutral-400 text-sm">Upload your resume to get tailored roles.</p>

        <Link to="/app/roles" className="block w-full text-center bg-orange-600 hover:bg-orange-700 transition rounded-lg py-3 text-sm">Explore Roles</Link>
      </div>

      <nav className="h-14 border-t border-neutral-800 grid grid-cols-3">
        <Link to="/app" className="flex items-center justify-center text-sm">Home</Link>
        <Link to="/app/roles" className="flex items-center justify-center text-sm">Roles</Link>
        <Link to="/app/profile" className="flex items-center justify-center text-sm">Profile</Link>
      </nav>
    </div>
  );
};

export default Home;


