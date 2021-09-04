import './Navbar.scss'
import NavItem from "./NavItem/NavItem"

function Navbar(props) {

     function onlyUnique(value, index, self) {
         return self.indexOf(value) === index;
        }

     let unique = props.genre_ids.filter(onlyUnique);

    let menuElements = props.map(m => <NavItem id={m.id} menuList={m.unique} />)

    return (
        <nav className="nav">
            <ul className="nav__list">
                { menuElements }
            </ul>
        </nav>
    )
}

export default Navbar;
