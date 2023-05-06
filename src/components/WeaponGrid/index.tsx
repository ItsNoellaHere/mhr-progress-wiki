import React from 'react';
import styles from './styles.module.css';

type weapon = {
    image: string,
    name: string,
    link: string,
}

let weaponList : weapon[] = [
    {
        image: '/img/greatsword.png',
        name: 'Great Sword',
        link: '',
    },
    {
        image: '/img/SnS.png',
        name: 'Sword and Shield',
        link: '',
    },
    {
        image: '/img/duals.png',
        name: 'Dual Blades',
        link: '',
    },
    {
        image: '/img/longsword.png',
        name: 'Long Sword',
        link: '',
    },
    {
        image: '/img/hammer.png',
        name: 'Hammer',
        link: '',
    },
    {
        image: '/img/horn.png',
        name: 'Hunting Horn',
        link: '',
    },
    {
        image: '/img/lance.png',
        name: 'Lance',
        link: '',
    },
    {
        image: '/img/gunlance.png',
        name: 'Gunlance',
        link: '',
    },
    {
        image: '/img/switchaxe.png',
        name: 'Switch Axe',
        link: '',
    },
    {
        image: '/img/chargeblade.png',
        name: 'Charge Blade',
        link: '',
    },
    {
        image: '/img/glaive.png',
        name: 'Insect Glaive',
        link: '',
    },
    {
        image: '/img/bow.png',
        name: 'Bow',
        link: '',
    },
    {
        image: '/img/lbg.png',
        name: 'Light Bowgun',
        link: '',
    },
    {
        image: '/img/hbg.png',
        name: 'Heavy Bowgun',
        link: '',
    },
]

export default function WeaponGrid() {
    return (
        <div className={styles.container}>
            {weaponList.map((weapon) => (
                <div className={styles.item}>
                    <a href={weapon.link}>
                        <img src={weapon.image} alt={weapon.name}/>
                        <h3>{weapon.name}</h3>
                    </a>
                </div>
            ))}
        </div>
    )
}