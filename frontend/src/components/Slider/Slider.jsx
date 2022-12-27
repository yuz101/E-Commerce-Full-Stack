import { useState } from 'react'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import "./Slider.scss"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        "https://wwd.com/wp-content/uploads/2022/11/HCO.jpg",
        "https://www.rollingstone.com/wp-content/uploads/2022/04/ANF_SUMMER_1_2022_GETAWAY_SHOP_GOLF_SHOP_MENS_GROUP2_FILM_2166-e1650567955146.jpg",
        "https://i.pinimg.com/originals/10/eb/e1/10ebe13acb78f344e66c1fded81ca3da.png",
        "https://www.modernretail.co/wp-content/uploads/sites/5/2021/12/HCO_2021_Holiday_One_Hero_1-scaled.jpg",
      ];

    const prevSlides = () => {setCurrentSlide(currentSlide === 0 ? 2: (prev) => prev - 1)}
    const nextSlides = () => {setCurrentSlide(currentSlide === 2 ? 0: (prev) => prev + 1)}
    return (
        <div className='slider'>
            <div className='images' style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]}/>
                <img className="combine-image"src={data[1]}/>
                <img className="combine-image"src={data[2]}/>
                <img src={data[3]}/>
            </div>
            <div className='icons'>
                <div className='icon' onClick={prevSlides}>
                    <WestOutlinedIcon/>
                </div>
                <div className='icon' onClick={nextSlides}>
                    <EastOutlinedIcon/>
                </div>
            </div>
        </div>
    )
}

export default Slider