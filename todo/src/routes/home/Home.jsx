import Header from "../../Components/header/Header"
import New from "../../Components/new/New"
import Older from "../../Components/older/Older"
import react from 'react'

const Home = () => {
    return (
        <>
            <Header text={"New Todos"} />
            <New />
            <Header text={"Older Todos"} />
            <Older />
        </>
    )
}

export default Home