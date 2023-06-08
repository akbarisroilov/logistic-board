import { Route, Routes, Navigate } from "react-router-dom";
import { ROLES } from "./constants/constants";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Unauthorized from "./components/Unauthorized";
import Missing from "./components/Missing";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<Navigate to="/login" />} />

      {/* protected routes */}
      <Route path="/" element={<Layout />}>
        <Route element={<RequireAuth allowedRoles={[ROLES.Owner, ROLES.Admin, ROLES.Dispatcher, ROLES.Updater, ROLES.Accountant, ROLES.Developer, ROLES.Fleet_manager, ROLES.Safety_manager]} />}>
          <Route path="/overview" element={<h1>hello home</h1>} />
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
