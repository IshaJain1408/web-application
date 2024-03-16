import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './AuthPage.css'

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLogin, setIsLogin] = useState(true); 
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login - Email:', email, 'Password:', password);
  
    navigate('/profile'); 
    setEmail('');
    setPassword('');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup - Name:', name, 'Email:', email, 'Phone Number:', phoneNumber, 'Password:', password, 'Confirm Password:', confirmPassword);
    // Generate OTP and send it to the user's phone number
    const generatedOtp = generateOtp(); 
    console.log('OTP:', generatedOtp);
    setOtpSent(true);
  };

  const handleOtpVerification = () => {
    if (otp === '123456') {
      console.log('OTP verified successfully');
      setOtpVerified(true);
    } else {
      console.log('Incorrect OTP');
    }
  };

  const generateOtp = () => {
    return '123456'; 
  };

  return (
    <div className="container">
    <div className="row justify-content-center align-items-center min-vh-100">
      <div className="col-md-6">
        <div className="card rounded-0 ">
          <div className="card-body">
            {isLogin ? (
              <form onSubmit={handleLoginSubmit} className='d-flex flex-column align-items-center p-4'>
                <div className="mb-3">
                  <input type="email" className="form-control rounded-0 fw-semibold " placeholder="EMAIL" style={{fontSize: '12px',width:"320px",height:"50px"}} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control rounded-0 fw-semibold " placeholder="PASSWORD"  style={{fontSize: '12px',width:"320px",height:"50px"}}  value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn text-white rounded-0 fw-light" >LOGIN</button>
              </form>
            ) : (
              <>
              <form onSubmit={handleSignupSubmit} className='d-flex flex-column align-items-center p-4'>
  <div className="mb-3">
    <input type="text" className="form-control rounded-0 fw-semibold" style={{fontSize: '12px', width:"320px", height:"50px"}}  placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)} />
  </div>
  <div className="mb-3">
    <input type="email" className="form-control rounded-0 fw-semibold text-secondary" placeholder="EMAIL" style={{fontSize: '12px', width:"320px", height:"50px"}} value={email} onChange={(e) => setEmail(e.target.value)} />
  </div>
  <div className="mb-3 d-flex justify-content-between align-items-center gap-2">
    <input type="tel" className="form-control rounded-0 fw-semibold" placeholder="PHONE NUMBER" style={{fontSize: '12px', width:"223px", height:"50px"}}  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
    <button className="btn rounded-0 text-white fw-light" style={{ paddingLeft:"15px", paddingRight:"15px", height:"50px"}}>Get OTP</button>
  </div>
  <div className="mb-3  fw-medium" style={{transform:"translateX(-29%)"}}>
    <span>Didn't Receive It? </span><span className="text-primary cursor-pointer ms-1">RESEND</span>
</div>

  <div className="mb-3">
    <input type="text" className="form-control rounded-0 fw-semibold" placeholder="ENTER OTP" style={{fontSize: '12px', width:"320px", height:"50px"}} value={otp} onChange={(e) => setOtp(e.target.value)} />
  </div>
  <button type="submit" className="btn rounded-0 text-white fw-light" style={{ paddingLeft:"15px", paddingRight:"15px", height:"50px"}}>SIGNUP</button>
</form>

               
              </>
            )}
            <p onClick={() => setIsLogin(!isLogin)} className="mt-3 fw-medium text-center">
{isLogin ? "Don't have an account? " : "Already have an account? "}
<span style={{cursor:"pointer",color:"#0d6efd"}}>{isLogin ? "Sign up" : "Login"}</span>
</p>

          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AuthPage;
