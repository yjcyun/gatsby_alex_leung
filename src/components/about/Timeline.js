import React from 'react';
import styled from 'styled-components';

const Timeline = ({ exp }) => {
  return (
    <TimelineWrapper className="about-page" >
      <div className="section-center">
        <article>
          <h2 className="about-title">Timeline</h2>
        </article>

        <article>
          {exp.map((item, index) => {
            const { id, company, date, position, desc } = item;
            const even = index % 2;
            return (
              <div key={id} className="timeline-info">
                <ul>
                  <li>
                    <div className="time">
                      <h3>{position}</h3>
                      {desc.map(i => (
                        <p key={i.id}>{i.name}</p>
                      ))}
                    </div>
                    <div className="timline-content">
                      <h4>{company}</h4>
                      <span>{date}</span>
                    </div>
                  </li>
                </ul>
              </div>
            )
          })}

        </article>
      </div>
    </TimelineWrapper>
  )
}

const TimelineWrapper = styled.section`
@media (min-width: 768px) {
  .timeline-info {
    position:relative;
  }

  .timeline-info:before {
    content: '';
    position: absolute;
    left: 50%;
    height: 100%;
    width: 2px;
    background: lightgray;
  }
  .timeline-info ul li {
    position: relative;
    width: 50%;
    padding: 1.8rem 2rem;
  }
  .timeline-info ul li:nth-child(even) {
    text-align: right;
  }
}
`;

export default Timeline
