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
<<<<<<< HEAD
  
  const [email, setEmail] = useState("");
=======
  const [username, setName] = useState("");
>>>>>>> 2ec2fd42616b25fffffd7346f5ff9f5082b65f77
  const [password, setPassword] = useState("");
  const [success , setSuccess] = useState(false);

  const handleUserName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
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
=======
    console.log("Form berhasil disubmit");
    axios
      .post("https://be-9.up.railway.app/auth/login", {
        username: username,
        password: password,
      })
>>>>>>> 2ec2fd42616b25fffffd7346f5ff9f5082b65f77

    if(success === 200){
      setSuccess(true)
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
              <Form.Label>Nama Anda</Form.Label>
              <Form.Control
<<<<<<< HEAD
                type='text'
                placeholder='Masukan Email'
                value={email}
=======
                type='name'
                placeholder='Masukan Nama Lengkap'
                value={username}
>>>>>>> 2ec2fd42616b25fffffd7346f5ff9f5082b65f77
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
                placeholder='Masukan Password'
                value={password}
                onChange={handlePassword}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Ingat Saya' />
            </Form.Group>
            <div className='sub'>
              <Link to='/' className='button'>
                <button type='submit' value='Login'>
                  Masuk
                </button>
              </Link>
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
