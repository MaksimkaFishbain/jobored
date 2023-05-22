import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import styles from "../styles/header.module.css";

const Header:FC = () => {
    return (
        <header className={styles.header}>
            <img src='../image/logo.svg' alt='Логотип'/>
            <NavLink to={'/'}>Поиск вакансий</NavLink>
            <NavLink to={'/favorites'}>Избранное</NavLink>
        </header>
    );
};

export default Header;
