import React, { useState } from 'react'
import '../assets/CSS/Profile.css'
import fto from '../assets/IMAGE/123.png'
import ds from '../assets/IMAGE/description.svg'
import dc from '../assets/IMAGE/check_circle_outline.svg'
import lock from '../assets/IMAGE/lock.svg'
import DataPribadi from '../Components/CardProfile/DataPribadi'
import KontakPribadi from '../Components/CardProfile/KontakPribadi'


function Profile() {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    

    function toggle1() {
        setShow(true)
        setShow1(false)
        
    } 
    function toggle2() {
        setShow1(true)
        setShow(false)
    }
  return (
    <div className='profile'>
        <div className="left">
            <div className="card-foto">
                <img src={fto} alt="" />
                <p>Asep Supardi <br/>
                20 Tahun</p>
            </div>
            <div className="menu-samping">
                <div className="item">
                    <img src={ds} alt="" id='color'/>
                    <a href="">Lengkapi Dokumen</a>
                </div>
                <div className="item">
                    <img src={dc} alt="" />
                    <a href="">Status Bantuan</a>
                </div>
                <div className="item">
                    <img src={lock} alt="" />
                    <a href="">Reset Password</a>       
                </div>
            </div>
        </div>
        <div className="right">
            <div className="head">
                <h1>Lihat/Edit Profil</h1>
            </div>
            <div>
                <ul className='content'>
                    <li onClick={toggle1}  className={show ? 'active' : ''}><p >Kontak Pribadi</p></li>
                    <li onClick={toggle2}  className={show1 ? 'active' : ''}><p>Data Pribadi</p></li>
                </ul>
            </div>
            <div className="isi-content">
                { show1 && <DataPribadi />}
                { show && <KontakPribadi />}
            </div>
        </div>
    </div>
  )
}

export default Profile