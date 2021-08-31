import PropTypes from 'prop-types';
import styled from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styled.FriendList}>
      {friends.map(friend => (
        <li className={styled.item} key={friend.id}>
          <span className={friend.isOnline ? styled.statusOn : styled.statusOff}></span>
          <img className={styled.avatar} src={friend.avatar} alt={friend.name} width="48" />
          <p className={styled.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};
