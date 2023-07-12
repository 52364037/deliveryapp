import React from "react";
import { useDispatch, useSelector, } from "react-redux";
import { logoutActionAsync } from "../../redux/actions/userActions";
// import { editActionAsync } from "../../redux/actions/userActions";
import Image from "react-bootstrap/Image";
import './Profile.scss';
import chevron from '../../assets/chevron-left.svg';
import { IoIosCard } from 'react-icons/io';
import { IoIosNotifications } from 'react-icons/io';
import { IoIosGlobe } from 'react-icons/io';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { IoMdPerson } from 'react-icons/io';
import { IoMdPin } from 'react-icons/io';
import { IoMdCall } from 'react-icons/io';
import { IoIosTimer } from 'react-icons/io';
import { IoMdHome } from 'react-icons/io';
import search from '../../assets/search.svg';

const Profile = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log(user);
  const payment = useSelector((store) => store.payment);
  console.log(payment);
  const edit = useSelector((store) => store.edit);
  console.log(edit);

  return (
    <div>
      <div className="Avatar">
        <Image src={user?.avatar} roundedCircle />
      </div>
      <div className="Name_user">
        <h2>{user?.name}</h2>
      </div>

      <button onClick={() => dispatch(logoutActionAsync())}>
        <h3>Logout</h3>
        <div className="chevron">
          <img src={chevron} alt="chevron" />
        </div>
      </button>




      <div className="edit">
        <IoMdPerson className="person-icon" />
        <h3>Acount Edit</h3>
        <div className="chevron1">
          <img src={chevron} alt="chevron1" />
        </div>
      </div>
      {/* <div className="acount_edit">
    <button onClick={() => dispatch(editActionAsync())}>
        Acount Edit
      </button> 
    </div> */}
      <div className="notification">
        <IoIosNotifications className="campana" />
        <h3>Notifications</h3>
        <div className="chevron2">
          <img src={chevron} alt="chevron2" />
        </div>
      </div>
      <div className="payment">
        <IoIosCard className="tarjeta" />
        <h3>Payment</h3>
        <div className="chevron3">
          <img src={chevron} alt="chevron3" />
        </div>
      </div>
      <div className="language">
        <IoIosGlobe className="lenguaje" />
        <h3>Language</h3>
        <div className="chevron4">
          <img src={chevron} alt="chevron4" />
        </div>
      </div>
      <div className="location">
        <IoMdPin className="ubicación" />
        <h3>Location</h3>
        <div className="chevron5">
          <img src={chevron} alt="chevron5" />
        </div>
      </div>
      <div className="faq">
        <IoMdHelpCircleOutline className="preguntas" />
        <h3>FAQ</h3>
        <div className="chevron6">
          <img src={chevron} alt="chevron6" />
        </div>
      </div>
      <div className="support">
        <IoMdCall className="tel" />
        <h3>support</h3>
        <div className="chevron7">
          <img src={chevron} alt="chevron7" />
        </div>
      </div>
      <div className="container_barra">

        <div className="img_home">
          <IoMdHome className="home" />
        </div>

        <figure className="img_search">
          <img src={search} alt="search" />
        </figure>
        <div className="reloj">
          <IoIosTimer className="time" />
        </div>
        <div className="person">
          <IoMdPerson className="persona" />
        </div>
      </div>

    </div>



  );


};




export default Profile;