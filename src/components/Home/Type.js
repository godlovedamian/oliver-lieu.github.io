import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full stack Developer",
          "MERN Stack Developer",
          "React and React frameworks",
          "Vue.js and Vue.js frameworks",
          "Laravel and CodeIgniter"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
