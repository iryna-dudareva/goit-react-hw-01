
import React from 'react'
import css from './Profile.module.css'

const Profile = ({name, tag, location, image, stats, }) => {
  return (
    <div className={css.card}>
  <div>
        <img
          className={css.avatar_pic}
          src={image}
          alt="User avatar"
          width={200}
          height={200}
    />
        <p className={css.n}>{name}</p>
        <p className={css.t}>@{tag}</p>
        <p className={css.loc}>{location}</p>
  </div>

  <ul className={css.stats_list}>
    <li className={css.stats_item}>
          <span className={css.stats_label}>Followers</span>
          <span className={css.stats_value}>{stats.followers}</span>
    </li>
    <li className={css.stats_item}>
      <span className={css.stats_label}>Views</span>
      <span className={css.stats_value}>{stats.views}</span>
    </li>
    <li className={css.stats_item}>
      <span className={css.stats_label}>Likes</span>
      <span className={css.stats_value}>{stats.likes}</span>
    </li>
  </ul>
</div>

  )
}

export default Profile
