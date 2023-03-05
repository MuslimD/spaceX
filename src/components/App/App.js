import React, { useState } from "react";
import Headers from "../Headers/Headers";

const App = () => {
  return (
    <div className="app">
      <Headers />
      <div className="main ">
        <button className="start_journey">Начать путешествие</button>
        <div className="info">
          <div className="top_left">
            мы
            <br />
            <b>1</b>
            <br />
            на рынке
          </div>
          <div className="top_right">
            гарантируем <br />
            <b>50%</b>
            <br /> безопасность
          </div>
          <div className="botton_left">
            календарик за <br />
            <b>2001г.</b>
            <br /> в подарок
          </div>
          <div className="botton_right">
            путешествие <br />
            <b>597</b>
            <br /> дней
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
