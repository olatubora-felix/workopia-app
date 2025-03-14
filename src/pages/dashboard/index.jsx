import { useAuth } from "../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <h4>{user?.username}</h4>
    </div>
  );
};

export default Dashboard;
