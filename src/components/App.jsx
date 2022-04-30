
import 'normalize.css';
import {Profile} from './Profile'



export const App = (data ) => {

  return (
    <div>
      goit-react-hw-01-components
      <Profile {...data}/>
    </div>
  );
};
