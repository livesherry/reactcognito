export default function Footer(props) {
    return (
        <div style={{backgroundColor: "#026BFF"}} className="footer">
                <br></br>
                <div className="row container-fluid">
                    <div className="col-md-10">
                        <p className="white-text">&copy; 2020 TDB All rights reserved.</p>
                    </div>
                    <div className="col-md-2 col-sm-12 footer-icons-container">
                        <span className="footer-icons"><a href="https://twitter.com" target="_blank"><i class="fa fa-twitter"></i></a></span>
                        <span className="footer-icons"><a href="https://instagram.com" target="_blank"><i class="fa fa-instagram"></i></a></span>
                        <span className="footer-icons"><a href="https://telegram.org" target="_blank"><i class="fa fa-telegram"></i></a></span>
                    </div>
                </div>
                <br></br>
        </div>
    );
}