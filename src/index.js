import React from "react";
import ReactDOM from "react-dom";

import "./colors.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div myselected="true" className="Window">
        <div className="Header">LOG MESSAGES</div>
        <div className="Content">
          <div className="logItem">
            <span className="updateBullet">19h20</span> awefaw
          </div>
          <div className="logItem">
            <span className="updateBullet">19h20</span> awefaw
          </div>
          <div className="logItem">
            <span className="updateBullet">19h20</span> awefaw
          </div>
          <div className="logItem">
            <span className="updateBullet">19h20</span> awefaw
          </div>
          <div className="logItem">
            <span className="updateBullet">19h20</span> awefaw
          </div>
        </div>
      </div>
      <div className="Window">
        <div className="Header">MQTT Status</div>
        <div className="Content">
          <div className="logItem">
            <span className="updateBullet">messagesRX</span>1099
          </div>
        </div>
      </div>
      <div className="Window">
        <div className="Header">Health Status</div>
        <div className="logItem">
          <span className="updateBullet">messagesRX</span>1099
        </div>
        <svg
          className="RadarIcon"
          enable-background="new 0 0 128 128"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 128 128"
        >
          <g>
            <path
              className="RadarIcon"
              d="M65.148,92.891c-7.534,0-14.606-2.923-19.914-8.231c-5.337-5.336-8.26-12.446-8.23-20.021   c0.028-7.572,3.004-14.702,8.378-20.076l0.707-0.707l39.95,39.95l-0.707,0.707C79.93,89.915,72.762,92.891,65.148,92.891z    M46.102,46.695c-4.56,4.906-7.072,11.242-7.098,17.949c-0.027,7.038,2.688,13.645,7.645,18.601c4.931,4.931,11.5,7.646,18.5,7.646   c6.745,0,13.116-2.514,18.05-7.099L46.102,46.695z"
            />
          </g>
          <g>
            <path d="M62.66,111H32.636l10.413-26.826l1.07,1.576c2.371,3.491,6.733,5.399,6.777,5.419l0.303,0.13L62.66,111z    M35.558,109h23.626l-9.388-16.137c-0.959-0.455-3.91-1.987-6.206-4.556L35.558,109z" />
          </g>
          <g>
            <g>
              <path d="M77.901,61h-0.75c0-5-4.151-9.735-10.151-9.735v-0.75C73,50.515,77.901,55,77.901,61z" />
            </g>
            <g>
              <path d="M88.41,61h-1C87.41,50,78,41.006,67,41.006v-1C79,40.006,88.41,50,88.41,61z" />
            </g>
            <g>
              <path d="M99.044,61h-1.5C97.544,45,84,30.872,67,30.872v-1.5C85,29.372,99.044,44,99.044,61z" />
            </g>
            <g>
              <path d="M109.678,61h-2C107.678,39,89,20.738,67,20.738v-2C91,18.738,109.678,38,109.678,61z" />
            </g>
          </g>
          <g>
            <path d="M68.821,62.77c-1.751,0-3.176-1.456-3.176-3.246c0-1.789,1.425-3.245,3.176-3.245s3.176,1.456,3.176,3.245   C71.997,61.313,70.572,62.77,68.821,62.77z M68.821,57.278c-1.2,0-2.176,1.007-2.176,2.245s0.976,2.246,2.176,2.246   s2.176-1.008,2.176-2.246S70.021,57.278,68.821,57.278z" />
          </g>
        </svg>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
