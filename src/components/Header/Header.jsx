import { Spacer } from "@chakra-ui/react"
import HeaderStyle from './Header.module.css'
import AccountIcon from '../../assets/img/account-icon.png'
import CarIcon from '../../assets/img/car-icon.png'
import FavIcon from '../../assets/img/fav-icon.png'
import { Link } from "react-router-dom"

export function Header(){
    return (
        <>
            <header className={HeaderStyle.header}>
                <nav className={HeaderStyle.navbar}>
                    <Link to="/">Início</Link>
                    <Spacer width='8' maxWidth='8' />
                    <Link to="">Catálogo</Link>
                    <Spacer width='8' maxWidth='8' />
                    <Link to="">Sobre nós</Link>
                    <Spacer width='8' maxWidth='8' />
                    <Link to="">Dúvidas</Link>
                    <Spacer width='8' maxWidth='8' />
                    <Link to="/contact">Contate-nos</Link>
                </nav>

                <div className={HeaderStyle.icons}>
                    <img src={AccountIcon} alt="" />
                    <Spacer width='8' maxWidth='8' />
                    <img src={FavIcon} alt="" />
                    <Spacer width='8' maxWidth='8' />
                    <img src={CarIcon} alt="" />
                </div>
            </header>
        </>
    )
}