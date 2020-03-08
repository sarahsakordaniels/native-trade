import React from 'react'
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'


// want different titles, images - destructuring title from props so this is the same as props.title
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    return(
    
    <div className={`${size} menu-item`} onClick={() => history.push(`/shop${match.url}${linkUrl}`)}>
        <div 
            className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className="content">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className="subtitle"> SHOP NOW </span>
        </div>
    </div>
    )
}

export default withRouter(MenuItem)
// will return us back a menu item component with access to location, match, and history props