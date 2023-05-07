import React from 'react';
import styles from './styles.module.css';

type weapon = {
    image: string,
    name: string,
    link: string,
}

let weaponList: weapon[] = [
    {
        image: 'https://files.itsnoellahere.gay/images/greatsword.png',
        name: 'Great Sword',
        link: '/low-rank/Great-Sword',
    },
    {
        image: 'https://files.itsnoellahere.gay/images/SnS.png',
        name: 'Sword and Shield',
        link: '/low-rank/Sword-and-Shield',
    },
    {
        image: 'https://files.itsnoellahere.gay/images/duals.png',
        name: 'Dual Blades',
        link: '/low-rank/Dual-Blades',
    },
    {
        image: 'https://files.itsnoellahere.gay/images/longsword.png',
        name: 'Long Sword',
        link: '/low-rank/Long-Sword',
    },
    {
        image: 'https://files.itsnoellahere.gay/images/hammer.png',
        name: 'Hammer',
        link: '/low-rank/Hammer',
    },
    {
        image: 'https://files.itsnoellahere.gay/images/horn.png',
        name: 'Hunting Horn',
        link: '/low-rank/Hunting-Horn',
    },
    {
        image: 'https://files.itsnoellahere.gay/images/lance.png',
        name: 'Lance',
        link: '/low-rank/Lance',
    },
    {
        image: 'https://files.itsnoellahere.gay/images/gunlance.png',
        name: 'Gunlance',
        link: '/low-rank/Gunlance',
    },
    {
        image: 'https://files.itsnoellahere.gay/images/switchaxe.png',
        name: 'Switch Axe',
        link: '/low-rank/Switch-Axe',
    },
    {
        image: 'https://files.itsnoellahere.gay/images/chargeblade.png',
        name: 'Charge Blade',
        link: '/low-rank/Charge-Blade',
    },
    {
        image: 'https://files.itsnoellahere.gay/images/glaive.png',
        name: 'Insect Glaive',
        link: '/low-rank/Insect-Glaive',
    },
    {
        image: 'https://files.itsnoellahere.gay/images/bow.png',
        name: 'Bow',
        link: '/low-rank/Bow',
    },
    {
        image: 'https://files.itsnoellahere.gay/images/lbg.png',
        name: 'Light Bowgun',
        link: '/low-rank/Light-Bowgun',
    },
    {
        image: 'https://files.itsnoellahere.gay/images/hbg.png',
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
                        <img src={weapon.image} alt={weapon.name} />
                        <p>{weapon.name}</p>
                    </a>
                </div>
            ))}
        </div>
    )
}