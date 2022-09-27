import { FC } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type Props = {
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

const ErrorMessage: FC<Props> = ({ error }) => {
  if (!error) return null

  return (
    <span className="font-medium text-red-400">{error as string}</span>
  )
}
export default ErrorMessage