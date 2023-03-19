import React from 'react';
import './Hero.css';

function Hero(props) {
    return (
        <div className="heroes">
            <div className="heroes__info">
                <div className="heroes__name">{props.name}</div>
                <img className="img" src={props.picture} alt="superhero"/>
                <div>Альтер-эго: {props.alterego}</div>
                <div>Род деятельности: {props.business}</div>
                <div>Друзья: {props.friends}</div>
                <div>Суперсилы: {props.superpowers}</div>
                <div>Подробнее: {props.details}</div>
            </div>
        </div>
    );
}

export default Hero;