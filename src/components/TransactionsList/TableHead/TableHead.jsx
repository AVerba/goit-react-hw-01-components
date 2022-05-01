import  style from './TableHead.module.css'

export const TableHead = () => {
  return (
    <thead className={style.head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>

  );
}
