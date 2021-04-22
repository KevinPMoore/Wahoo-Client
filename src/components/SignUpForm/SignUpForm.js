import React ,{ useState }from 'react';
import './SignUpForm.js';

export default function SignUpForm(props) {

    const [ error, setError ] = useState(null)

    return(
        <form
            className='SignUpForm'
        >
            <div className='Alert'>
                {error && <p className='Error'>{error}</p>}
            </div>
            <div
                className='FormContainer'
            >
                <div 
                    className='Username'
                >
                    <label
                        className='UsernameLabel'
                        htmlFor='signupusername'
                        >
                            Username
                    </label>
                    <input
                        name='Username'
                        type='text'
                        id='signupnusername'
                        placeholder='ex. CoolGuyJokes87'
                        required
                    >
                    </input>
                </div>
                <div
                    className='Password'
                >
                    <label
                        className='PasswordLabel'
                        htmlFor='signuppassword'
                    >
                        Password
                    </label>
                    <input
                        name='Password'
                        type='password'
                        id='signuppassword'
                        placeholder='V3ryS3cr1t!'
                        required
                    >
                    </input>
                </div>
                <button
                    id='signupsubmit'
                    type='submit'
                >
                    Submit
                </button>
            </div>
        </form>
    );
};