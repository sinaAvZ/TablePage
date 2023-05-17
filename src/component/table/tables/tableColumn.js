import React from 'react'
import Classes from './tableColumn.module.css'
const table = props => {

    return <div className={Classes.TableColumn}>
        <span className={Classes.TableContent}>{props.gameStart}</span>
        <span className={Classes.TableContent}>{props.blueCoach}</span>
        <span className={Classes.TableContent}>{props.redCoach}</span>
        <span className={Classes.TableContent}>{props.gameNumber}</span>
        <span className={Classes.TableContent}>{props.blueFighter}</span>
        <span className={Classes.TableContent}>{props.redFighter}</span>
        <span className={Classes.TableContent}>{props.row}</span>
    </div>
}
export default table