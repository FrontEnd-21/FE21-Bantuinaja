import React from "react";

// CSS
import "../assets/CSS/Login.css";

// Image
import imglogin from "../assets/IMAGE/Login.svg";

// Bootstrap
import Card from "react-bootstrap/Card";

import Form from "react-bootstrap/Form";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import BreadcrumbItem from "react-bootstrap/esm/BreadcrumbItem";

// Icons
import { FaChevronLeft } from "react-icons/fa";

function Login() {
  return (
    <>
      <Card className='Login'>
        <Card.Body className='Wrap-Login'>
          <Card.Img src={imglogin} alt='' className='Img'></Card.Img>
        </Card.Body>

        <Card.Body className='Wrap-Login'>
          <Breadcrumb className='i-back'>
            <Breadcrumb.Item href='/'>
              <FaChevronLeft />
              Kembali
            </Breadcrumb.Item>
          </Breadcrumb>

          <Card.Title className='Login-Title'>Masuk</Card.Title>
          <Card.Subtitle className='Login-Subtitle'>
            Jika Anda sudah Terdaftar Maka Anda bisa Masuk dengan email dan
            Password
          </Card.Subtitle>

          <Form className='Form'>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Alamat Email</Form.Label>
              <Form.Control type='email' placeholder='Masukan Email' />
              <Form.Text className='text-muted'>
                Kami Tidak akan menyebarkan Informasi tentang anda.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Ingat Saya' />
            </Form.Group>
            <div className='sub'>
              <button>Masuk</button>
              <a href='/Register' className='Daftar'>
                Belum Memiliki Akun? Daftar
                <a href='/' className='Daftar'>
                  Lupa Password?
                </a>
              </a>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Login;
