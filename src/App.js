import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <div>Advance React</div>

      <Link className='block' to='/refs'>
        Refs
      </Link>
      <Link className='block' to='/renders'>
        Count Renders
      </Link>
      <Link className='block' to='/callback'>
        useCallback
      </Link>
      <Link className='block' to='/custom'>
        useLocalstorage
      </Link>
      <Link className='block' to='/hoc'>
        HOC
      </Link>
      <Link className='block' to='/pure'>
        Pure components
      </Link>
      <Link className='block' to='/lazy'>
        Lazy Suspense
      </Link>
      <Link className='block' to='/dataSuspense'>
        Data fetch Suspense
      </Link>
    </div>
  );
}

export default App;
