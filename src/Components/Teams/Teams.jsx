import { team } from "../../data";
import OptimizedImage from "../OptimizedImage";
import "./Teams.css"

const Teams = () => {
  return (
    <div className='teams-container'>
        <div className="teams-section1">
            <h2 className="teams-section1-text1">
                we work with only the <span className="teams-section1-text1-span">best team & leads</span>
            </h2>
        </div>
        <div className="teams-section2-wrapper">
            {team.map((item, index) => (
                <div key={item.id} className="team-details">
                    <OptimizedImage 
                        src={item.image}
                        alt={`${item.name} - ${item.title}`}
                        className="team-details-image"
                        priority={index < 2 ? 'high' : 'low'} // Prioritize first two team members
                    />
                    <h5 className="team-details-name">{item.name}</h5>
                    <p className="team-details-title">{item.title}</p>
                </div>
            ))}
        </div>
        <p className="teams-section3">
            At DOT Solutions, we have assembled a team of remarkably talented individuals who possess an unwavering passion for their craft. The Team share a common purpose—to create awe-inspiring experiences that resonate deeply with audiences and leave a lasting impression.
        </p>
    </div>
  );
};

export default Teams;