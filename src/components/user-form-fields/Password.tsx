import { FC } from "react";
import { UserFormField } from "../../utils/types/Users";
import ErrorMessage from "../sub-components/ErrorMessage";

const Password: FC<UserFormField> = ({ register, error }) => (
  <fieldset className="fieldset">
    <label className="label">Password</label>
    <input type="password" {...register('password', {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters'
      }
    })} className="input" />
    <ErrorMessage error={error} />
  </fieldset>
)

export default Password