import './newlist.css'
const { useState } = require("react");


const NewList = () => {

    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newList = {

        }

    }

    return (
        <div>
            <form className="newlist-container">
                <label htmlFor="list">Enter Name</label>
                <input type="text" id="list" />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewList