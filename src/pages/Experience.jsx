import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date="2021 - 2024"
          iconStyle={{background: "#3e497a", color: "@fff"}}
          icon={<SchoolIcon></SchoolIcon>}
        >
          <h3 className='vertical-timeline-element-title'>
            University of Southern California, Los Angeles, CA
          </h3>
          <p>B.S. Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date="June 2022 - August 2022"
          iconStyle={{background: "#e9d35b", color: "@fff"}}
          icon={<WorkIcon></WorkIcon>}
        >
          <h3 className='vertical-timeline-element-title'>
            Cisco Systems, San Jose, CA
          </h3>
          <p>Cloud Networking Infrastructure Group</p>
          <p>Software Engineer Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date="May 2023 - August 2023"
          iconStyle={{background: "#e9d35b", color: "@fff"}}
          icon={<WorkIcon></WorkIcon>}
        >
          <h3 className='vertical-timeline-element-title'>
            Cisco Systems, San Jose, CA
          </h3>
          <p>Data Center Networking Group</p>
          <p>Software Engineer Intern</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date="August 2024 - Present"
          iconStyle={{background: "#E6E6FA", color: "@fff"}}
          icon={<PlayArrowIcon></PlayArrowIcon>}
        >
          <h3 className='vertical-timeline-element-title'>
            Cisco Systems, San Jose, CA
          </h3>
          <p>Nexus Dashboard UI Group</p>
          <p>Software Engineer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience