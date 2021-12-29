import PropTypes from 'prop-types'
import { SocialLinks } from "./SocialLinks";
export const TeamListItem = ({ avatar, name, profession, links }) => {
    return <>
            <img src={avatar} alt={name}/>
            <h3>{name}</h3>
            <p>{profession}</p>
            
           <SocialLinks links={links}/>
            
        </>
    
        
} 

TeamListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    links: PropTypes.shape({
        instagram: PropTypes.string.isRequired,
        twitter: PropTypes.string.isRequired,
        facebook: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired
    }).isRequired,
}