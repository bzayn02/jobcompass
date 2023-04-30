import React, { useState } from 'react';
import { Row, Button, Card, Form } from 'react-bootstrap';
import axios from 'axios';
export default function ChatGPT() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const HTTP = 'http://localhost:8000/chat';

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post(`${HTTP}`, { prompt })
            .then((res) => {
                setResponse(res.data);
                console.log(prompt);
            })
            .catch((error) => {
                console.log(error);
            });

        setPrompt('');
    };

    const handlePrompt = (e) => {
        setPrompt(e.target.value);
    };

    return (
        <Row>
            <div className="container container-sm p-1">
                {' '}
                <h1 className="title text-center text-darkGreen">
                    Prepare with AI
                </h1>
                <Card>
                    <Form className="form" onSubmit={handleSubmit}>
                        <div className="form-group p-2">
                            <label htmlFor="" className="pb-2 ">
                                Enter your job description 😁
                            </label>
                            <input
                                className="bg-stone-400 mb-3 p-2 w-100"
                                type="text"
                                placeholder="Search Anything"
                                value={prompt}
                                onChange={handlePrompt}
                            />
                            <Button
                                className="btn btn-accept w-100"
                                type="submit"
                            >
                                {' '}
                                Search 🔎
                            </Button>
                        </div>{' '}
                    </Form>

                    <div className="bg-darkGreen  mt-2 p-1 border-5">
                        <p className="bg-white text-black">
                            {response
                                ? response
                                : 'Hi, I can help you prepare for the interview tailored with the job description and position you provide.'}
                        </p>
                    </div>
                </Card>
            </div>
        </Row>
    );
}
