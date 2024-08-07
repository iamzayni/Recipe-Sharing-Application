import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../images/background.png'; // Update with the path to your background image
import Header from '../client-layout/Header';
import Footer from '../client-layout/Footer';

const Login = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
  });

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', values);
      console.log('Login successful:', response.data);
      // Redirect or perform any other action on successful login
      window.location.href = '/';
    } catch (error) {
      if (error.response && error.response.data) {
        setFieldError('email', error.response.data.message || 'An error occurred');
        setFieldError('password', error.response.data.message || 'An error occurred');
      }
      console.error('Login error', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Header />
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700">Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="flex items-center justify-between mb-6">
                  <Link to="/forgotpassword" className="text-blue-500 hover:underline text-sm">Forgot Password?</Link>
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" disabled={isSubmitting}>
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
              </Form>
            )}
          </Formik>

          <div className="mt-6 text-center">
            <p className="text-gray-700">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
