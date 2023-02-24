import React from 'react'
import styles from '../MainPage/MainPage.module.scss'
import element from '../../components/Items.module.scss'
const MainPage = () => {
  return (<div className={styles.main}>


    <div className={element.item}>pizza</div>
    <div >sets</div>
    <div>wok</div>
    <div>rolls</div>
    <div>sushi</div>
    <div>soup</div>
    <div>salads</div>
    <div>combo</div>    
    
    </div>
  )
}

export default MainPage