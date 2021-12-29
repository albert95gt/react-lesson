import PropTypes from 'prop-types'
import {  FeauteresListItem } from "./FeaturesListItem";

export const FeautureList = ({ features }) => {
    return (
        <ul>
            { features.map(({ title,text }) => {
                return <li key={title}>
                        <FeauteresListItem title={title} text={text} />
                       </li>
            }) }
        </ul>
    )
}

FeautureList.propTypes = {
    features: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired, 
}