import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import MainLayout from '../components/layout/MainLayout';

const CV = () => {
    return (
        <MainLayout>
            {' '}
            <div>
                <h1 className="text-center">Optimize your CV.</h1>
                <h3 className="text-center">
                    Create customized CV based on your JOB DESCRIPTION.
                </h3>
                <Card className="">
                    <Form className="m-12">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Job Position</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Job Position"
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Company Name"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Job Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Job Description"
                                className="h-60"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        ></Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            className="d-flex"
                        >
                            Build resume with AI
                        </Button>
                    </Form>
                </Card>
            </div>
        </MainLayout>
    );
};

export default CV;
