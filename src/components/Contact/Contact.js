import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Contact/contact.css'

const Contact = () => {
    return (
        <section>
            <div className='container'>
                <div className='row text-center'>
                    <div className='col'>
                        <h1>Contact Me</h1>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nama Lengkap</Form.Label>
                                <Form.Control type="text" placeholder="Masukan Nama" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Masukan Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Pesan</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Kirim
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact