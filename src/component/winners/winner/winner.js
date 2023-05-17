import React from 'react'
import GoldMedal from '../../../assets/tournoment-page/Gold.png'
import BronzeMedal from '../../../assets/tournoment-page/bronze.png'
import SilverMedal from '../../../assets/tournoment-page/silver.png'
import Classes from './winner.module.css'
const winner = props => {

    let Medal =''
    switch (props.medal) {
        case 'gold': {
            Medal = GoldMedal
            break;
        }
        case 'silver': {
            Medal = SilverMedal
            break;
        }
        case 'bronze': {
            Medal = BronzeMedal
            break;
        }
    }
    return (
        <div className={Classes.Winner}>
        <img src={Medal} />
        <span className={Classes.WinnerTexts}>
            <h6>Coach Name</h6>
            <h5>Fighter</h5>
        </span></div>
 )
}
export default winner