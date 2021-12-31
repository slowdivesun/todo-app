import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import Item from "../../Components/Item/Item";
import ItemInc from "../../Components/itemInc/ItemInc";
import './details.css'

const Details = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [complete, setComplete] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const [item, setItem] = useState("");

    useEffect(() => {
        const getItems = async () => {
            const res = await axios.get("/list/" + id);
            let com = []
            let incom = []
            for (let i = 0; i < res.data.length; i++) {
                if (res.data[i].status === 0) {
                    incom.push(res.data[i])
                }
                else {
                    com.push(res.data[i])
                }
            }
            setComplete(com)
            setIncomplete(incom)
        }
        getItems();
    }, [])

    const handleSubmit = async (e) => {
        try {
            await axios.post(`/list/new/${id}`, {
                text: item,
            })
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    const handleDone = async (i) => {
        let id = i.item_id
        try {
            const res = await axios.put(`/list/done/${i.item_id}`, {
                listId: i.id
            })
            setIncomplete(incomplete => incomplete.filter(e => e.item_id !== id))
            setComplete(complete => [...complete, i])
        } catch (err) {
            console.log(err)
        }
    }

    const handleUndone = async (i) => {
        // console.log((complete.filter(e => e.item_id !== i.item_id)))
        // console.log(incomplete.push((incomplete.map(e => e.item_id === i.item_id)[0])))
        let id = i.item_id
        try {
            const res = await axios.put(`/list/undone/${i.item_id}`, {
                listId: i.id

            })
            setComplete(complete => (complete.filter(e => e.item_id !== id)))
            setIncomplete(incomplete => [...incomplete, i])
        } catch (err) {
            console.log(err)
        }
    }

    const handleDelete = async (i) => {
        let id = i.item_id
        try {
            const res = await axios.delete(`/list/${i.item_id}`, {
                data: {
                    listId: i.id
                }
            })
            setComplete(complete => (complete.filter(e => e.item_id !== id)))
            setIncomplete(incomplete => (incomplete.filter(e => e.item_id !== id)))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="det-container">
            <form className="item-container" onSubmit={handleSubmit}>
                <label htmlFor="item">Enter Name</label>
                <input type="text" id="item" onChange={(e) => setItem(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>

            <div className="wrap-collapsible">
                <input id="collapsible" className="toggle" type="checkbox" />
                <label htmlFor="collapsible" className="lbl-toggle">More Info</label>
                <div className="collapsible-content">
                    <ul className="content-inner">
                        {incomplete.map(e => {
                            return (<Item item={e} key={e.item_id} onDelete={handleDelete} onDone={handleDone} />)
                        })}
                    </ul>
                </div>
            </div>

            <div className="wrap-collapsible">
                <input id="collapsible-2" className="toggle" type="checkbox" />
                <label htmlFor="collapsible-2" className="lbl-toggle">More Info</label>
                <div className="collapsible-content">
                    <ul className="content-inner">
                        {complete.map(e => {
                            return (<ItemInc item={e} key={e.item_id} onDelete={handleDelete} onUndone={handleUndone} />)
                        })}
                    </ul>
                </div>
            </div>


        </div >
    )
}

export default Details