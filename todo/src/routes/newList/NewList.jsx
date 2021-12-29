import axios from 'axios';
import './newlist.css'
const { useState } = require("react");


const NewList = () => {

    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newList = {
            listName: title
        }
        try {
            const res = await axios.post("/list", newList);
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <form className="newlist-container" onSubmit={handleSubmit}>
                <label htmlFor="list">Enter Name</label>
                <input type="text" id="list" onChange={(e) => setTitle(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewList