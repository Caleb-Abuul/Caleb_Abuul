import styles from './HeroStyles.module.css'
import user from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import xlight from '../../assets/twitter-light.svg'
import xdark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedInLight from '../../assets/linkedin-light.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'
import {useTheme} from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const xIcon = theme === 'light' ? xlight : xdark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedIn = theme === 'light' ? linkedInLight : linkedInDark;
  return (
    <section className={styles.hero} id='hero'>
        <div className={styles.imgWrap}>
            <img src={user} alt="Profile picture of Henry Johnsen" className={styles.user} />
            <img src={themeIcon} alt="light theme icon" className={styles.themeChange} onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>
                Henry
                <br />
                Johnsen
            </h1>
            <h2>Frontend Developer</h2>
            
            <span>
                <a href="https://x.com/CalebAbuul"><img src={xIcon} alt="X icon" /></a>
                <a href="https://github.com/Caleb-Abuul"><img src={githubIcon} alt="Github icon" /></a>
                <a href="https://linkedin.com/CalebAbuul"><img src={linkedIn} alt="LinkedIn icon" /></a>
            </span>
            <p className={styles.desc}>With a passion for creating modern React websites for commercial businesses</p>
            <a href="../../assets/cv.pdf" download><button className={styles.hover}>Resume</button></a>
        </div>
    </section>
  )
}

export default Hero