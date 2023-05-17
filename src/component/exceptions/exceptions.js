import React from 'react'
import Exception from './exception/exception'
import Classes from './exceptions.module.css'
const exceptions = props => {

    return (
        <div className={Classes.Exceptions}>
            {[...Array(props.exceptions.exceptionNumber)].map((e, i) => {
                return <Exception key={i} exceptionMinus={props.exceptionMinus} />
            })}
            <div className={Classes.AddRemDiv}>
                <button className={Classes.AddRem} onClick={props.exceptionPlus}> add</button>

                <button className={Classes.AddRem} onClick={props.exceptionMinus}> remove</button>
            </div>
            <button className={Classes.Save}>Save</button>
            <button className={Classes.Cancel} onClick={props.exceptionHide}>Cancel</button>
        </div>)
}
export default exceptions