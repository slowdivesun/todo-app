import Card from "../card/Card"
import './new.css'
import { Link } from 'react-router-dom'

const New = () => {
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
                    <Card title={"hello"} items={8} color={"red"} />
                    <Card title={"hello"} items={8} color={"red"} />
                    <Card title={"hello"} items={8} color={"red"} />
                    <Card title={"hello"} items={8} color={"red"} />
                    <Card title={"hello"} items={8} color={"red"} />
                </div>
            </div>
        </div>
    )
}

export default New