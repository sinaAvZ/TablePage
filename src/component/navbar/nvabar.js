import React from 'react'
import Classes from './navbar.module.css'
import Input from '../UI/input/input'
const navbar = props => {




    return (
        <div className={Classes.navbar}>
            <img src={props.leftImage} className={Classes.Leftlogo} />
            <div className={Classes.Gameinfo}>
                {props.data.map((data, index) => {
                    return (<Input
                        changed={(prop)=>props.change(prop,data.id)}
                        key={index}
                        elementType={data.config.elementType}
                        elementConfig={data.config.elementConfig}
                        ClassName={data.config.clasName}
                        edit={props.edit}
                    />
                    )
                })}
            </div>
            <div className={Classes.Rightlogo}>
                <img src={props.Right_LeftImage} />
                <img src={props.Right_RightImage} />
            </div>
        </div>
    )


}
export default navbar