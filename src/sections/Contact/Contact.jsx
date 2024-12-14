import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h2 className='sectionTitle'>Contact</h2>
        <form action="" method='get'>
            <div className="formGroup">
                <label htmlFor="name">Name</label>
                <input type="text" name='name'
                placeholder='John Doe' required/>
            </div>
            <div className="formGroup">
                <label htmlFor="email">email</label>
                <input type="email" name='email'
                placeholder='johndoe@example.com' required/>
            </div>
            <div className="formGroup">
                <label htmlFor="name">Message</label>
                <textarea placeholder='Message' required></textarea>
            </div>
            <button type='submit'>Send</button>
        </form>
    </section>
  )
}

export default Contact