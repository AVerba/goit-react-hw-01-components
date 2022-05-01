import  style from './TableBody.module.css'

export const TableBody = (data) => {
  const dataList=Object.values(data)

  return (
    <tbody className={style.body}>
    {
      dataList.map(({id,type,amount,currency})=>
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
