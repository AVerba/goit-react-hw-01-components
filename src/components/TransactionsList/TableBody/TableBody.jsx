import style from './TableBody.module.css'
import PropTypes from "prop-types";

export const TableBody = ({transactionsData}) => {


  return (
    <tbody className={style.body}>
    {
      transactionsData.map(({id, type, amount, currency}) =>
        <tr className={style.item} key={id}>
          <td className={style.itemCell}>{type}</td>
          <td className={style.itemCell}>{amount}</td>
          <td className={style.itemCell}>{currency}</td>
        </tr>
      )
    }
    </tbody>
  );
}
TableBody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
