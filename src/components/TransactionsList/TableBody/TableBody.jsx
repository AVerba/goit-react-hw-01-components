import  style from './TableBody.module.css'

export const TableBody = (data) => {
  const dataList=Object.values(data)

  return (
    <tbody className={style.body}>
    {
      dataList.map(({id,type,amount,currency})=>
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      )
    }
    </tbody>


  );
}
