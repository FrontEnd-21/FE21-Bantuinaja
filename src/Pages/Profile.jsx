import React from 'react'
import { Link  } from 'react-router-dom'
import '../assets/CSS/Profile.css'
import fto from '../assets/IMAGE/123.png'
import ds from '../assets/IMAGE/description.svg'
import dc from '../assets/IMAGE/check_circle_outline.svg'
import lock from '../assets/IMAGE/lock.svg'


function Profile() {
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
            <a href="">Kontak Pribadi</a>
            <a href="">Data Pribadi</a>
        </div>
    </div>
  )
}

export default Profile