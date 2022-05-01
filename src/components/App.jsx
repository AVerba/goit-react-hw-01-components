
import 'normalize.css';
import {Profile} from './Profile'
import {Statistics} from './Statistic'
import {TransactionsList} from './TransactionsList'
import {FriendsList} from './FriedsList';




export const App = ({data,statisticDB,transactions,friendsDB} ) => {
console.log(statisticDB)
  return (
    <div>
      <Profile {...data}/>
      <Statistics  {...statisticDB}/>
      <TransactionsList {...transactions}/>
      <FriendsList {...friendsDB}/>


    </div>
  );
};
