import React, { useState } from "react";
import space from "../../assets/spacex.png";

const Headers = () => {
  const [isShowLinks, setShowLinks] = useState(false);
  return (
    <div className="headers">
      {!isShowLinks && <img className="spacex" src={space} />}
      <div className="a">
        <a href="https://www.spacex.com/">Главная</a>
        <a href="https://www.spacex.com/">Технология</a>
        <a href="https://www.spacex.com/">График полетов</a>
        <a href="https://www.spacex.com/">Гарантии</a>
        <a href="https://www.spacex.com/">О компании</a>
        <a href="https://www.spacex.com/">Контакты</a>
      </div>
      <button
        className="is_show_links"
        onClick={() => setShowLinks(!isShowLinks)}
      >
        {isShowLinks ? ">" : "<"}
      </button>
      {isShowLinks && (
        <div className="a_show">
          <a href="https://www.spacex.com/">Главная</a>
          <a href="https://www.spacex.com/">Технология</a>
          <a href="https://www.spacex.com/">График полетов</a>
          <a href="https://www.spacex.com/">Гарантии</a>
          <a href="https://www.spacex.com/">О компании</a>
          <a href="https://www.spacex.com/">Контакты</a>
        </div>
      )}
    </div>
  );
};

export default Headers;
