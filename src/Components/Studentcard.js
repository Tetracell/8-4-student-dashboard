import React, { useState } from "react";

const Studentcard = ({ data }) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const handleInfo = () => setMoreInfo((prev) => !prev);

  return (
    <div className="card" id={data.id} key={data.id}>
      <div className="photo">
        <img className="picture" src={data.profilePhoto} alt="student"></img>
      </div>
      <div className="text">
        {data.names.preferredName} {data.names.middleName} {data.names.surname}
        <br></br>
        {data.username}
        <br></br>
        {data.dob}
        <br></br>
      </div>
      <div className="moreInfo">
        {!moreInfo ? (
          <strong onClick={handleInfo} className="hoverPointer">
            Show more...
          </strong>
        ) : (
          <div>
            <strong onClick={handleInfo} className="hoverPointer">
              Show less...
            </strong>
            <div className="infoBox">
              <div className="codewars">
                <h2>Codwars</h2>
                <p>Current Total: {data.codewars.current.total}</p>
                <p>Last Week: {data.codewars.current.lastWeek}</p>
                <p>Goal: {data.codewars.goal.total}</p>
                <p>
                  Precent of Goal Achieved:{" "}
                  {Math.round(
                    (data.codewars.current.total / data.codewars.goal.total) *
                      100
                  )}
                  %
                </p>
              </div>
              <div className="scores">
                <h2>Scores</h2>
                <p>Assignments: {data.cohort.scores.assignments * 100}%</p>
                <p>Projects: {data.cohort.scores.projects * 100}%</p>
                <p>Assessments: {data.cohort.scores.assessments * 100}%</p>
              </div>
              <div className="certifications">
                <h2>Certifications</h2>
                <p>Resume: {data.certifications.resume.toString()}</p>
                <p>LinkedIn: {data.certifications.linkedin.toString()}</p>
                <p>Mock Interview: {data.certifications.github.toString()}</p>
                <p>GitHub: {data.certifications.mockInterview.toString()}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Studentcard;
