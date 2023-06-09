import styled from 'styled-components';
import { motion } from 'framer-motion';
export const TrackerContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const NavigationBarStyled = styled.div`
    display: flex;

    flex-direction: row;
    width: 100%;
    height: 60px;
    text-align: center;
    padding: 10px;
    justify-content: space-between;
    background-color: black;

    h3 {
        width: 40px;
        height: 40px;
        background-color: red;
        border-radius: 50%;
    }
`;

export const TrackerHeadingStyled = styled(motion.div)`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 60px; */
    color: white;

    h2 {
        text-align: center;
    }
    h4 {
        margin-left: 30px;
        display: flex;
        flex-direction: row;
        color: black;
    }
    button {
        color: black;
    }
`;
export const JobContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 10em 0px 10em;
    flex-wrap: wrap;
    width: 100%;
`;
export const Test = styled.div`
    display: flex;
    color: yellow;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 3px;
    /* align-items: center; */
    padding: 20px;
    margin-top: 2em;
    height: fit-content;
    width: 40%;
    background-color: #485569;
    box-shadow: 0 0px 20px rgba(0, 0, 0, 0.15);
    color: white;
    .name_title {
        /* font-size: 20px; */
        display: flex;
        flex-direction: column;
    }
    .date_status {
        h4 {
            padding: 5px;
            background-color: white;
            border-radius: 20px;
            color: black;
        }
        display: flex;
        flex-direction: column;
    }
    button {
        color: black;
    }
    &:hover {
        box-shadow: 0 0px 20px rgba(0, 0, 0, 0.5);
    }
`;
