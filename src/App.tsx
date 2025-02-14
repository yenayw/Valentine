import { useState } from "react";
import "./App.css";

const phrases = ["Yes ;("];

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="mishamar"
            src="https://mail.google.com/mail/u/2?ui=2&ik=df999240e1&attid=0.1&permmsgid=msg-a:r-6985532181606757681&th=195021c723e48d27&view=fimg&disp=thd&attbid=ANGjdJ_oglRruyTVSOsQ95RXlbnyd3jFEuvLXJwqv-iwd8PH9hZ7pfLHc3WUb1GFePYkKd-EeeIIn6z1rRq24Krka0ljopsVSu5VLBfc-Q3c-PVxukM0Du_zXy4_gj0&ats=2524608000000&sz=w1852-h1045"
          />
          <div className="text">I love you so much, Michael! I love being your puppydog princess.</div>
        </>
      ) : (
        <>
          <img alt="snoopyhearts" src="https://tenor.com/bgEva.gif" />
          <div>
            <div>Will you be my Valentine?</div>
            <div>
              <button
                className="yesButton"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button onClick={handleNoClick} className="noButton">
                {getNoButtonText()}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
