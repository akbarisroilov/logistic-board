import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import { RiExchangeDollarLine, RiLineChartLine, RiAdminLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { FaPowerOff, FaTruck } from "react-icons/fa";

const Navbar = () => {
  const [isMinimazed, setIsMinimazed] = useState(false);
  const navigate = useNavigate();

  const urls = [
    {
      title: "Overview",
      link: "/overview",
      icon: FaMapMarkedAlt,
    },
    {
      title: "Assets",
      link: "/assets?view=0",
      icon: FaTruck,
    },
    {
      title: "Users",
      link: "/users",
      icon: HiUsers,
    },
    {
      title: "Safety",
      link: "/safety?view=0",
      icon: RiExchangeDollarLine,
    },
  ];

  return (
    <div className="Side-bar d-flex flex-column flex-shrink-0 p-3 shadow-lg bg-body-tertiary">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        {/* <svg className="bi pe-none me-2" width="40" height="32">
          <use xlink:href="#bootstrap"></use>
        </svg> */}
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {urls.map((url, index) => {
          return (
            <li className="nav-item">
              <NavLink to={url.link} className="nav-link fuck" aria-current="page">
                <url.icon className="bi pe-none me-2" width="16" height="16" />
                {url.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
