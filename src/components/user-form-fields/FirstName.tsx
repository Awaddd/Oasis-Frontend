import { FC } from "react";
import { UserFormField } from "../../utils/types/Users";
import ErrorMessage from "../sub-components/ErrorMessage";

const FirstName: FC<UserFormField> = ({ register, error }) => (
  <fieldset className="fieldset">
    <label className="label">First name</label>
    <input {...register('firstName', {
      required: 'First name is required',
      minLength: {
        value: 2,
        message: 'First name must be at least 2 characters'
      },
      pattern: {
        value: /([A-Za-z])\w+/i,
        message: 'First name cannot contain any numbers'
      }
    })} className="input" />
    <ErrorMessage error={error} />
  </fieldset>
)

export default FirstName