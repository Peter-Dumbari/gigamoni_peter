import React from "react";
import Logo from "../assets/images/Logo.png";
import ".././pages/Dashboard.css";
import "../pages/Transactions.css";
import NairaSign from "../assets/images/nairasign.png";
import { Link } from "react-router-dom";


export default function DashBoard() {
  return (
    <div className="dashboard__containers">
      <div className="navbar__container">
        <p>Wallet Ballance N0:00</p>
      </div>
      <div className="dashboard__container__container">
        <div className="side__Nav">
          <img src={Logo} alt="logo" className="sidenav__image" />
          <ul className="sidenav__items">
            <li>
              <a href="/dashboard">Dasboard</a>
            </li>
            <li>
              <a href="/transactions">Transaction</a>
            </li>
            <li>
              <a href="/">IPOs</a>
            </li>
            <li>
              <a href="/">Wallet</a>
            </li>
            <li className="settings"><h5 className="dropbtn">Settings</h5>
    <div class="dropdown-content">
      <Link to="/profile" className="profile__setting">Profile Setting</Link>
      <Link to="banksetting" className="bank__setting">Bank Setting</Link>
    </div></li>
          </ul>
        </div>
          <div className="transaction__container">
              <div className="transaction__items">
                  <div className="transactions">
                      <div className="transaction__heading">
                          <h4>Transactions</h4>
                          <h6>Investment list</h6>
                      </div>
                      <div className="transaction__managers">
                          <div className="buttons">
                              <button className="investiment__button">Investment</button>
                              <Link to="/withdraw">
                              <button  className="withdraw__button" >Withdraws</button>
                              </Link>
                          </div>
                          <div className="search__container">
                              <input type="search" className="form-control"/>
                              <button className="search__button">search</button>
                          </div>
                      </div>
                        <div className="transactions__table">
                            <table>
                                <tr>
                                    <th>IPO</th>
                                    <th>Deposit</th>
                                    <th>Expected</th>
                                    <th>Duration</th>
                                    <th>Percentage</th>
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td>Eeo 1</td>
                                    <td>N9,000.00</td>
                                    <td>N9,600.00</td>
                                    <td>9 days left</td>
                                    <td>12%</td>
                                    <td><h6 className="completed">Completed</h6></td>
                                </tr>
                                <tr>
                                    <td>Eeo 1</td>
                                    <td>N9,000.00</td>
                                    <td>N9,600.00</td>
                                    <td>9 days left</td>
                                    <td>12%</td>
                                    <td><h6 className="ongoing">On going</h6></td>
                                </tr>
                                <tr>
                                    <td>Eeo 1</td>
                                    <td>N9,000.00</td>
                                    <td>N9,600.00</td>
                                    <td>9 days left</td>
                                    <td>12%</td>
                                    <td><h6 className="completed">Completed</h6></td>
                                </tr>
                            </table>
                        </div>
                  </div>
                  <div className="transaction__last__row">
                        <img src={NairaSign} alt="" className="row__image"/>
                        <div className="row__text">
                            <h5>N900,000.00</h5>
                            <h6>Total Invesmtent</h6>
                        </div>
                        <div className="row__text">
                            <h5>N900,000.00</h5>
                            <h6>Withdrawals</h6>
                        </div>
                        <div className="row__text">
                            <h5>N900,000.00</h5>
                            <h6>Deposit</h6>
                        </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
