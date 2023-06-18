import React from 'react';
import { routeConst } from './utils';
// import { useForm } from 'react-hook-form';

const LoginPassword = ({ setRouteState }) => {
  const onSubmit = (data) => {
    setRouteState(routeConst.home);
  };

  return (
    <div>
      <div className="login-header">
        <div className="overlap-group">
          <img
            className="spreadsheets"
            src="https://i.ibb.co/cxGxR2X/spreadsheets-2x.png"
            alt="Spreadsheets"
          />
          <img
            className="group"
            src="https://i.ibb.co/ZWVHcPW/group-2-2x.png"
            alt="Group"
          />
          <img
            className="group-1"
            src="https://i.ibb.co/SxbxNCL/group-3-2x.png"
            alt="Group"
          />
          <img
            className="group-2"
            src="https://i.ibb.co/1Zjmxh5/group-4-2x.png"
            alt="Group"
          />
          <img
            className="group-3"
            src="https://i.ibb.co/P152XCT/group-5-2x.png"
            alt="Group"
          />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <img
        src="https://i.ibb.co/fXJnMQH/back.png"
        alt="Back"
        onClick="returnToLoginPage()"
      />
      <br />
      <div></div>
      <div
        span
        style={{
          color: 'var(--fern)',
          fontFamily: 'var(--font-family-dm_sans)',
          fontSize: '18px',
        }}
      >
        <b>Login Account</b>
      </div>
      <div className="text-fiels">
        <div className="text-fiels-1">
          <div className="text-fiels text-fiels-1 existing-workflows">
            Password
          </div>
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            name="password"
            required
            className="message"
          />
        </div>
      </div>
      <br />
      <div className="flex-row">
        <div className="group-84">
          <label className="switch">
            <input type="checkbox" id="switch" checked />
            <span className="slider round"></span>
          </label>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div
          className="flex-row"
          style={{
            color: 'var(--fern)',
            fontFamily: 'var(--font-family-dm_sans)',
            fontSize: '18px',
          }}
          onClick="forgtPassword()"
        >
          Forgot Password?
        </div>
      </div>
      <div className="frame-4SingIn">
        <div className="sign-in" onClick={onSubmit}>
          Sign In
        </div>
      </div>
    </div>
  );
};

export default LoginPassword;
