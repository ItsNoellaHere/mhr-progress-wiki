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
        link: '/low-rank/Great-Sword',
    },
    {
        image: '/img/SnS.png',
        name: 'Sword and Shield',
        link: '/low-rank/Sword-and-Shield',
    },
    {
        image: '/img/duals.png',
        name: 'Dual Blades',
        link: '/low-rank/Dual-Blades',
    },
    {
        image: '/img/longsword.png',
        name: 'Long Sword',
        link: '/low-rank/Long-Sword',
    },
    {
        image: '/img/hammer.png',
        name: 'Hammer',
        link: '/low-rank/Hammer',
    },
    {
        image: '/img/horn.png',
        name: 'Hunting Horn',
        link: '/low-rank/Hunting-Horn',
    },
    {
        image: '/img/lance.png',
        name: 'Lance',
        link: '/low-rank/Lance',
    },
    {
        image: '/img/gunlance.png',
        name: 'Gunlance',
        link: '/low-rank/Gunlance',
    },
    {
        image: '/img/switchaxe.png',
        name: 'Switch Axe',
        link: '/low-rank/Switch-Axe',
    },
    {
        image: '/img/chargeblade.png',
        name: 'Charge Blade',
        link: '/low-rank/Charge-Blade',
    },
    {
        image: '/img/glaive.png',
        name: 'Insect Glaive',
        link: '/low-rank/Insect-Glaive',
    },
    {
        image: '/img/bow.png',
        name: 'Bow',
        link: '/low-rank/Bow',
    },
    {
        image: '/img/lbg.png',
        name: 'Light Bowgun',
        link: '/low-rank/Light-Bowgun',
    },
    {
        image: '/img/hbg.png',
        name: 'Heavy Bowgun',
        link: '/low-rank/Heavy-Bowgun',
    },
]

export default function WeaponGrid() {
    return (
        <div className={styles.container}>
            {weaponList.map((weapon) => (
                <div className={styles.item}>
                    <a href={weapon.link}>
                        <img src={weapon.image} alt={weapon.name}/>
                        <p>{weapon.name}</p>
                    </a>
                </div>
            ))}
        </div>
    )
}