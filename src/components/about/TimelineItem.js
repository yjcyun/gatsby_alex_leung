import React, { useEffect } from 'react'
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
const TimelineItem = ({ data, index }) => {
  const { position, desc, company, date } = data;

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    })
  })

  return (

    <TimeItemWrapper>
      <div className="timeline-item-content">
        <div data-aos={`${index % 2 === 0 ? 'fade-left' : 'fade-right'}`}>
          <h2>{position}</h2>
        </div>

        <div className="time" data-aos={`${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}>
          <h4>{company}</h4>
          <span className="date">{date}</span>
        </div>

        <div data-aos={`${index % 2 === 0 ? 'fade-left' : 'fade-right'}`}>
          {desc.map(i => (
            <p key={i.id}>{i.name}</p>
          ))}
        </div>
      </div>
    </TimeItemWrapper>
  )
}

const TimeItemWrapper = styled.div`
  display: flex;
  justify-content:flex-end;
  margin: 5rem 0;
  width: 90%;
  position: relative;
  align-self:flex-end;
  justify-content:flex-start;
  padding-left: 2rem; 

  &:nth-child(odd)::before, &:nth-child(even)::after{
    content: '';
    position:absolute;
    top: 10px;
    left: -5px;
    width:10px;
    height:10px;
    background: rgba(233,33,99,1);
    border-radius:50%;
    box-shadow: 0 0 0 3px rgba(233,33,99,0.2);
    z-index:1;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  p{
    padding-top: 1rem;
  } 

  @media (min-width: 768px) {
     width: 50%;
    align-self:flex-start;
    justify-content:flex-end;
    padding-right: 2rem;

    &:nth-child(odd){
      align-self:flex-end;
      justify-content:flex-start;
      padding-right: 0;
      padding-left: 2rem;
    } 

    &:nth-child(even){
      align-self:flex-start;
      justify-content:flex-end;
      padding-right: 2rem;
    } 

    &:nth-child(even)::before{
      content: '';
      position:absolute;
      top: 10px;
      right: -5px;
      width:10px;
      height:10px;
      background: rgba(233,33,99,1);
      border-radius:50%;
      box-shadow: 0 0 0 3px rgba(233,33,99,0.2);
      z-index:1;
    }

    &:nth-child(even)::after{
      display: none;
    }
  
    .timeline-item-content {
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &:nth-child(odd) .timeline-item-content {
      align-items: flex-start;
      text-align: left;
    }

    &:nth-child(odd) .time{
      position: absolute;
      text-align: right;
      width: 200px;
      left: -230px;
      top:8px;
    }

    &:nth-child(even) .time{
      position: absolute;
      text-align: left;
      width: 200px;
      right: -230px;
      top:8px;
    }
    
    h2 {
      font-size: 2.5rem;
    }

    p {
    padding-top: 0rem;
    } 
  }
`;

export default TimelineItem
