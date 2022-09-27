import { FC } from "react";
import { UserFormField } from "../../utils/types/Users";
import ErrorMessage from "../sub-components/ErrorMessage";

const Email: FC<UserFormField> = ({ register, error }) => (
  <fieldset className="fieldset">
    <label className="label">Email</label>
    <input type="email" {...register('email', {
      required: 'Email is required',
      pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
        message: 'Email must be valid'
      }
    })} className="input" />
    <ErrorMessage error={error} />
  </fieldset>
)

export default Email