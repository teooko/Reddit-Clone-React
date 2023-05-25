import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export const FeedDropDown = () => {
    return (
        <button class="dropDown">
            <div class="dropDownSelected">
                <FontAwesomeIcon icon={faHouse}
                    style={{
                        color: '#d7dadc',
                        fontSize: '20px',
                        marginRight: '8px'
                    }} />
                Home
            </div>

            <FontAwesomeIcon icon={faChevronDown} style={{ size: '20px' }} />
        </button>
    )
}
