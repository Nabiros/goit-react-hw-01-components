import PropTypes from 'prop-types';
import styled from './SocialProfile.module.css';

export default function SocialProfile(props) {
  const { avatar, name, tag, location, followers, views, likes } = props;

  return (
    <div className={styled.profile}>
      <div className={styled.description}>
        <img src={avatar} alt="Аватар пользователя" className={styled.avatar} width="100" />
        <p className={styled.name}>{name}</p>
        <p className={styled.tag}>@{tag}</p>
        <p className={styled.location}>{location}</p>
      </div>

      <ul className={styled.stats}>
        <li className={styled.items}>
          <span className={styled.label}>Followers</span>
          <span className={styled.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styled.label}>Views</span>
          <span className={styled.quantity}>{views}</span>
        </li>
        <li>
          <span className={styled.label}>Likes</span>
          <span className={styled.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

SocialProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
