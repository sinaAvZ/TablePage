import React from 'react'
import Input from '../../UI/input/input'
import Classes from './exception.module.css'
import CloseImage from '../../../assets/tournoment-page/Vector.png'
const exception = props => {
    const selectItem = {
        elementType: 'select',
        elementConfig: {
            options: [
                { value: 'any', displayValue: 'any' },
                { value: 'any', displayValue: 'any' }
            ]
        },
        value: 'any',
       
    }
    return <div className={Classes.Exception}>
            <img className={Classes.CloseImage} src={CloseImage} onClick={props.exceptionMinus} />
            <Input
                label='KD :'
                type='text'
                ClassName={Classes.ExceptionInput}
                labelClass={Classes.ExceptionLabel}
            />
            <Input
                elementType={selectItem.elementType}
                elementConfig={selectItem.elementConfig}
                ClassName={Classes.ExceptionSelect}
            />    <Input
                elementType={selectItem.elementType}
                elementConfig={selectItem.elementConfig}
                ClassName={Classes.ExceptionSelect}
            />
        </div>
    
}
export default exception