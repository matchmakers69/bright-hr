
import styled from "styled-components";
import { device } from 'styles/breakpoints';


export const Container = styled.div`
   width: 100%;
   max-width: 100%;
   margin: 0 auto;
   padding: 6rem 3rem;
  
    @media ${device.tabletS} {
       max-width: 600px;
    }

    @media ${device.tablet} {
       max-width: 800px;
    }
`;