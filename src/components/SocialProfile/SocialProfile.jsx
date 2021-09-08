import PropTypes from 'prop-types';
import { ProfileStats } from './stats';
import styled from './SocialProfile.module.css';

export const SocialProfile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={styled.profile}>
      <div className={styled.description}>
        <img src={avatar} alt="Аватар пользователя" className={styled.avatar} width="100" />
        <p className={styled.name}>{name}</p>
        <p className={styled.tag}>@{tag}</p>
        <p className={styled.location}>{location}</p>
      </div>
      <ProfileStats stats={stats} />
    </div>
  );
};

SocialProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
