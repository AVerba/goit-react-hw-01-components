import  style from './TableHead.module.css'

export const TableHead = () => {
  return (
    <thead className={style.head}>
    <tr className={style.head}>
      <th className={style.headCell}>Type</th>
      <th className={style.headCell}>Amount</th>
      <th className={style.headCell}>Currency</th>
    </tr>
    </thead>

  );
}
