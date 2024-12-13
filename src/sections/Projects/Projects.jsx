import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import burger from '../../assets/fresh-burger.png'
import hipster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
import ProjectCard from '../../common/ProjectCard'



function Projects() {
    
  return (
    <section id='projects' className={styles.container}>
        <div className={styles.projectContainer}>
            <h2 className="sectionTitle">Projects</h2>
            
            <ProjectCard src={viberr} link="https://github.com/Caleb-Abuul/age-calculator.git" title="Viberr" desc="Play station library" style={styles.card}/>

            <ProjectCard src={burger} link="https://github.com/Caleb-Abuul/age-calculator.git" title="Fresh Burger" desc="Hamburger restaurant" style={styles.card}/>

            <ProjectCard src={fitLift} link="https://github.com/Caleb-Abuul/age-calculator.git" title="Fit Lift" desc="Fitness and Health" style={styles.card}/>

            <ProjectCard src={hipster} link="https://github.com/Caleb-Abuul/age-calculator.git" title="Glasses" desc="Glasses shop" style={styles.card}/>
        </div>
    </section>
  )
}

export default Projects