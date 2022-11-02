import {useState} from 'react';

import FormInput from '../form-input/form-input.component'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'

import { 
  signInAuthUserWithEmailAndPassword, 
  signInWithGooglePopup, 
} from '../../utils/firebase/firebase.utils';

import {SignInContainer, ButtonsContainer} from './sign-in-form.styles.jsx'


const defaultFormFields = {
  email: '',
  password: '',
}


const SignInForm = () => {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields

  const signInWithGoogle = async () => {
      await signInWithGooglePopup();
    } 

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword (email, password);
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('Incorrect username or password')
          break;
        case 'auth/user-not-found':
          alert('No user assosciated with this email')
          break;
        default:
          console.log(error.message)
      }
    }  
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value })
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
            label='Email'
            required 
            type="email" 
            onChange={handleChange}
            name='email'
            value={email} 
          />
        <FormInput 
            label='Password'
            required 
            type="password" 
            onChange={handleChange}
            name='password'
            value={password} 
          />
          <ButtonsContainer>
            <Button 
              type='submit'
            > Sign in
            </Button>
            <Button 
              buttonType={BUTTON_TYPE_CLASSES.google}
              type='button' 
              onClick={signInWithGoogle}> Google Sign in
            </Button>
          </ButtonsContainer>
      </form>
   </SignInContainer>
  )
}

export default SignInForm