import { FC } from "react";
import { ValidationRule } from "react-hook-form";
import { UserFormField } from "../../utils/types/Users";
import ErrorMessage from "../sub-components/ErrorMessage";

const Password: FC<UserFormField & { minLength?: ValidationRule<number> }> = ({ register, error, minLength }) => (
  <fieldset className="fieldset">
    <input type="password" {...register('password', {
      required: 'Password is required',
      minLength
    })} className="input" placeholder="Password" />
    <ErrorMessage error={error} />
  </fieldset>
)

export default Password