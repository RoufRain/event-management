import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const EventDetails = ({ children }) => {
  const { user } = useContext(AuthContext);

  //  after login route does not move anywhere , so this function move route to its destination

  const location = useLocation();
  console.log(location.pathname);

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default EventDetails;
