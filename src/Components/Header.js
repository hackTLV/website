import React, { Component } from "react";
import Countdown from "react-countdown";
import * as moment from "moment";

const style = {
  timeContainer: {
    flexDirection: "row"
  }
};
class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function(network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#organizers">
							organizers
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}.</h1>
            <h3 style={{ color: "white" }}>
              The best fu**ing hackthon in town.
            </h3>
            {/* <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3> */}
            <hr />
            <Countdown
              renderer={({ days, hours, minutes, seconds, completed }) => {
								

								if (completed) {
									return (
										<div stlye={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
										}}>  

										<div style={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											
											padding: 20,
											borderRadius: 20,
										}}>
											<h1 style={{}}>
												The hackthon was started! See you all there! (:
											</h1>
										</div>
										</div>
									)
								}
								return (
                <div style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center'
								}}>
                  <div
                    style={{
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "center",
                      
                    }}
                  >
                    <h1
                      style={{
                        //fontSize: 40,
                        color: "white",
                      }}
                    >
                      {days}:
                    </h1>
                    <h1
                      style={{
                        //fontSize: 40,
                        color: "white",
                      }}
                    >
                      {hours}:
                    </h1>
                    <h1
                      style={{
                        //fontSize: 40,
                        color: "white",
                      }}
                    >
                      {minutes}:
                    </h1>
                    <h1
                      style={{
                        //fontSize: 40,
                        color: "white",
                      }}
                    >
                      {seconds}
                    </h1>
                  </div>
                </div>
              )}}
              date={"06/12/2020"}
            />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
