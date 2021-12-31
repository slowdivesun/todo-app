import axios from "axios"

const Item = (props) => {
    const { item, onDelete, onDone } = props

    const handle = () => {
        onDelete(item)
    }

    const handleDone = () => {
        onDone(item)
    }

    return (<li>
        <p>{item.todo}</p>
        <div className="det-buttons">
            <button className="det-done" onClick={handleDone}>Mark done</button>
            <button className="det-dlt" onClick={handle}>Delete</button>
        </div>
    </li>)
}

export default Item