import {StatisticItem} from "./StatisticItem";
import PropTypes from 'prop-types';
import style from './Statistics.module.css'


export const Statistics = ({title, stats}) => {
  return (
    <div className={style.container}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={style.list}>
        {
          stats.map(({id, label, percentage}) =>
            <StatisticItem style={{
              color: 'red',
              backgroundColor: 'blue',
            }} key={id} label={label} percentage={percentage}/>)
        }
      </ul>
    </div>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
