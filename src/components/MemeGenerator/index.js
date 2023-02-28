import {Component} from 'react'
import {Con, FormCon, SelectTag, ConFinal} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageurlinpu: '',
    topTextIpu: '',
    bottomTextInpu: '',
    bottomText: '',
    imageurl: '',
    topText: '',
    selectedinpu: 8,
    selected: '',
  }

  submitBtnCliked = event => {
    event.preventDefault()
    const {
      imageurlinpu,
      topTextIpu,
      bottomTextInpu,
      selected,
      selectedinpu,
    } = this.state
    this.setState({
      bottomText: bottomTextInpu,
      topText: topTextIpu,
      imageurl: imageurlinpu,
      selected: selectedinpu,
    })
  }

  imageUrlChanged = event => {
    this.setState({imageurlinpu: event.target.value})
  }

  topTextChanged = event => {
    this.setState({topTextIpu: event.target.value})
  }

  bottomTextChanged = event => {
    this.setState({bottomTextInpu: event.target.value})
  }

  selectChanged = event => {
    this.setState({selectedinpu: event.target.value})
  }

  render() {
    const {
      imageurlinpu,
      topTextIpu,
      topText,
      selected,
      bottomTextInpu,
      imageurl,
      bottomText,
      selectedinpu,
    } = this.state
    console.log(imageurl)
    return (
      <Con height="100vh" bgColor="black">
        <Con
          height="80vh"
          bgColor="skyblue"
          flexDirectioon="row"
          flexDirectioon2="column"
          width="80%"
        >
          <Con height="70vh" width="40%" flexDirectioon="column">
            <h1>MemeGenerator</h1>
            <FormCon onSubmit={this.submitBtnCliked}>
              <label htmlFor="imageurl">Image Url</label>
              <input
                type="text"
                id="imageurl"
                onChange={this.imageUrlChanged}
                value={imageurlinpu}
              />
              <label htmlFor="topText">Top Text</label>
              <input
                type="text"
                id="topText"
                onChange={this.topTextChanged}
                value={topTextIpu}
              />
              <label htmlFor="bottomText">Bottom Text</label>
              <input
                type="text"
                id="bottomText"
                onChange={this.bottomTextChanged}
                value={bottomTextInpu}
              />
              <label htmlFor="select">Font Size</label>
              <SelectTag
                id="select"
                onChange={this.selectChanged}
                value={selectedinpu}
              >
                {fontSizesOptionsList.map(eachItem => (
                  <option value={eachItem.optionId} key={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </SelectTag>
              <button type="submit" data-testid="meme">
                Generate
              </button>
            </FormCon>
          </Con>
          <Con bgColor="grey" height="70vh" width="40%">
            <ConFinal
              bgColor="pink"
              height="50vh"
              width="90%"
              bgImgUrl={imageurl}
              fontSize={selected}
            >
              <h1>{topText}</h1>
              <h1>{bottomText}</h1>
            </ConFinal>
          </Con>
        </Con>
      </Con>
    )
  }
}

export default MemeGenerator
