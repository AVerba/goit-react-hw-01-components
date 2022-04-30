
import 'normalize.css';
import {Profile} from './Profile'
import {Statistics} from './Statistic'



export const App = ({data,statisticDB} ) => {
console.log(statisticDB)
  return (
    <div>
      <Profile {...data}/>
      <Statistics  {...statisticDB}/>


    </div>
  );
};
