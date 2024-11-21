import '../src/styles/allstyles.css'
import {RouterProvider} from 'react-router-dom' ; 
import { allroutersfront } from './routes/allroutesf';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
    <Toaster position='bottom-right' toastOptions={{duration:3000}}/>
    <RouterProvider router={allroutersfront}></RouterProvider>
</>
      );
}

export default App;
