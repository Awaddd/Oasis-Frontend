import { FC } from "react"
import { UserFormField } from "../../utils/types/users"
import ErrorMessage from "../sub-components/ErrorMessage"

const Email: FC<UserFormField> = ({ register, error }) => (
  <fieldset className="fieldset">
    <input
      type="email"
      {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
          message: "Email must be valid",
        },
      })}
      className="input"
      placeholder="Email"
    />
    <ErrorMessage error={error} />
  </fieldset>
)

export default Email
