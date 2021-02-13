import React from "react";
import "./ProfileCard.css";
function ProfileCard({
  id,
  name,
  photo,
  active,
  skill,
  userid,
  location,
  organization,
  jobTitle,
}) {
  return (
    <div className="profile-card">
      <div className="card-container">
        <div className="details">
          <img className="round" src={photo} alt={name} />
          <div className="minor-details">
            <h3>
              {name} {active && <span className="pro">PRO</span>}
            </h3>
            <h6>
              {organization} ,{location}
            </h6>
            <p>{jobTitle}</p>
          </div>
        </div>

        <div className="skills">
          <h6>Skills</h6>
          <ul>
            {skill.map(({ name }) => (
              <li>{name}</li>
            ))}
          </ul>
          <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary ghost">Following</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
