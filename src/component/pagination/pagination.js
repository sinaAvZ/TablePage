import React from 'react'
import Classes from './pagination.module.css'
import { NavLink } from 'react-router-dom'
const pagination = props => {
    const Pages = [1, 2, 3, 4, 5]

    return (
        <div className={Classes.Pagination}>
            {Pages.map((data, index) => {
                let pageAdress = '/tournoment';
                return <span key={index} className={Classes.Link}> <NavLink
                    to={pageAdress}
                    className={Classes.PaginationLink}
                >{data}</NavLink></span>
            })}
        </div>
    )
}
export default pagination