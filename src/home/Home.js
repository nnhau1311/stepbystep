import "../App.css";
import logo_app from "../image/logo_app.png";
import splash from "../image/splash.png";
function Home() {
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href={"PrivacyPolicy"}>Privacy Policy</a>
            </li>
          </ul>
          {/* <button className="btn" type="button">
            Subscrice
          </button> */}
        </nav>
      </div>
      <div className="bg-body1">
        <img className="splash" src={splash} />
        <div className="bg-body">
          <p className="content-app">
            Step Step: An application can count the number of steps taken by the
            user to accumulate points.
            <br /> Based on that point the user can be quoted a fund account to
            make the program from perfect or protect the environment.
            <br /> In addition, the development of the remaining pedometer
            application has different values ​​for individuals in particular and
            for shared files such as: helping with health training, bonding
            solidarity; moreover, it still has practical and meaningful values
            ​​for the community.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
