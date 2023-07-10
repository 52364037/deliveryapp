import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutActionAsync } from "../../redux/actions/userActions";
import Image from "react-bootstrap/Image";
import './Profile.scss';

const Profile = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log(user);

  return (
    <div>
      <div className="Avatar">
        <Image src={user?.avatar} roundedCircle />
      </div>
      <div className="Name_user">
        <h2>{user?.name}</h2>
      </div>
    <div className="cerrar_sesion">
    <button onClick={() => dispatch(logoutActionAsync())}>
        Logout
      </button> 
    </div>
    </div>
    
  )
    
};
 



export default Profile;