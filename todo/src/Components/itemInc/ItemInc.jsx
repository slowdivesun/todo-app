const ItemInc = (props) => {
    const { item, onDelete, onUndone } = props

    const handle = () => {
        onDelete(item)
    }

    const handleUndone = () => {
        onUndone(item)
    }

    return (<li>
        <p>{item.todo}</p>
        <div className="det-buttons">
            <button className="det-done" onClick={handleUndone}>Mark not done</button>
            <button className="det-dlt" onClick={handle}>Delete</button>
        </div>
    </li>)
}

export default ItemInc