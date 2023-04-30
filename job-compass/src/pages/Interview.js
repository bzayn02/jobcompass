import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import ChatGPT from '../components/ChatGPT';

const Interview = () => {
    return (
        <MainLayout>
            <div className="d-flex space-x-7 p-14">
                <div className="max-w-xl">
                    <h1>Interview Preparation</h1>
                    <p>
                        Let our AI powered tool help you to win your next
                        interview. We have 1000s of unique interview questions
                        and answers that will help you stand above your
                        competition.
                    </p>
                </div>
                <ChatGPT />
            </div>
        </MainLayout>
    );
};

export default Interview;
