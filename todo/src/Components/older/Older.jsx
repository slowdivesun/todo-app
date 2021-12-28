import Card from '../card/Card'
import './older.css'



const Older = () => {
    let colors = [
        "#B55F4D",
        "#A3A252",
        "#63A352",
        "#52A2A3",
        "#52A2A3"
    ]
    return (
        <div className='older-wrapper'>
            <div className='older-container'>
                <Card title={"hello"} items={8} color={colors[Math.floor(Math.random() * 5)]} />
                <Card title={"hello"} items={8} color={colors[Math.floor(Math.random() * 5)]} />
                <Card title={"hello"} items={8} color={colors[Math.floor(Math.random() * 5)]} />
                <Card title={"hello"} items={8} color={colors[Math.floor(Math.random() * 5)]} />
                <Card title={"hello"} items={8} color={colors[Math.floor(Math.random() * 5)]} />
                <Card title={"hello"} items={8} color={colors[Math.floor(Math.random() * 5)]} />
                <Card title={"hello"} items={8} color={colors[Math.floor(Math.random() * 5)]} />
                <Card title={"hello"} items={8} color={colors[Math.floor(Math.random() * 5)]} />
                <Card title={"hello"} items={8} color={colors[Math.floor(Math.random() * 5)]} />
                <Card title={"hello"} items={8} color={colors[Math.floor(Math.random() * 5)]} />
                <Card title={"hello"} items={8} color={colors[Math.floor(Math.random() * 5)]} />
            </div>
        </div>
    )
}

export default Older