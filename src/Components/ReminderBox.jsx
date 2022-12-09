import React from 'react'
import styles from '../Styles/reminder.module.css'
import corpcare from '../Assets/corpcare.png'
export const ReminderBox = () => {
  return (
    <div className={styles.container} >
      <p>Reminder</p>
      
    
      <div className={styles.reminder} >
        <p>Agency Design Kit</p>
        <img src={corpcare} alt="logo" />
        <p className={styles.detail}>Will be published Nov 25, 2022</p>
        <button>Set as Reminder</button>
      </div>
    </div>
  )
}
