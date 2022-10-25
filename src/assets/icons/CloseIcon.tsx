import { FC } from "react"

type Props = {
  classes?: string
  size?: number
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const CloseIcon: FC<Props> = ({ classes, size, onClick }) => (
  <button onClick={onClick}>
    <svg
      className={classes}
      width={`${size}px`}
      height={`${size}px`}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 490 490"
    >
      <polygon
        points="386.813,0 245,141.812 103.188,0 0,103.188 141.813,245 0,386.812 103.187,489.999 245,348.187 386.813,490 
        490,386.812 348.187,244.999 490,103.187 "
      />
    </svg>
  </button>
)

export default CloseIcon
