import PropTypes from 'prop-types'

import { TeamListItem } from "./TeamListItem";

export const TeamList = ({teamList}) => {
    return (
        <ul>
            {teamList.map(({ avatar, name, profession, links }) => (

                <li key={name}>
                    <TeamListItem 
                        avatar={avatar} 
                        name={name} 
                        profession={profession}
                        links={links}
                    />
                </li>
            )
            )}
        </ul>
    )
}

TeamList.propTypes = {
    teamList: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        profession: PropTypes.string.isRequired,
        links: PropTypes.shape({
            instagram: PropTypes.string.isRequired,
            twitter: PropTypes.string.isRequired,
            facebook: PropTypes.string.isRequired,
            linkedin: PropTypes.string.isRequired
        }).isRequired
    }).isRequired).isRequired
}