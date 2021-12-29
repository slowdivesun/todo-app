import Card from "../card/Card"
import './new.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios'

const New = () => {

    const [lists, setLists] = useState([]);

    useEffect(() => {
        const fetchLists = async () => {
            const res = await axios.get("/list")
            let result = []
            for (let i = 0; i < res.data.length; i++) {
                const res2 = await axios.get("/list/" + res.data[i].id)
                result.push({
                    "list": res.data[i].list,
                    "count": res2.data.length
                })
            }
            setLists(result)
            // console.log(lists)
        }
        fetchLists();
    }, [])
    return (
        <div className="new-container">
            <div className="new-wrapper">
                <Link to="/list/post">
                    <div className="button-wrapper">
                        <button className="add-todo">
                            Add todo
                        </button>
                    </div>
                </Link>

                <div className="new-box">
                    {
                        lists.map(e => {
                            return <Card title={e.list} items={e.count} color={'#' + Math.floor(Math.random() * 16777215).toString(16)} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default New