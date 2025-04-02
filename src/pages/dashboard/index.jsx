import { useAuth } from "../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <h4>{user?.fullName}</h4>
    </div>
  );
};

export default Dashboard;
