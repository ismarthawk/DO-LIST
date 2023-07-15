import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Stack,
} from "@mui/material";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const { user, logout } = useContext(AuthContext);
  // console.log(user);

  const handleClose = () => setAnchorEl(null);
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            padding: 1,
          }}
        >
          <IconButton color="inherit" size="large">
            <TaskAltIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
            }}
          >
            D0 / LIST
          </Typography>
          {user && (
            <Stack>
              <IconButton
                id="avatar-button"
                aria-haspopup={true}
                aria-controls={menuOpen ? true : undefined}
                aria-expanded={menuOpen ? true : undefined}
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                <Avatar src={user.photoURL} />
              </IconButton>
              <Typography variant="body1">{user.displayName}</Typography>
            </Stack>
          )}
          <Menu
            onClose={handleClose}
            anchorEl={anchorEl}
            open={menuOpen}
            MenuListProps={{
              "aria-labelledby": "avatar-button",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                logout();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
