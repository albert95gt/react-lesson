import PropTypes from 'prop-types'


export const FeauteresListItem = ({ title, text}) => {
    return <>
        <h3>{title}</h3>
        <p>{text }</p>
    </>
}

FeauteresListItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}