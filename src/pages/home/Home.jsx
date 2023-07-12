import React from 'react'
import "../home/Home.scss";
import imagen from '../../assets/Delivery adress.png';
import imagenPromo1 from "../../assets/Promo 1.png"
import imagenPromo2 from "../../assets/Promo 2.png"
import imagenRestaurantCard from "../../assets/Restaurant card.png"
import imagenRestaurantCard1 from "../../assets/Restaurant card (1).png"
import imagenRestaurantCard2 from "../../assets/Restaurant card (2).png"
import categories from "../../assets/Categories.png"


const Home = ()=> {
  return(
    <>
    <div className='logo-Home'>
    <img src={imagen} alt="imagen-Home" />
    </div>

    <div className='Promo1'>
    <img src={imagenPromo1} alt="imagen-Promo1" />
    </div>

    <div className='Promo2'>
    <img src={imagenPromo2} alt="imagen-Promo2" />
    </div>

    <div className='Text'>
    <h5>Restaurants and cafes</h5>
    </div>

    <div className='categoriesBotonesFiltrado'>
    <img src={categories} alt="imagen-Promo2" />
    </div>

  {/* <div className='button-container'>
    <button type="submit" className="buttonAll ">
         All
        </button>

        <button type="submit" className="buttonPizza ">
        Pizza
        </button>

        <button type="submit" className="buttonHamburguesa ">
         Hamburguesa
        </button>
        </div> */}

        <div className='imagenRestaurantCard'>
    <img src={imagenRestaurantCard} alt="imagen-Promo2" />
    </div>

    <div className='imagenRestaurantCard1'>
    <img src={imagenRestaurantCard1} alt="imagen-Promo2" />
    </div>

    <div className='imagenRestaurantCard2'>
    <img src={imagenRestaurantCard2} alt="imagen-Promo2" />
    </div>
      {/* <nav className='FilterButton'>
        <li>all</li>
        <li>Pizza</li>
        <li>Hamburgesa</li> 
        
      </nav> */}
    </>
  )
}

export default Home;