import ProfileInfo from "../../components/features/dashboard/ProfileInfo";
import UserJobs from "../../components/features/dashboard/UserJobs";

const Dashboard = () => {
  return (
    <main className="bg-slate-100 w-full h-screen grid lg:grid-cols-2 gap-6 p-10">
      <ProfileInfo />
      <UserJobs />
    </main>
  );
};

export default Dashboard;
