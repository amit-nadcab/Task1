import { IconButton } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <>
      <div className="text-white sticky-top bg-blue-any">
        <div className="topbar">
          <div className="toggle">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            // onClick={handleDrawerOpen}
            edge="start"
            // sx={{
            //   marginRight: 5,
            //   ...(open && { display: 'none' }),
            // }}
          >
            <MenuIcon />
          </IconButton>
          </div>

          {/* <div className=" bg-dark rounded-2 p-3 px-3">
            <div>
              Credit Balance:{" "}
              <span className="bg-white text-dark rounded-5 p-1 ms-2 px-3">
                1233131
              </span>
            </div>
          </div>
          <div className="bg-dark rounded-2 p-3 px-3">
            <div>
              Debit Balance :{" "}
              <span className="bg-white text-dark rounded-5 p-1 ms-2 px-3">
                1233131
              </span>
            </div>
          </div> */}

          {/* <div className="user">
            <div className='col-md-4'><div>Debit Balance</div></div>
            </div> */}
        </div>
      </div>
    </>
  );
}
