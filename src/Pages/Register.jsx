import React from "react";

// CSS
import "../assets/CSS/Login.css";

// Image
import imglogin from "../assets/IMAGE/Login.svg";

// Bootstrap
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Breadcrumb from "react-bootstrap/Breadcrumb";

// Icons
import { FaChevronLeft } from "react-icons/fa";

function Register() {
  return (
    <>
      <Card className='Login'>
        <Card.Body className='Wrap-Login'>
          <Card.Img src={imglogin} alt='' className='Img'></Card.Img>
        </Card.Body>

        <Card.Body className='Wrap-Login'>
          <Breadcrumb className='i-back'>
            <Breadcrumb.Item href='/Login'>
              <FaChevronLeft />
              Kembali
            </Breadcrumb.Item>
          </Breadcrumb>

          <Card.Title className='Login-Title'>Daftar</Card.Title>
          <Card.Subtitle className='Login-Subtitle'>
            Daftar Akun terlebih dahulu agar bisa lanjut
          </Card.Subtitle>

          <Form className='Form'>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control type='name' placeholder='Masukan Nama Lengkap' />
              <Form.Text className='text-muted'>
                Kita Tidak Akan Menyebarkan Informasi Tentang Anda
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Masukan Ulang Password</Form.Label>
              <Form.Control
                type='password'
                placeholder=' Masukan Ulang Password'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Ingat Saya' />
            </Form.Group>
            <div className='sub'>
              <button>Masuk</button>
              <a href='/Login' className='Daftar'>
                Sudah Punya akun? Masuk
              </a>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Register;