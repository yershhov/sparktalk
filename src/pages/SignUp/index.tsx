import { Link, useNavigate } from "react-router-dom";
import { CustomLink } from "../../styles/form/CustomLink";
import { Button } from "../../styles/form/Button";
import { Input } from "../../styles/form/Input";
import {
  FlexDirectionColumn,
  FullSizeFlexCenter,
} from "../../styles/layouts/flexLayouts";
import { Div } from "../../styles/common/Div";
import useFocusOnMount from "../../hooks/useFocusOnMount";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { SimpleErrorMessage } from "../../styles/common/SimpleErrorMessage";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required("Required"),
  password: yup.string().min(8, "8 characters min").required("Required"),
  confirmPassword: yup
    .string()
    .min(8, "8 characters min")
    .required("Required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export default function SignUp() {
  const navigate = useNavigate();
  const initialFocusRef = useFocusOnMount<HTMLInputElement>();

  const onSubmit = (values: any) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode} ${errorMessage}`);
      });
  };

  return (
    <FullSizeFlexCenter>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, handleChange }) => (
          <Form>
            <FlexDirectionColumn style={{ gap: 10 }} w="20rem">
              <Input
                name="email"
                onChange={handleChange}
                ref={initialFocusRef}
                placeholder="Email*"
                invalid={Boolean(errors.email)}
              />
              {errors.email && (
                <SimpleErrorMessage>{errors.email}</SimpleErrorMessage>
              )}

              <Input
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="Password*"
                invalid={Boolean(errors.password)}
              />
              {errors.password && (
                <SimpleErrorMessage>{errors.password}</SimpleErrorMessage>
              )}

              <Input
                name="confirmPassword"
                type="password"
                onChange={handleChange}
                placeholder="Confirm password*"
                invalid={Boolean(errors.confirmPassword)}
              />
              {errors.confirmPassword && (
                <SimpleErrorMessage>
                  {errors.confirmPassword}
                </SimpleErrorMessage>
              )}

              <FlexDirectionColumn style={{ gap: 10 }} pt="0.7rem">
                <Button type="submit">Create account</Button>
                <Div textAlign="center">
                  <Link to={"/login"}>
                    <CustomLink w="100%">Already have an account?</CustomLink>
                  </Link>
                </Div>
              </FlexDirectionColumn>
            </FlexDirectionColumn>
          </Form>
        )}
      </Formik>
    </FullSizeFlexCenter>
  );
}
