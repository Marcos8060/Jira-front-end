import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

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
      <section className="bg-white flex items-center justify-between px-4 py-4 h-[10vh]">
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
          {/* <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Dashboard
          </Button> */}
          <Avatar sx={{cursor:'pointer'}} onClick={handleClick}>H</Avatar>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </section>
    </>
  );
};

export default Topbar;
