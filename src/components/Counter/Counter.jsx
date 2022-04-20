import React from "react";
import "./Counter.css";
import AnimatedNumbers from "react-animated-numbers";

function App() {
  const [num1, setNum1] = React.useState(3);
  const [num2, setNum2] = React.useState(7);
  const [num3, setNum3] = React.useState(4);
  return (
    <>
      <div className="counter">
        <div>
          <AnimatedNumbers
            includeComma
            animateToNumber={num1}
            configs={[
              { mass: 1, tension: 220, friction: 100 },
              { mass: 1, tension: 180, friction: 130 },
              { mass: 1, tension: 280, friction: 90 },
              { mass: 1, tension: 180, friction: 135 },
              { mass: 1, tension: 260, friction: 100 },
              { mass: 1, tension: 210, friction: 180 },
            ]}
          ></AnimatedNumbers>
        </div>
        <div>
          <AnimatedNumbers
            animateToNumber={num2}
            configs={(number, index) => {
              return { mass: 1, tension: 130 * (index + 1), friction: 40 };
            }}
          ></AnimatedNumbers>
        </div>
        <div>
          <AnimatedNumbers
            animateToNumber={num3}
            configs={(number, index) => {
              return { mass: 1, tension: 230 * (index + 1), friction: 40 };
            }}
          ></AnimatedNumbers>
        </div>
      </div>
      <div className="counter-heavy">
        <div className="number">
          <span className="label">total launches</span>
        </div>

        <div className="number">
          <span className="label">total landings</span>
        </div>

        <div className="number">
          <span className="label">reflown rockets</span>
        </div>
      </div>
    </>
  );
}

export default App;
