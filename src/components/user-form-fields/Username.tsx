import { FC } from "react"
import { UserFormField } from "../../utils/types/users"
import ErrorMessage from "../sub-components/ErrorMessage"

const Username: FC<UserFormField> = ({ register, error }) => (
  <fieldset className="fieldset">
    <input
      {...register("username", {
        required: "Username is required",
        minLength: {
          value: 2,
          message: "Username must be at least 2 characters",
        },
        pattern: {
          value: /([A-Za-z])\w+/i,
          message: "Username cannot contain any numbers",
        },
      })}
      className="input"
      placeholder="Username"
    />
    <ErrorMessage error={error} />
  </fieldset>
)

export default Username
