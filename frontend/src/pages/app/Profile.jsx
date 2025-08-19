import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="px-5 py-4 border-b border-neutral-800 flex items-center justify-between">
        <Link to="/app" className="text-sm">Back</Link>
        <h1 className="text-lg font-semibold">Profile</h1>
        <div />
      </div>

      <div className="flex-1 overflow-auto p-5 space-y-4">
        <div className="space-y-2">
          <label className="text-xs text-neutral-400">Name</label>
          <input className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm" defaultValue="John Doe" />
        </div>
        <div className="space-y-2">
          <label className="text-xs text-neutral-400">Email</label>
          <input className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm" defaultValue="john@example.com" />
        </div>
        <button className="w-full bg-orange-600 hover:bg-orange-700 transition rounded-lg py-3 text-sm">Save</button>
      </div>

      <nav className="h-14 border-t border-neutral-800 grid grid-cols-3">
        <Link to="/app" className="flex items-center justify-center text-sm">Home</Link>
        <Link to="/app/roles" className="flex items-center justify-center text-sm">Roles</Link>
        <Link to="/app/profile" className="flex items-center justify-center text-sm">Profile</Link>
      </nav>
    </div>
  );
};

export default Profile;


