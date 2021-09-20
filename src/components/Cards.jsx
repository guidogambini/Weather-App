import React from "react";
import styles from "./Cards.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { removeCity } from "../actions";


export default function Cards() {



    const dispatch = useDispatch();

    const cities = useSelector(state => state);
    

    function handleClose(id) {
        dispatch(removeCity(id));
    }

    return (
        <div className={styles.cards}>
            {cities && cities.map((city) => (

                <div className={styles.containerCard}>
                        <button className={styles.boton} onClick={() => handleClose(city.id)}>X</button>
                        <h2 className={styles.cityName}>{city.name}</h2>
                        <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="not found" className={styles.imgCard} />
                        <div className={styles.minmax}>
                            <span className={styles.min}>Min: {Math.round(city.main.temp_min)}°</span>
                            <span className={styles.max}>Max: {Math.round(city.main.temp_max)}°</span>
                        </div>
                </div>

            ))}

            {cities.length === 0 ? <h1></h1> : null}
        </div>
    );
}

