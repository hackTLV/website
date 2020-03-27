import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var organizers = this.props.data.organizers.map(function(organizer) {
        return (
          <div key={organizer.name}>
            <h3>
              <a target="_blank" href={organizer.social}>
                {organizer.name}
              </a>
            </h3>
            <p className="info">
              {organizer.occupation} <span>&bull;</span>
              <em className="date">since {organizer.period}</em>
            </p>
            <p>{organizer.description}</p>
          </div>
        );
      });
      var work = this.props.data.work.map(function(work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function(skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="organizers">
        <div className="row organizers">
          <div className="three columns header-col">
            <h1>
              <span>Orgenizers</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{organizers}</div>
            </div>
          </div>
        </div>

        {/* <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div> */}

        {/* <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div> */}
      </section>
    );
  }
}

export default Resume;
