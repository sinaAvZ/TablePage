import React from 'react'
import Classes from './table.module.css'
import TableColumn from './tables/tableColumn'
const table = props => {
    const TableContent = [1, 2, 3, 4, 5, 6]
    return (
        <div className={Classes.Table}>
            <div className={Classes.TableColumn}>
                <span className={Classes.TableContent}>Start game</span>
                <span className={Classes.TableContent}>Blue fighter coach</span>
                <span className={Classes.TableContent}>Red fighter coach</span>
                <span className={Classes.TableContent}>Game number</span>
                <span className={Classes.TableContent}>Blue fighter name</span>
                <span className={Classes.TableContent}>Red fighter name</span>
                <span className={Classes.TableContent}>Row</span>
            </div>
            {TableContent.map((data, index) => <TableColumn
                key={index}
                gameStart={index}
                blueCoach={index}
                redCoach={index}
                gameNumber={index}
                blueFighter={index}
                redFighter={index}
                row={index}
            />)}

        </div>

    )
}
export default table