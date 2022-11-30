import React, { useState } from "react";
import axios from "axios";

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

const Login = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

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
    console.log("Form berhasil disubmit");
    axios
      .post("https://be-9.up.railway.app/auth/login", {
        username: username,
        password: password,
      })

      .then((response) => {
        console.log(response.data);
      })

      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  };
  return (
    <>
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
                type='name'
                placeholder='Masukan Nama Lengkap'
                value={username}
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
    </>
  );
};

export default Login;
