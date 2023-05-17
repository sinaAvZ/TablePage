import React from 'react'
import Winner from './winner/winner'
import Classes from './winners.module.css'
const winners = props => {
    return (
        <div className={Classes.Winners}>
            <Winner medal='silver' />
            <Winner medal='gold' />
            <Winner medal='bronze' />
        </div>
    )
}
export default winners