import axios from "axios"

const Item = (props) => {
    const { item, onDelete } = props

    const handle = () => {
        onDelete(item)
    }

    return (<li>
        <p>{item.todo}</p>
        <div className="det-buttons">
            <button>Mark done</button>
            <button className="det-dlt" onClick={handle}>Delete</button>
        </div>
    </li>)
}

export default Item