import React from 'react';
import "../styles/cardinfo.css"
export default function CardInfo() {
  return (
    <>
      <section>
        <div className="container md:flex justify-between">
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="https://i.ibb.co/JQ55Cdm/Picture1.png" alt="Lion" />
              </div>
              <div className="contentBx">
                <h3>No more hassles<br /><span>finding a vacant parking space</span></h3>
              </div>
            </div>
            <ul className="sci">
              <li>
                <a href="#">Enjoy</a>
              </li>
              <li>
                <a href="#">Our</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="https://i.ibb.co/JQ55Cdm/Picture1.png" alt="Frog" />
              </div>
              <div className="contentBx">
                <h3>Reduce entry-exit time <br /><span>with quick QR code validation.</span></h3>
              </div>
            </div>
            <ul className="sci">
              <li>
                <a href="#">Enjoy</a>
              </li>
              <li>
                <a href="#">Our</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="https://i.ibb.co/JQ55Cdm/Picture1.png" alt="Giraffe" />
              </div>
              <div className="contentBx">
                <h3>Manages parking slots<br /><span>using QR code technology.</span></h3>
              </div>
            </div>
            <ul className="sci">
              <li>
                <a href="#">Enjoy</a>
              </li>
              <li>
                <a href="#">Our</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="content">
              <div className="imgBx">
                <img src="https://i.ibb.co/JQ55Cdm/Picture1.png" alt="Giraffe" />
              </div>
              <div className="contentBx">
                <h3>Secure and user-friendly<br /><span>System with seamless parking.</span></h3>
              </div>
            </div>
            <ul className="sci">
              <li>
                <a href="#">Enjoy</a>
              </li>
              <li>
                <a href="#">Our</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
