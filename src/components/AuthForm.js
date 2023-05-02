import { Form, useNavigation } from "react-router-dom";

import classes from "./AuthForm.module.css";


function AuthForm() {
    const navigation = useNavigation();

    const isSubmitting = navigation.state === 'submitting';

    return (
      <>
        <Form method="post" className={classes.form}>
          <p>
            <label htmlFor="apiKey">Enter your OpenAI API key</label>
            <input id="apiKey" type="text" name="apiKey" required />
          </p>
          <div className={classes.actions}>
            <button disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Save"}
            </button>
          </div>
        </Form>
        ;
      </>
    );
}

export default AuthForm;
