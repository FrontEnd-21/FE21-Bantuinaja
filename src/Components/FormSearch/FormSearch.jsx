import React from "react";
import "../../assets/CSS/formsearch.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Breadcrumb from "react-bootstrap/Breadcrumb";

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

      <Breadcrumb className='kategori'>
        <Breadcrumb.Item href='/DetailBantuan'>Semua</Breadcrumb.Item>
        <Breadcrumb.Item href='#'>Pendidikan</Breadcrumb.Item>
        <Breadcrumb.Item href='#'>Sembako</Breadcrumb.Item>
        <Breadcrumb.Item href='#'>Dana Tunai</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default FormSearch;
