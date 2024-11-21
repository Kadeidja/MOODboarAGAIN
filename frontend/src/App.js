import '../src/styles/allstyles.css'
import {RouterProvider} from 'react-router-dom' ; 
import { allroutersfront } from './routes/allroutesf';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <RouterProvider router={allroutersfront}></RouterProvider>
  );
}

export default App;
