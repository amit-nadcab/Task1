import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="text-white sticky-top" style={{ background: "#1b3179" }}>
        <div class="topbar">
          <div class="toggle">
            <ion-icon name="menu-outline"></ion-icon>
          </div>

          <div class=" bg-dark rounded-2 p-3 px-3">
            <div>Credit Balance: <span className="bg-white text-dark rounded-5 p-1 ms-2 px-3">1233131</span></div>
          </div>
          <div class="bg-dark rounded-2 p-3 px-3">
            <div>Debit Balance : <span className="bg-white text-dark rounded-5 p-1 ms-2 px-3">1233131</span></div>
          </div>
         
          
          {/* <div class="user">
            <div className='col-md-4'><div>Debit Balance</div></div>
            </div> */}
        </div>
      </div>
    </>
  );
}
