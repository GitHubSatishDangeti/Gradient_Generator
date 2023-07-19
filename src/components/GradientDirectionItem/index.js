// Write your code here
import {DirectionButton} from './styledComponents'

const GradientDirection = props => {
  const {itemdetails, onDirectionClick, isActive} = props
  const {displayText, value} = itemdetails

  const directionClick = () => {
    onDirectionClick(value)
  }

  return (
    <li>
      <DirectionButton
        isActive={isActive}
        onClick={directionClick}
        type="button"
      >
        {displayText}
      </DirectionButton>
    </li>
  )
}
export default GradientDirection
