import {Component} from 'react'
import {BgContainer} from './styledComponents'
import GradientDirection from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    gredientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onColor1Change = event => {
    this.setState({color1: event.target.value})
  }

  onColor2Change = event => {
    this.setState({color2: event.target.value})
  }

  onDirectionClick = value => {
    this.setState({direction: value})
    console.log(value)
  }

  onGenerate = () => {
    const {color1, color2, direction, gredientValue} = this.state
    this.setState({
      gredientValue: `to ${direction},${color1},${color2}`,
    })
  }

  render() {
    const {direction, color1, color2, gredientValue} = this.state
    return (
      <BgContainer
        data-testid="gradientGenerator"
        gredientValue={gredientValue}
      >
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        <ul>
          {gradientDirectionsList.map(i => (
            <GradientDirection
              key={i.directionId}
              isActive={direction === i.value}
              itemdetails={i}
              onDirectionClick={this.onDirectionClick}
            />
          ))}
        </ul>
        <p>Pick the Colors</p>
        <div>
          <p>{color1}</p>
          <br />
          <input onChange={this.onColor1Change} value={color1} type="color" />
        </div>
        <div>
          <p>{color2}</p>
          <br />
          <input onChange={this.onColor2Change} value={color2} type="color" />
        </div>
        <button onClick={this.onGenerate} type="button">
          Generate
        </button>
      </BgContainer>
    )
  }
}
export default GradientGenerator
