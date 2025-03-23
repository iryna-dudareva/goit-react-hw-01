import React from 'react'
import css from './FriendListItem.module.css'


const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={isOnline ? css.online : css.offline}>
                {isOnline ? "online" : "offline"}
            </p>
        </div>
    )
}

export default FriendListItem