import React from 'react';
import MainLayout from '../components/layout/MainLayout';

import { MakeStyled } from '../pages/DashboardStyled';
// import styled from 'styled-components';

const Dashboard = () => {
    return (
        <MainLayout>
            <div>
                <h1>OverView</h1>
                <div className="card_box d-flex flex-wrap justify-content-around space-x-4 text-slate-200 m-6 ">
                    <div className="appS text-center bg-slate-600 p-6 mt-3 w-30 hover:bg-white hover:text-black">
                        <h2>Application Submit</h2>
                        <span>10</span>
                    </div>
                    <div className="Upinterview text-center bg-slate-600 w-30 p-6 mt-3 hover:bg-white hover:text-black">
                        <h2>Upcoming Interview</h2>
                        <span>30/04/2023</span>
                    </div>
                    <div className="EmailFollow text-center bg-slate-600 w-30 p-6 mt-3 hover:bg-white hover:text-black ">
                        <h2>Email Follow Up</h2>
                        <span>6</span>
                    </div>
                    <div className="PrepIn text-center bg-slate-600 w-30 p-6 mt-3 hover:bg-white hover:text-black">
                        <h2>Prepare Interview With Ai </h2>
                        {/* <span>10</span> */}
                    </div>

                    <div className="OptR text-center bg-slate-600 w-30 p-6 mt-3 hover:bg-white hover:text-black">
                        <h2>Optimize Resume </h2>
                        {/* <span>10</span> */}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Dashboard;
