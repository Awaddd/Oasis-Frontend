import { FC } from "react";
import { UserFormField } from "../../utils/types/Users";
import ErrorMessage from "../sub-components/ErrorMessage";

const LastName: FC<UserFormField> = ({ register, error }) => (
  <fieldset className="fieldset">
    <label className="label">Last name</label>
    <input type="text" {...register('lastName', {
      required: 'Last name is required',
      minLength: {
        value: 2,
        message: 'Last name must be at least 2 characters'
      },
      pattern: {
        value: /([A-Za-z])\w+/i,
        message: 'Last name cannot contain any numbers'
      }
    })} className="input" />
    <ErrorMessage error={error} />
  </fieldset>
)

export default LastName