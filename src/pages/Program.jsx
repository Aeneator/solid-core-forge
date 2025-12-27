import styles from './Program.module.css';
import backgroundImage from '../assets/underheader.jpg';
import HeaderSpacer from '../components/HeaderSpacer';
import Banner from '../components/Banner';

const HOURS = [
    { day: 'Luni', hours: '08:00 - 20:00' },
    { day: 'Marți', hours: '08:00 - 20:00' },
    { day: 'Miercuri', hours: '08:00 - 20:00' },
    { day: 'Joi', hours: '08:00 - 20:00' },
    { day: 'Vineri', hours: '08:00 - 20:00' },
    { day: 'Sâmbătă', hours: '08:00 - 16:00' },
    { day: 'Duminică', hours: '08:00 - 13:00' },
];

export default function Program() {
    return (
        <div className={styles.programPage}>
            <Banner text="Program" />
            <div className={styles.programContainer}>
                {HOURS.map((item) => (
                    <div key={item.day} className={styles.day}>
                        <span className={styles.dayName}>{item.day}</span>
                        <span className={styles.dayHours}>{item.hours}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
