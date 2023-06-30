import React, { useEffect } from "react";
import { RxDashboard } from "react-icons/rx";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <section className="bg-white flex items-center justify-between px-12 py-4 h-[10vh]">
        <div className="flex items-center gap-4">
          <RxDashboard />
          <h1 className="text-xl font-semibold">Jira Work Management</h1>
        </div>
        <div className="flex items-center gap-4">
          <button>Create</button>
          <input
            className="border border-bluish p-2 rounded focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div>
          <Avatar
            sx={{
              cursor: "pointer",
              bgcolor: deepPurple[500],
              height: "30px",
              width: "30px",
            }}
            onClick={handleClick}
          >
            M
          </Avatar>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar
                sx={{
                  cursor: "pointer",
                  bgcolor: deepPurple[500],
                  height: "30px",
                  width: "30px",
                }}
                onClick={handleClick}
              >
                M
              </Avatar>
              <p>{}</p>
            </MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </section>
    </>
  );
};

export default Topbar;
