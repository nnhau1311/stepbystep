import "../App.css";
import logo_app from "../image/logo_app.png";
import splash from "../image/splash.png";
function ContactUs() {
  return (
    <div className="App">
      <div class="site-header">
        <div class="site-identity">
          <img src={logo_app} width="48" height="48" />
          <a className="logo" href="#">
            {"Bước Bước"}
          </a>
        </div>
        <nav class="site-navigation">
          <ul class="nav">
            <li>
              <a href="/stepbystep">Home</a>
            </li>
            {/* <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li> */}
            <li>
              <a href="/stepbystep/ContactUs">Contact us</a>
            </li>
            <li>
              <a href={"/stepbystep/PrivacyPolicy"}>Privacy Policy</a>
            </li>
          </ul>
          {/* <button className="btn" type="button">
            Subscrice
          </button> */}
        </nav>
      </div>
      <div className="bg-body1">
        <img className="splash" src={splash} />
        <div
          className="bg-body"
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          <h3>Contact Us</h3>
          <p style={{ fontSize: 18, color: "white", textAlign: "center" }}>
            For any questions and support requests, please contact
            <br /> the information below.
          </p>
          <div className="contact">
            <p style={{ fontSize: 20, fontWeight: "bold" }}>
              Email:{" "}
              <a style={{}} href="mailto:fis.tdc.hcm@gmail.com">
                fis.tdc.hcm@gmail.com
              </a>
            </p>
            <p style={{ fontSize: 20, fontWeight: "bold" }}>
              Address: FPT Tan Thuan 3, Sang Tao Street, Tan Thuan Dong Ward,
              District 7, Ho Chi Minh City
            </p>
            <p style={{ fontSize: 20, fontWeight: "bold" }}>
              Hotline: +84 944 590 453
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
