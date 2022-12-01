import React, { useContext, useState } from "react";


// CSS
import "../assets/CSS/Login.css";

// Image
import imglogin from "../assets/IMAGE/Login.svg";

// Bootstrap
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

// Icons
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "./Home";
import axios from "axios";



const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success , setSuccess] = useState(false);

  const handleUserName = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://be-9.up.railway.app/auth/login', {
      username : email, 
      password : password
    })
    .then(response => {
      console.log(response.data.status);
      setSuccess(response.data.status)
      
    }).catch(error => {
      console.log(error)
    })

    if(success === 200){
      setSuccess(true)
      console.log(success)
      alert('berhasil')
    } else {
      alert('Gagal Username dan Password Salah')
    }
    
    
  }
  return (
    <>
    { success ? (
      <section>
        <h1>Berhasil Login</h1>
        <Link to={"/"}>
        Home
        </Link>
      </section>
    ) : (
      <Card className='Login'>
        <Card.Body className='Wrap-Login'>
          <Card.Img src={imglogin} alt='' className='Img'></Card.Img>
        </Card.Body>

        <Card.Body className='Wrap-Login'>
          <Link to='/' className='i-back'>
            <FaChevronLeft />
            Kembali
          </Link>

          <Card.Title className='Login-Title'>Masuk</Card.Title>
          <Card.Subtitle className='Login-Subtitle'>
            Jika Anda sudah Terdaftar Maka Anda bisa Masuk dengan email dan
            Password
          </Card.Subtitle>

          <Form className='Form' onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Alamat Email</Form.Label>
              <Form.Control
                type='text'
                placeholder='Masukan Email'
                value={email}
                onChange={handleUserName}
                required
              />
              <Form.Text className='text-muted'>
                Kami Tidak akan menyebarkan Informasi tentang anda.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={handlePassword}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Ingat Saya' />
            </Form.Group>
            <div className='sub'>
              {/* <Link to='/' className='button'> */}
              <button type='submit' value='Login'>
                Masuk
              </button>
              {/* </Link> */}
              <Link to='/register' className='Daftar'>
                Belum Memiliki Akun? Daftar
              </Link>

              <Link to='/' className='Daftar'>
                Lupa Password?
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    )}
    </>
  );
};

export default Login;
