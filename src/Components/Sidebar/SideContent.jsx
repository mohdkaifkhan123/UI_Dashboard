import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  TbDashboard,
  FaKeycdn,
  CgProductHunt,
  FaPeopleGroup,
  GiMoneyStack,
  AiOutlineStock,
  MdOutlineLiveHelp,
  AiFillCaretDown,
} from "../../Constants/Icons";
import "./SideContent.css";
import { useState, useEffect } from "react";

const SideContent = () => {
  const [collapse, setCollapse] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setCollapse(window.innerWidth <= 768);
      console.log("window.innerWidth: ", window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="sidebar-container">
      <Sidebar
        collapsed={collapse}
        backgroundColor="#040440"
        width="250px"
        height="100%"
      >
        <div
          className="header-text"
          style={{ display: "flex", alignItems: "center", marginLeft: "5%" }}
        >
          <TbDashboard
            className={`icon-header ${collapse ? "center" : ""}`}
            color="white"
            size={22}
          />
          {collapse ? null : (
            <p style={{ color: "white", marginLeft: "16px", fontSize: "25px" }}>
              Dashboard
            </p>
          )}
        </div>
        <Menu
          menuItemStyles={{
            button: ({ level }) => {
              if (level === 0 || level === 1)
                return {
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#2D2D69",
                  },
                };
            },
            subMenuContent: ({ level }) => ({
              backgroundColor: level === 0 ? "#040430" : "transparent",
              fontSize: "12px",
              margin: 10,
            }),
          }}
        >
          <MenuItem icon={<FaKeycdn color="white" size={18} />}>
            Dashboard
          </MenuItem>
          <SubMenu
            icon={<CgProductHunt color="white" size={20} />}
            label="Product"
          >
            <MenuItem> New Products </MenuItem>
            <MenuItem> Old Products </MenuItem>
          </SubMenu>
          <SubMenu
            label="Customers"
            icon={<FaPeopleGroup color="white" size={18} />}
          >
            <MenuItem> Existing Customers </MenuItem>
            <MenuItem> Guest List </MenuItem>
          </SubMenu>
          <SubMenu
            label="Income"
            icon={<GiMoneyStack color="white" size={18} />}
          >
            <MenuItem> Net Income </MenuItem>
            <MenuItem> Gross Income </MenuItem>
          </SubMenu>
          <SubMenu
            label="Promote"
            icon={<AiOutlineStock color="white" size={18} />}
          >
            <MenuItem> Flash Sales </MenuItem>
            <MenuItem> Upto Sales </MenuItem>
          </SubMenu>
          <SubMenu
            label="Help"
            icon={<MdOutlineLiveHelp color="white" size={18} />}
          >
            <MenuItem> FAQ </MenuItem>
            <MenuItem> Chat Support </MenuItem>
          </SubMenu>
        </Menu>
        <div className="sidebar-footer">
          {collapse ? (
            <img
              src="https://media.licdn.com/dms/image/D4E03AQFDoN0KGRkPOw/profile-displayphoto-shrink_800_800/0/1697146699820?e=1702512000&v=beta&t=wlG9oQ6LlI1OMJ27kX6lKkrdkIZex_t5S6zupAkh278"
              alt="Profile"
              className="profile-image"
            />
          ) : (
            <>
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.Z306v3XdxhOaxBFGfHku7wHaHw&pid=Api&P=0&h=220"
                alt="Profile"
                className="profile-image"
                style={{  marginTop:-1}}
              />
              <div className="profile-details">
                <div style={{ display: "flex" }}>
                  <h3>Mohd Kaif Khan</h3>
                  <AiFillCaretDown style={{ marginLeft: 12, marginTop: 3 }} />
                </div>
                <p>Frontend Developer</p>
              </div>
            </>
          )}
        </div>
      </Sidebar>
    </div>
  );
};

export default SideContent;
