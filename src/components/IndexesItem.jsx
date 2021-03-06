import React from 'react'
import { Link } from 'react-router-dom'
import { Hoover } from "../components/HooverStyle";


export default function IndexesItem({ indexes }) {

    let style = { color: "red" }

    if (indexes.today > 0) {
        style = { color: "green" }
    }

    return (
        <div className="col-md-10 mx-auto mw-100 p-0 m-0 row-striped">
            <Hoover>
                <Link
                    className="btn btn-block p-0"
                    to={`/indexes/${indexes.ticker}`}>
                    <ul className="col-md-6 mw-100 list-inline d-flex justify-content-center align-content-center p-0 m-0">
                        <li className="col-md-3 mr-5 pl-2 text-left">
                            <p>{indexes.name}</p>
                        </li>
                        <li className="col-md-3 ml-5 mr-5">
                            <p style={style}>{indexes.today}%</p>
                        </li>
                        <li className="col-md-3 ml-5 text-right">
                            <p>{indexes.price}:-</p>
                        </li>
                    </ul>
                </Link>
            </Hoover>
        </div >
    )
}
