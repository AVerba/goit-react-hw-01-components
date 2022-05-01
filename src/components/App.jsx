
import 'normalize.css';
import {Profile} from './Profile'
import {Statistics} from './Statistic'
import {TransactionsList} from './TransactionsList'
import {FriendsList} from './FriedsList';
const user = require('../database/user.json');
const statisticDB = require('../database/Statistics.json');
const transactions =require('../database/transactions.json');
const friendsDB = require('../database/friends.json');



export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticDB}/>
      <FriendsList friends={friendsDB}/>
      <TransactionsList transactions={transactions}/>

    </div>
  );
};
