import React, { useState } from 'react';
// import {  Link } from 'react-router-dom'; 

const SigninForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>(''); 

//   const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Mocking sign-in process
    const mockEmail = "user@example.com";
    const mockPassword = "password123";

    if (email === mockEmail && password === mockPassword) {
      // Simulate successful sign-in
      console.log('Sign-in successful');

      const mockData = {
        auth_token: "mockAuthToken123",
        user: { email: mockEmail, name: "John Doe" }
      };

      localStorage.setItem('authToken', mockData.auth_token);
      localStorage.setItem('userData', JSON.stringify(mockData.user));

      
    } else {
      // Simulate sign-in failure
      console.error('Sign-in failed: Invalid credentials');
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md py-2 px-3 text-white-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md py-2 px-3 text-white-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
        </div>
        {error && ( 
          <div className="text-red-500">{error}</div>
        )}
        <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-white mt-4">Sign In</button>
      </form>
      <p className="text-gray-700 mt-2">
        Don't have an account?{' '}
        {/* <Link to="/signup" className="text-blue-500">Sign up</Link> */}
      </p>
    </div>
  );
};

export default SigninForm;
