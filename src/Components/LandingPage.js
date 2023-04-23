import React from "react";
// import { React, useState } from "react";
import Nav from "./Nav";
import ForegroundInterface from "./ForegroundInterface";

import { DialogueData } from "./data";


const LandingPage = () => {


  return (
    <div>
      <header>
        <h1 className="header">Visual Noval ReactJS</h1>
        <Nav />
      </header>

      <main>
        <ForegroundInterface data={DialogueData}/>
      </main>

      <footer className="contact" id="contact">
        <p>
          <strong>Email :</strong> tira.zzhang@gmail.com
        </p>
        <p>
          <strong>Phone :</strong> +1 (917) 402 - 8386
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
