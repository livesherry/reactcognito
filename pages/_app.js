import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import '../public/main.css';
import 'react-toastify/dist/ReactToastify.css';
import Amplify from 'aws-amplify';
import awsconfig from '../helpers/aws-exports';
Amplify.configure(awsconfig);

function AlertsApp({ Component, pageProps }) {
    return <Component {...pageProps} />
  }

export default AlertsApp;