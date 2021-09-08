import PropTypes from 'prop-types';
import styled from './Statistics.module.css';
import randomColor from '../../helpers/randomColor';

export default function Statistic({ title, stats }) {
  return (
    <section className={styled.statistics}>
      {title && <h2 className={styled.title}>{title}</h2>}
      <ul className={styled.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={styled.item} key={id} style={{ backgroundColor: randomColor() }}>
            <span className={styled.label}>{label}</span>
            <span className={styled.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
