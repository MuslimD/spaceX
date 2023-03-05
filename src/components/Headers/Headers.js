import React from 'react';
import "./headers.css"
import space from "../../assets/spacex.png"

const Headers = () => {
    return (
        <div className='headers'>
            <img className='spacex' src={space} />
            <div className='a'><a  href='https://www.spacex.com/'>Главная</a>
            <a  href='https://www.spacex.com/'>Технология</a>
            <a  href='https://www.spacex.com/'>График полетов</a>
            <a  href='https://www.spacex.com/'>Гарантии</a>
            <a  href='https://www.spacex.com/'>О компании</a>
            <a  href='https://www.spacex.com/'>Контакты</a></div>
        </div>
    );
};

export default Headers;