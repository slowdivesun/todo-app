import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import './details.css'

const Details = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [complete, setComplete] = useState([]);
    const [incomplete, setIncomplete] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const res = await axios.get("/list/" + id);
            console.log(res)
        }
        getItems();
    })

    return (
        <div>
            <div className="wrap-collapsible">
                <input id="collapsible" className="toggle" type="checkbox" />
                <label htmlFor="collapsible" className="lbl-toggle">More Info</label>
                <div className="collapsible-content">
                    <ul className="content-inner">
                        <li></li>
                    </ul>
                </div>
            </div>

            <div className="wrap-collapsible">
                <input id="collapsible-2" className="toggle" type="checkbox" />
                <label htmlFor="collapsible-2" className="lbl-toggle">More Info</label>
                <div className="collapsible-content">
                    <ul className="content-inner">
                        <li></li>
                    </ul>
                </div>
            </div>


        </div >
    )
}

export default Details