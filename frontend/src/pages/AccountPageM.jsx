import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdModeEditOutline } from 'react-icons/md';
import ACM from '../components/AccountPageM.module.css';
import myphoto from '../images/myphoto.jpeg';
import AuthContext from '../store/auth-context';
const AccountPageM = () => {

  const authctx = useContext(AuthContext);
  return (
    <>
      <div className={ACM.container}>
        <div className={ACM.img_container}>
          {authctx.isLoggedIn ?
            <img
              className={ACM.profile_img}
              src={myphoto}
              alt=""
            />
            : <FaUserCircle size={220} color={`var(--shadow-color)`} className={ACM.profile_img} />
          }
        </div>
        <div className={ACM.info_container}>
          <div className={ACM.username_txt}>
            <h1>John Wick</h1>
            <button className={ACM.edit_btn}>
              <MdModeEditOutline size={40} color={`var(--text-color-dark)`} />
            </button>
          </div>
          <div className={ACM.email_txt}>
            <h3>mrwickbabayaga@gmail.com</h3>
          </div>
        </div>
        <div className={ACM.footer}>
          <div className={ACM.btn_container}>
            <button>Logout</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default AccountPageM;