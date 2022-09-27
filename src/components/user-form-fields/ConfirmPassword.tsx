import { FC } from "react";
import { UserFormField } from "../../utils/types/Users";
import ErrorMessage from "../sub-components/ErrorMessage";

const ConfirmPassword: FC<UserFormField & { password?: string }> = ({ register, error, password }) => (
  <fieldset className="fieldset">
    <label className="label">Confirm Password</label>
    <input type="password" {...register('confirmPassword', {
      required: 'Confirm Password is required',
      minLength: {
        value: 8,
        message: 'Password must be at least 8 characters'
      },
      validate: (confirmPassword) => confirmPassword === password || 'Confirm password must be the same as the password'
    })} className="input" />
    <ErrorMessage error={error} />
  </fieldset>
)

export default ConfirmPassword