import {Navigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";

const PrivateRoute = ({children}) => {
  const {user, isUserLoading} = useAuth();
  const location = useLocation();
  if (isUserLoading) {
    return <Loading />;
  }
  if (!isUserLoading && !user?.email) {
    return <Navigate state={location.pathname} to="/auth/login" replace />;
  }
  return children;
};

export default PrivateRoute;