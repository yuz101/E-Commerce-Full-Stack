import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='categories'>
        <div className='col'>
            <div className='row'>
                <img src="https://www.modernretail.co/wp-content/uploads/sites/5/2021/12/HCO_2021_Holiday_One_Hero_1-scaled.jpg"/>
                <button>
                    <Link className='link' to="./products/sale">Sales</Link>
                </button>
            </div>
            <div className='row'>
                <img src="https://www.rollingstone.com/wp-content/uploads/2022/04/ANF_SUMMER_1_2022_GETAWAY_SHOP_GOLF_SHOP_MENS_GROUP2_FILM_2166-e1650567955146.jpg?w=1581&h=1054&crop=1"/>
                <button>
                    <Link className='link' to="./products/men's">Shop Men's</Link>
                </button>
            </div>
        </div>
        <div className='col'>
            <div className='row'>
                <img src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                <button>
                    <Link className='link' to="./products/women's">Shop Women's</Link>
                </button>
            </div>
        </div>
        <div className='col col-l'>
            <div className='row'>
                <img src= "https://img.abercrombie.com/is/image/anf/Iv-2-A-MAR-WK-3-Category-WOMENS-DoubeInLine-GetawayShop-DoubleInLine-option2.jpg"/>
                <button>
                    <Link className='link' to="./products/new-season">Shop New Season</Link>
                </button>
            </div>
            <div className='row'>
                <div className='row'>
                    <img src="https://img.abercrombie.com/is/image/anf/YPB-MAR-WK-3-YPB-USCA-MOBILE-NAV-ESPOT_F.png"/>
                    <button>
                        <Link className='link' to="./products/activewear">Shop Activewear</Link>
                    </button>
                </div>
                <div className='row'>
                    <img src="https://images.squarespace-cdn.com/content/v1/58142465e6f2e15be2f723ae/1485292626636-NZQM1QJIBT43VQXM2CLV/E_SATCHEL_BLACK_RGB_CROPPED_01_PORTRAIT.jpg?format=2500w"
    />
                    <button>
                        <Link className='link' to="./products/accessories">Shop Accessories</Link>
                    </button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories