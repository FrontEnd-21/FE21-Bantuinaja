import React from "react";

// CSS
import "../../assets/CSS/formsearch.css";

// Bootstrap
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

// Router
import { Link } from "react-router-dom";

const FormSearch = () => {
  return (
    <div>
      <Container fluid className='FormC'>
        <Form className='d-flex'>
          <Form.Control
            type='search'
            placeholder='Search'
            className='me-2'
            aria-label='Search'
          />
        </Form>
      </Container>

      <Link className='kategori'>
        <Link to='/DetailBantuan' className='kategori-2'>
          Semua
        </Link>
        <Link to='#' className='kategori-2'>
          Pendidikan
        </Link>
        <Link to='#' className='kategori-2'>
          Sembako
        </Link>
        <Link to='#' className='kategori-2'>
          Dana Tunai
        </Link>
      </Link>
    </div>
  );
};

export default FormSearch;
