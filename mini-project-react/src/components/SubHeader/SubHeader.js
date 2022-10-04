import { NavLink } from "react-router-dom";
import "./subHeader.scss";

const SubHeader = ({ items }) => {
  return (
    <div className="sub-header">
      {items?.map((item) => (
        <NavLink key={item.to} className="sub-header-item" to={item.to} end>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default SubHeader;
