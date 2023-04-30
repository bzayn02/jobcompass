import React, { useEffect, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import {
  Container,
  JobContainer,
  NavigationBarStyled,
  Test,
  TrackerContainer,
  TrackerHeadingStyled,
} from './TrackerStyled';
import content from './content';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Modal from './Modal';
import TopNav from '../../components/layout/Nav';

export default function Tracker() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        console.log(show);
    }, [show]);

  return (
    <TrackerContainer>
      <TopNav/>
      <div>
        <TrackerHeadingStyled>
          <h2>Job Tracker</h2>
          <h4>
            <AiFillPlusCircle />
            <button onClick={()=>setShow(true)}>Add Page</button>
          </h4>
        </TrackerHeadingStyled>
        {show &&<Modal/>}
        <JobContainer>
          {content.map((item) => (
            <Container>
              <div className="name_title">
                <p>{item.Company_Name}</p>
                <p>{item.Job_Title}</p>
              </div>

              <div className="date_status">
                <h4>{item.Status}</h4>

                <p>{item.Date}</p>
              </div>
            </Container>
          ))}
        </JobContainer>
      </div>
    </TrackerContainer>
  );
}
