import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-300">
      <div className="footer-container h-20 flex justify-between w-5/6 lg:w-1/2 mx-auto items-center">
        <h1 className="text-3xl heading-font text-white">the Generics</h1>
        <div className="icon-container flex">
          <img src="images/icons/fb.png" alt="" className="w-10 mx-3" />
          <img src="images/icons/spotify.png" alt="" className="w-10 mx-3" />
          <img src="images/icons/yt.png" alt="" className="w-10 mx-3" />
        </div>
      </div>
    </footer>
  );
}
