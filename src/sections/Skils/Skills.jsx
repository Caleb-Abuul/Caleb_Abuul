import styles from './SkillsStyle.module.css'
import checkMark from '../../assets/checkmark-dark.svg'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h2 className="sectionTitle">
            Skills
        </h2>
        <div className={styles.skillsList}>
            <span>
                <img src={checkMark} alt="" />
                <p>HTML</p>
            </span>
            <span>
                <img src={checkMark} alt="" />
                <p>CSS</p>
            </span>
            <span>
                <img src={checkMark} alt="" />
                <p>JavaScript</p>
            </span>
            <span>
                <img src={checkMark} alt="" />
                <p>TypeScript</p>
            </span>
            
        </div>
        <hr />
        <div className={styles.skillsList}>
            <span>
                <img src={checkMark} alt="" />
                <p>React</p>
            </span>
            <span>
                <img src={checkMark} alt="" />
                <p>Angular</p>
            </span>
            <span>
                <img src={checkMark} alt="" />
                <p>Vue</p>
            </span>
            
        </div>
        <hr />
        <div className={styles.skillsList}>
            <span>
                <img src={checkMark} alt="" />
                <p>Redux</p>
            </span>
            <span>
                <img src={checkMark} alt="" />
                <p>Tailwind</p>
            </span>
            <span>
                <img src={checkMark} alt="" />
                <p>Node</p>
            </span>
            <span>
                <img src={checkMark} alt="" />
                <p>Bootstrap</p>
            </span>
            
        </div>


    </section>
  )
}

export default Skills