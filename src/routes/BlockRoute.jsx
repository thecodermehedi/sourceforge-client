import {Navigate} from "react-router-dom";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";
const BlockRoute = ({children}) => {
  const {user, isUserLoading} = useAuth();
  if (isUserLoading) {
    return <Loading />;
  }
  if (!isUserLoading && user?.email) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

export default BlockRoute;