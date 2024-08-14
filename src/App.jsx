import { useFormik } from "formik";

const App = () => {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values);
    },
    validate: values => {
      const errors = {};

      if (!values.username) {
        errors.username = 'Required';
      }

      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text" 
          username="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          placeholder="Username"
          name="username"
        /> { formik.errors.username }
        <br />
        <br />
        <input
          type="password"
          password="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Password"
          name="password"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;