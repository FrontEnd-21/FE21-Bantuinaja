import React from "react";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

// Icons
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdmLogin = () => {
  return (
    <>
      <div>
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
            <Link to='/login' className='Daftar'>
              Sudah Punya akun? Masuk
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AdmLogin;
