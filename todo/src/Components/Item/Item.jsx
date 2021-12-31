import axios from "axios"

const Item = (props) => {
    const { item } = props
    const handleDelete = async (e) => {
        try {
            const res = await axios.delete(`/list/${item.item_id}`, {
                data: {
                    listId: item.id
                }
            })
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    const handleClick = (e) => {
        console.log(item.item_id)
    }
    return (<li>
        <p>{item.todo}</p>
        <div className="det-buttons">
            <button onClick={handleClick}>Mark done</button>
            <button className="det-dlt" onClick={handleDelete}>Delete</button>
        </div>
    </li>)
}

export default Item