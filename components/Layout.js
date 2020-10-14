import Head from 'next/head'
import Footer from './Footer'
import NavBar from './NavBar';

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>TBD App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="sweetalert2/dist/sweetalert2.all.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous"></script>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
          <div className="main">
            <NavBar alert_token={props.alert_token} name={props.name}></NavBar>
                {props.children}
            <Footer></Footer>
          </div>
    </>
  )
}
