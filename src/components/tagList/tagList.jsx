import React from 'react'
import { Link } from 'react-router-dom';

const TagsList = (props) => {
    
    return ( 
        <div className="TagList">
                {props.tags.map((tag, index) => {
                    return <span key={index} className="tag">
                        <Link to="#">#{tag}</Link>
                    </span>
                })}
            </div>
     );
}
 
export default TagsList;