import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const Privateroute: React.FC<any> = ({ children }) => {
  const { currentUser } = useSelector((store: any) => store.user);
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Privateroute;
