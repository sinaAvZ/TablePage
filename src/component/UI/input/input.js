import React from 'react'
import Classes from './input.module.css'
const input = props => {
    let inputElement = '';
    switch (props.elementType) {
        case ('input'): {
            inputElement = <input
                style={props.style}
                className={props.ClassName}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} 
                disabled={!props.edit} />
            break;
        }
        case ('textarea'): {
            inputElement = <textarea
                style={props.style}
                className={props.ClassName}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                 disabled={!props.edit} />
            break;
        }
        case ('select'): {

            inputElement = (
                <select
                    style={props.Style}
                    // style={props.style}
                    className={props.ClassName}
                    value={props.value}
                    onChange={props.changed} 
                    disabled={!props.edit}>

                    {props.elementConfig.options.map((data, index) => (
                        <option key={data.value} value={data.value}>
                            {data.displayValue}
                        </option>
                    ))}
                </select>)
            break;
        }
        default: {
            inputElement = <input
                style={props.style}
                className={props.ClassName}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} 
                disabled={!props.edit} />
        }
    }



    return (
        <div className={Classes.Input}>
          {props.label?  <label className={Classes.Label+' '+props.labelClass}>{props.label} </label>:null}
            {inputElement}
        </div>
    )
}
export default input