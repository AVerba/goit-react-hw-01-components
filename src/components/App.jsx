
import 'normalize.css';
import {Profile} from './Profile'
import {Statistics} from './Statistic'
import {TransactionsList} from './TransactionsList'



export const App = ({data,statisticDB,transactions} ) => {
console.log(statisticDB)
  return (
    <div>
      <Profile {...data}/>
      <Statistics  {...statisticDB}/>
      <TransactionsList {...transactions}/>


    </div>
  );
};
