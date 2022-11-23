import React from 'react'
import '../assets/CSS/Login.css'
import cust from '../assets/IMAGE/svg.svg'

function Login() {
  return (
    <div className="container">
        <div className="left">
            <img src={cust} alt=""/>
        </div>
        <div className="right">
            <div className="back">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8625 3.06385L13.3792 1.6626L5.13751 9.5001L13.3875 17.3376L14.8625 15.9363L8.08751 9.5001L14.8625 3.06385Z" fill="#8692A6"/>
                </svg>
                <a href="#">Kembali</a>
            </div>
            <form action="">
                <div className="heading">
                    <h1>Masuk</h1>
                    <h3 style={{color : "#8692A6"}}>Jika Anda Sudah Terdaftar Maka Anda bisa Masuk Dengan Email Dan Password</h3>
                </div>
                <div className="input">
                    <label htmlFor="">Email</label>
                    <input type="text" id='Email' />
                </div>
                
                <div className="input">
                    <label htmlFor="">Password</label>
                    <input type="text" id='password' />
                </div>

                <div className="remember">
                    <span><input type="Checkbox" />Ingat Saya</span>
                    <a href="#"> Lupa Password </a>
                    
                </div>

                <input type="submit" id='Masuk' value="Masuk"/>
                <p > Belum Punya Akun ? <a href="#">Daftar</a></p>

            </form>
        </div>
    </div>
  )
}

export default Login