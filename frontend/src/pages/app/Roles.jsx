import { Link } from "react-router-dom";

const mockedRoles = [
  { id: 1, title: "Frontend Developer", company: "TechNova", match: 92 },
  { id: 2, title: "Backend Engineer", company: "DataSphere", match: 88 },
  { id: 3, title: "Full-Stack Developer", company: "CloudCraft", match: 85 },
];

const Roles = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="px-5 py-4 border-b border-neutral-800 flex items-center justify-between">
        <Link to="/app" className="text-sm">Back</Link>
        <h1 className="text-lg font-semibold">Recommended Roles</h1>
        <div />
      </div>

      <div className="flex-1 overflow-auto p-5 space-y-3">
        {mockedRoles.map((role) => (
          <div key={role.id} className="border border-neutral-800 rounded-lg p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">{role.title}</p>
              <p className="text-xs text-neutral-400">{role.company}</p>
            </div>
            <span className="text-xs bg-neutral-800 rounded px-2 py-1">{role.match}% match</span>
          </div>
        ))}
      </div>

      <nav className="h-14 border-t border-neutral-800 grid grid-cols-3">
        <Link to="/app" className="flex items-center justify-center text-sm">Home</Link>
        <Link to="/app/roles" className="flex items-center justify-center text-sm">Roles</Link>
        <Link to="/app/profile" className="flex items-center justify-center text-sm">Profile</Link>
      </nav>
    </div>
  );
};

export default Roles;


