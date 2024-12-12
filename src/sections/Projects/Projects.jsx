import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'

import projectCard from '../../common/projectCard'




function Projects() {
    
  return (
    <section id='projects' className={styles.container}>
        <div className={styles.projectContainer}>
            <h2 className={styles.projectTitle}>Projects</h2>
            <projectCard src={viberr} link="https://github.com/Caleb-Abuul/age-calculator.git" title="Viberr" desc="Lorem Ipsum dolor sit amor amet." />
        </div>
    </section>
  )
}

export default Projects