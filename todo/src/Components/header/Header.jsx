import './header.css'

const Header = (props) => {
    return (
        <div className="header-container">
            <h1 className="heading">
                {props.text}
            </h1>
        </div>
    )
}

export default Header