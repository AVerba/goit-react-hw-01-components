
import 'normalize.css';
import {Profile} from './Profile'
import {Statistics} from './Statistic'
import {TransactionsList} from './TransactionsList'
import {FriendsList} from './FriedsList';
const data = require('../database/user.json');
const statisticDB = require('../database/Statistics.json');
const transactions =require('../database/transactions.json');
const friendsDB = require('../database/friends.json');



export const App = () => {
  return (
    <div>
      <Profile profile={data}/>
      <Statistics title="Upload stats" stats={statisticDB}/>
      <FriendsList friends={friendsDB}/>
      <TransactionsList transactions={transactions}/>

    </div>
  );
};
