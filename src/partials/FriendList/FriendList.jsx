import React from 'react'
import css from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'

const FriendList = ({friends}) => {
  return (
    <ul className={css.friend_list}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={css.friend_item}>
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        </li>
        );
      })}
</ul>

  )
}

export default FriendList