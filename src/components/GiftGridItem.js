import React from 'react'
import PropTypes from 'prop-types'

const GiftGridItem = ({ title,  url  }) => {
    return (
        <div className='card animate__animated animate__fadeInDown'>            
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GiftGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GiftGridItem;
