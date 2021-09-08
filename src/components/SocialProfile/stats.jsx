import styled from './stats.module.css';

export const ProfileStats = ({ stats }) => {
  return (
    <ul className={styled.stats}>
      <li className={styled.items}>
        <span className={styled.label}>Followers</span>
        <span className={styled.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={styled.label}>Views</span>
        <span className={styled.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={styled.label}>Likes</span>
        <span className={styled.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};
