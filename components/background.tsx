import styles from '../styles/background.module.css';
const Background = () => (
    <div className={styles.background}>
        <div className={[styles.circle,styles.xxlarge,styles.shade1].join(' ')}/>
        <div className={[styles.circle, styles.xlarge, styles.shade2].join(' ')}/>
        <div className={[styles.circle, styles.large, styles.shade3].join(' ')}/>
        <div className={[styles.circle, styles.mediun, styles.shade4].join(' ')}/>
        <div className={[styles.circle, styles.small, styles.shade5].join(' ')}/>
    </div>
);
export default  Background
