import React from 'react';
import { routeConst } from './utils';

const LoginEmail = ({ setRouteState }) => {
  const onSubmit = (data) => {
    console.log(data);
    setRouteState(routeConst.loginPassword);
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
      <br />
      <br />
      <br />

      <img
        src="https://i.ibb.co/fXJnMQH/back.png"
        alt="Back"
        onClick="returnToWelcomePage()"
      />

      <br />
      <div></div>

      <div
        span
        style={{
          color: 'var(--log-cabin-3)',
          fontFamily: 'var(--font-family-satoshi_variable-black)',
          fontSize: 'var(--font-size-m2)',
        }}
      >
        <b>Login Account</b>
      </div>

      <div className="text-fiels">
        <div className="text-fiels-1">
          <div className="existing-workflows">Email</div>
          <input
            type="text"
            placeholder="David.Shu@gmail.com"
            className="message"
          />
        </div>
      </div>

      <div className="frame-4">
        <div className="next">
          <div className="google-1valign-text-middle" onClick={onSubmit}>
            Next
          </div>
        </div>
      </div>
      <div className="sign-in-with">
        <img
          className="vector"
          src="https://i.ibb.co/s5WRMdZ/Vector-80.png"
          alt="Vector 79"
        />
        <span
          style={{
            color: 'var(--suva-gray)',
            fontFamily: 'var(--font-family-dm_sans)',
            fontSize: '15px',
          }}
        >
          Or Sign In With
        </span>
        <img
          className="vector"
          src="https://i.ibb.co/s5WRMdZ/Vector-80.png"
          alt="Vector 80"
        />
      </div>
      <div className="google-and-facebook">
        <div className="google">
          <img
            className="btn-signinwith-google"
            src="https://i.ibb.co/gFntZqz/btnsigninwithgoogle-2x.png"
            alt="btnSigninwithGoogle"
          />
          <div className="google-1valign-text-middle" onClick="loginToGoogle()">
            Google
          </div>
        </div>
      </div>
      <div className="join-us">
        <span
          style={{
            color: 'var(--suva-gray)',
            fontFamily: 'var(--font-family-dm_sans)',
            fontSize: '15px',
          }}
        >
          Don’t have an account?
        </span>
        <span
          style={{
            color: 'var(--fern)',
            fontFamily: 'var(--font-family-dm_sans)',
            fontSize: '18px',
          }}
        >
          Join Us
        </span>
      </div>
    </div>
  );
};

export default LoginEmail;
