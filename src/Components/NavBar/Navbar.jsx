import { HeaderNav, LiItem, LinkItem, LogoImg, Nav, UlList } from "./NavbarStyles"
import Logo from '../../assets/img/logo/logo.png'
import { FaHouseDamage, FaListOl, FaTasks,FaRecordVinyl  } from 'react-icons/fa'
import { useSelector } from "react-redux"

const Navbar = () => {

    const todoList = useSelector(state => state.todo.todoList);

    return (
        <HeaderNav>
            <LogoImg src={Logo} to='/home' />
            <Nav>
                <UlList>
                    <LiItem item={false}>
                        <LinkItem to='/'>
                            <FaHouseDamage
                                size='22px'
                                pointerEvents='none'
                            />
                            Home
                        </LinkItem>
                    </LiItem>

                    <LiItem>
                        <LinkItem to='/todo' item={todoList.length}>
                            {!todoList.length ?
                                <FaTasks
                                    size='24px'
                                    color="rgb(240, 240, 240)"
                                    pointerEvents='none'
                                />
                                : <FaTasks
                                    size='24px'
                                    color="#20FB2F "
                                    pointerEvents='none'
                                />
                            }
                            ToDo
                        </LinkItem>
                    </LiItem>

                    <LiItem item={false}>
                        <LinkItem to='/pokeapi'>
                            <FaRecordVinyl
                                size='24px'
                                pointerEvents='none' />

                            Pokemons
                        </LinkItem>
                    </LiItem>
                </UlList>
            </Nav>
        </HeaderNav>
    )
}
export default Navbar