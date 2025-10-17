import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password)
      return setErrorMessage('Please fill out all fields.');

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await axios.post('/api/auth/signin', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Sign-in response:', res.data);

      if (res.data.success === false) {
        return setErrorMessage(res.data.message || 'Sign-in failed.');
      }

      navigate('/');
      setFormData({ email: '', password: '' });
    } catch (error) {
      console.error('Sign-in error:', error);
      setErrorMessage(
        error.response?.data?.message ||
          'Something went wrong. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 py-12">
      <div className="w-full max-w-3xl bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-700">

        {/* Left Section */}
        <div className="flex-1 p-8 flex flex-col justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
          <h1 className="text-4xl font-extrabold mb-4">Welcome Back  Tech  Blog</h1>
          <p className="text-sm text-gray-100">
            Sign in to continue exploring Ravi’s Blog — your hub for creative ideas and modern web dev tips.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="flex-1 bg-gray-900 p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <Label htmlFor="email" value="Email address" className="text-white" />
              <TextInput
                type="email"
                id="email"
                placeholder="you@example.com"
                onChange={handleChange}
                required
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="password" value="Password" className="text-white" />
              <TextInput
                type="password"
                id="password"
                placeholder="••••••••"
                onChange={handleChange}
                required
                className="mt-2"
              />
            </div>

            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
              className="w-full mt-2"
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Signing In...</span>
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-600"></div>
            <span className="mx-3 text-gray-400 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-600"></div>
          </div>

          {/* Google Button */}
          <Button
            outline
            color="gray"
            className="w-full flex items-center justify-center gap-2"
          >
            <FcGoogle size={20} />
            Continue with Google
          </Button>

          {/* Sign Up Link */}
          <p className="text-gray-400 text-sm text-center mt-6">
            Don’t have an account?{' '}
            <Link
              to="/sign-up"
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              Sign Up
            </Link>
          </p>

          {/* Error Message */}
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
