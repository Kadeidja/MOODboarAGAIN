import { createBrowserRouter } from 'react-router-dom';
import SignInComp from '../components/signingComponent';
import {Toaster} from 'react-hot-toast';
import LayoutComp from '../pages/layoutPage';
import axios from 'axios';
import LogInComp from '../components/logingComponent';

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true
export const allroutersfront = createBrowserRouter([
    {
      path: '/',
      element:
      <>
      <LayoutComp />,
      <Toaster position='bottom-right' toastOptions={{duration:3000}}/>
      </>,
      children: [
    {
    index: true, 
    element: 
    <>
    <SignInComp/>
    </>,
  },{
          path: '/register',
          element: <SignInComp />  },
          {
            path: '/test',
            element: <LogInComp />  },


]

},
]);