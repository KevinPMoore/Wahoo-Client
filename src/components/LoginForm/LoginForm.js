import React ,{ useState }from 'react';
import './LoginForm.js';

export default function LoginForm(props) {

    const [ error, setError ] = useState(null)

    return(
        <form
            className='LoginForm'
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
                        htmlFor='loginusername'
                        >
                            Username
                    </label>
                    <input
                        name='Username'
                        type='text'
                        id='loginusername'
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
                        htmlFor='loginpassword'
                    >
                        Password
                    </label>
                    <input
                        name='Password'
                        type='password'
                        id='loginpassword'
                        placeholder='V3ryS3cr1t!'
                        required
                    >
                    </input>
                </div>
                <button
                    id='loginsubmit'
                    type='submit'
                >
                    Submit
                </button>
            </div>
        </form>
    );
};