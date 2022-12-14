import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='left'>
                <div className='item'>
                    <span>USD</span>
                    <KeyboardArrowDownOutlinedIcon/>
                </div>
                <div className='item'>
                    <Link className="link" to="./products/women">Women</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="./products/man">Man</Link>
                </div>
                <div className='item'>
                    <Link className="link" to="./products/children">Children</Link>
                </div>
            </div>
            <div className='center'>
                <div className='item'>
                    <Link className="link" to='/'>YUZUSTORE</Link>
                </div>
            </div>
            <div className='right'>
                <div className='item'>
                    <Link className="link" to='/'>Home</Link>
                </div>
                <div className='item'>
                    <Link className="link" to='/'>About</Link>
                </div>
                <div className='item'>
                    <Link className="link" to='/'>Contact Us</Link>
                </div>
                <div className='icons'>
                    <SearchOutlinedIcon/>
                    <PersonOutlineOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>
                    <div className='cartIcon'>
                        <ShoppingCartOutlinedIcon/>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar