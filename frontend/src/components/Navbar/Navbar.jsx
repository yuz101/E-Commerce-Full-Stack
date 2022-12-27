import { useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const quantity = useSelector(state => state.cart.quantity)
    
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <div className='navbarItem'>
                        <span>USD</span>
                        <KeyboardArrowDownOutlinedIcon/>
                    </div>
                    <div className='navbarItem'>
                        <Link className="link" to="./products/women's">Women's</Link>
                    </div>
                    <div className='navbarItem'>
                        <Link className="link" to="./products/men's">Men's</Link>
                    </div>
                    <div className='navbarItem'>
                        <Link className="link" to="./products/children's">Children's</Link>
                    </div>
                </div>
                <div className='center'>
                    <div className='navbarItem'>
                        <Link className="link" to='/'>YUZUSTORE</Link>
                    </div>
                </div>
                <div className='right'>
                    <div className='icons'>
                        <div className='search-bar'>
                            <button><SearchOutlinedIcon/></button>
                            <input type="text" placeholder='Search'></input>
                        </div>
                        <PersonOutlineOutlinedIcon/>
                        <FavoriteBorderOutlinedIcon/>
                        <div className='cartIcon'>
                            <ShoppingCartOutlinedIcon onClick={() => setCartOpen(!cartOpen)}/>
                            <span>{quantity}</span>
                        </div>
                    </div>
                </div>
            </div>
            {cartOpen && <Cart/>}
        </div>
    )
}

export default Navbar