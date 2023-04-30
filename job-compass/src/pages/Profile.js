import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { FormStyled, ModalStyled, PageStyled } from './Tracker/ModalStyled';

const Profile = () => {
    return (
        <div>
            <MainLayout>
                <PageStyled>
                    <FormStyled>
                        <h1>My Profile</h1>
                        <div class="form-group">
                            <input
                                type="name"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter Company Name"
                            />
                            <input
                                type="name"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter HR Person"
                            />
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                            />
                            <input
                                type="name"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Position Applied "
                            />
                            <input
                                type="name"
                                class="form-control"
                                id="exampleInputPassword1"
                                placeholder="Position Applied"
                            />
                            <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Applied Date"
                            />
                            <input type="file" />
                            <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                placeholder="Job Description"
                                rows="3"
                            ></textarea>
                        </div>
                    </FormStyled>
                    <button className="btn btn-danger">Add Job</button>
                </PageStyled>
            </MainLayout>
        </div>
    );
};

export default Profile;
