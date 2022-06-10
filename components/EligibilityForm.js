import React, { useState } from 'react'
//CSS
import styles from '../styles/EligibilityForm.module.css';

const EligibilityForm = ({ show }) => {

  const cssClasses = [
    styles.efc,
    show === 'entered' ? styles.efcShow
      : show === 'exited' ? styles.efcHide
        : null
  ]

  const [eligibility, setEligibility] = useState({
    age: false,
    unemployed: false,
    uc: false
  })

  return (
    <div className={cssClasses.join(' ')} id='eligibilityform'>
      <h1>Eligibility Questionnaire</h1>
      <form>
        <div className={styles.efc__input__cb}>
          <label htmlFor='checkbox1'>Are you 18+ ?</label>
          <input type='checkbox' id='checkbox1' name='age' placeholder='Placeholder text here' onChange={(e) => {
            setEligibility(prevState => {
              return {
                ...prevState,
                [e.target.name]: e.target.checked
              }
            })
          }} required />
        </div>
        <div className={styles.efc__input__cb} >
          <label htmlFor='checkbox2'>Are you currently unemployed?</label>
          <input type='checkbox' name='unemployed' id='checkbox2' placeholder='Placeholder text here' onChange={(e) => {
            setEligibility(prevState => {
              return {
                ...prevState,
                [e.target.name]: e.target.checked
              }
            })
          }} required />
        </div>
        <div className={styles.efc__input__cb}>
          <label htmlFor='checkbox3'>Are you in receipt of Universal Credit?</label>
          <input type='checkbox' name='uc' id='checkbox3' placeholder='Placeholder text here' onChange={(e) => {
            setEligibility(prevState => {
              return {
                ...prevState,
                [e.target.name]: e.target.checked
              }
            })
          }} required />
        </div>
        <div className={styles.efcFormBtn}>
          <button className={eligibility.age && eligibility.unemployed && eligibility.uc ? styles.eligible : styles.disabled}>{eligibility.age && eligibility.unemployed && eligibility.uc ? 'Find a Job' : 'Sorry you are not eligible'}</button>
        </div>
      </form>
    </div>
  )

}

export default EligibilityForm