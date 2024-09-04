import React, { useState } from 'react';
// import { useNavigate} from 'react-router-dom';

const SignupForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState<string>(''); 

//   const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName, 
          last_name: lastName, 
          email: userEmail, 
          password: userPassword 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Sign-up failed. Response:', response.status, errorData);
        setError(errorData.errors);
        return;
      }

      console.log('Sign-up successful');

      const data = await response.json();
      localStorage.setItem('authToken', data.auth_token);
      localStorage.setItem('userData', JSON.stringify(data.user));
      console.log(data);

    //   navigate('/account/dashboard');
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" style={{color:'white'}}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" style={{color:'white'}}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email:</label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" style={{color:'white'}}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Password:</label>
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" style={{color:'white'}}
          />
        </div>
        {error && ( 
          <div className="text-red-500">{error}</div>
        )}
        <button
          type="submit"
          className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4"
        >
          Sign up
        </button>
      </form>
      <p className="text-gray-700 mt-2">
        Already have an account?{' '}
        {/* <Link to="/signin" className="text-blue-500">Sign in</Link> */}
      </p>
    </div>
  );
};

export default SignupForm;
