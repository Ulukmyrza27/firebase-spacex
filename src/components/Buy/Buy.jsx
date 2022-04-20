import { Form, Input, message } from "antd";
import React, { useState } from "react";

import { Checkbox } from "antd";
import "./Buy.css";
import { Link } from "react-router-dom";

const Buy = () => {
  // const navigate = useNavigate();
  const [cod, setCod] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  function buy() {
    if (cod.length < 16) {
      return setTimeout(() =>
        message.warning(
          "Please check again in the bank card must be more than 16 digits"
        )
      );
    }
    if (month.length < 2) {
      return setTimeout(() =>
        message.warning("The number of digits entered must be 2")
      );
    }
    if (year.length < 2) {
      return setTimeout(() =>
        message.warning("The number of digits entered must be 2")
      );
    }
    if (cvc.length < 3) {
      return setTimeout(() => message.warning("CVC only contain 3 digits"));
    }
    return setTimeout(() => message.success("Successfully paid"));
    // navigate("/");
  }

  return (
    <div>
      <div className="buy">
        <div className="buy-block">
          <div className="buy-card">
            <h2 className="bell oll">Payment by card</h2>
            <h4 className="bell">MasterCard, Maestro, Visa</h4>
          </div>
          <div className="buy-input">
            <Form layout="vertical">
              <Form.Item className="bell" name="number" label="Bank card">
                <Input
                  type="number"
                  placeholder=""
                  value={cod}
                  onChange={(e) => setCod(e.target.value)}
                />
              </Form.Item>
            </Form>
          </div>

          <div className="form-cod">
            <Form layout="vertical ">
              <Form.Item className="bell" name="number" label="Validity">
                <div className="form-data">
                  <Input
                    placeholder="MM"
                    type="number"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                  />

                  <Input
                    placeholder="ГГ"
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
              </Form.Item>
            </Form>

            <Form layout="vertical" className="form-kod">
              <Form.Item className="bell" name="number" label="CVC">
                <Input
                  placeholder="CVC"
                  type="number"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </Form.Item>
            </Form>
          </div>
          <div className="form-group">
            <Checkbox className="bell" onChange={onChange}>
              Remember my card
            </Checkbox>
          </div>
          <Link to="/buy">
            <button className="form-btn" onClick={buy}>
              Pay
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Buy;
