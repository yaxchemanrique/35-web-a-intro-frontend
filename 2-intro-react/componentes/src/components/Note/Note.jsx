import React from 'react'
import styles from './Note.module.css'
console.log(styles)

function Note() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Nota:</h2>
      <p>Hola! Soy una nota</p>
    </div>
  )
}

export default Note