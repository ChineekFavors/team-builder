import React from 'react';
function Form(){

	return (
		<div className='divForm'>
			<h2>Please fill out form</h2>
		<form className='form'>
			<label className='name'> 
				name:
				<input type="text" placeholder='enter first name' />
			</label>

			<label className='email'>
				email:
				<input type="text" placeholder='enter email address'/>
			</label>

			<label className='role'>
				role:
				<input type="text" placeholder='enter your role' />
			</label>
			<button className="submitButton">submit</button>
			
		</form>
		</div>
	)

}
export default Form;