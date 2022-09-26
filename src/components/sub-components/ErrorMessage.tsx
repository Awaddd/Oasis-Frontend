import { FC } from "react";

type Props = {
  error?: string
}

const ErrorMessage: FC<Props> = ({ error }) => {
  if (!error) return null

  return (
    <span className="font-medium text-red-400">{error}</span>
  )
}
export default ErrorMessage