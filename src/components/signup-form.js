import React from 'react';

const SignupForm = (
	<div className="signup">
		<h1>Recieve weekly summary of your mood history</h1>
		<label className="field">
			<span>Name</span>
      <input type="text" name="name" />
    </label>
    <label className="field">
			<span>Email</span>
      <input type="text" name="email" />
    </label>
    <button className="submit-btn">Submit</button>
  </div>
)
export default SignupForm
