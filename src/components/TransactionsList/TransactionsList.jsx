import style from './TransactionsList.module.css'
import {TableHead} from './TableHead'
import {TableBody} from './TableBody'

export const TransactionsList = (data) => {

  return (
    <table className={style.transactionHistory}>
      <TableHead/>
      <TableBody {...data}/>
    </table>

  );
}
