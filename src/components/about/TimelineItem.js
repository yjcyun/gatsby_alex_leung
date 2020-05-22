import React from 'react'
import styled from 'styled-components';

const TimelineItem = ({ data }) => {
  const { position, desc, company, date } = data;

  return (
    <TimeItemWrapper>
      <div className="timeline-item-content">
        <h2>{position}</h2>
        {desc.map(i => (
          <p key={i.id}>{i.name}</p>
        ))}
        <div className="time">
          <h4>{company}</h4>
          <span>{date}</span>
        </div>
      </div>
    </TimeItemWrapper>
  )
}

const TimeItemWrapper = styled.div`
  display: flex;
  justify-content:flex-end;
  padding-right: 2rem;
  margin: 5rem 0;
  width: 50%;
  position: relative;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  &:nth-child(odd){
    align-self:flex-end;
    justify-content:flex-start;
    padding-right: 0;
    padding-left: 2rem;
  }

  &:nth-child(odd)::before{
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

  .timeline-item-content {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &:nth-child(odd) .timeline-item-content {
    align-items: flex-start;
    text-align: left;
  }

  &:nth-child(odd) .time{
    width: 145px;
    position: absolute;
    top: 6px;
    left: -175px;
    text-align: right;
  }

  &:nth-child(even) .time{
    width: 145px;
    position: absolute;
    top: 6px;
    right: -175px;
    text-align: left;
  }

    @media (min-width: 768px) {
    h2{
       font-size: 2.5rem;
    }

    &:nth-child(odd) .time {
      width: 200px;
      left: -230px;
      }

    &:nth-child(even) .time{
      width: 200px;
      right: -230px;
    }
  }
`;

export default TimelineItem
