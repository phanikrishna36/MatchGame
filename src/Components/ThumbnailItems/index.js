import {Component} from 'react'
import ListTab from '../ListTab'
import ThumbnailImage from '../ThumbnailImage'
import './index.css'

class ThumbnailItems extends Component {
  constructor(props) {
    super(props)
    const {imagesList} = this.props
    this.state = {
      sec: 60,
      mainImgItem: imagesList[0],
      score: 0,
      category: 'FRUIT',
      result: false,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState(i => ({sec: i.sec > 0 ? i.sec - 1 : i.sec}))
  }

  onBtnClick = id => {
    const {imagesList} = this.props
    const {mainImgItem} = this.state
    const mainImage =
      imagesList[Math.ceil(Math.random() * imagesList.length - 1)]
    console.log(
      mainImgItem.id === id,
      imagesList.filter(i => i.id === id),
      id,
    )
    this.setState(i => ({
      score: i.mainImgItem.id === id ? i.score + 1 : i.score,
      mainImgItem: mainImage,
      result: i.mainImgItem.id !== id,
    }))
  }

  onCatClick = category => {
    this.setState({category})
  }

  onReset = () => {
    const {imagesList} = this.props
    this.setState({
      sec: 60,
      mainImgItem: imagesList[0],
      score: 0,
      category: 'FRUIT',
      result: false,
    })
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {mainImgItem, sec, score, category, result} = this.state
    const filteredList = imagesList.filter(i => i.category === category)

    return (
      <div className="cont">
        <ul className="navBar">
          <li>
            <img
              className="icon"
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
            />
          </li>
          <li className="insideCont">
            <div className="sideCard">
              <p>Score:{score}</p>
            </div>
            <div className="sideCard">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p>{sec} sec</p>
            </div>
          </li>
        </ul>

        {result || !sec ? (
          <div className="trophyCont">
            <img
              className="trophy"
              src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
              alt="trophy"
            />
            <p>YOUR SCORE</p>
            <p>{score}</p>
            <button type="button" onClick={this.onReset} className="resetBtn">
              <img
                alt="reset"
                src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
              />
              <p>PLAY AGAIN</p>
            </button>
          </div>
        ) : (
          <div className="middleCont">
            <img className="mainCont" alt="match" src={mainImgItem.imageUrl} />
            <ul className="buttonsCont">
              {tabsList.map(i => (
                <ListTab
                  key={i.tabId}
                  tabDetails={i}
                  onCatClick={this.onCatClick}
                />
              ))}
            </ul>

            <ul className="thumbItems">
              {filteredList.map(i => (
                <ThumbnailImage
                  key={i.id}
                  imageDetails={i}
                  onBtnClick={this.onBtnClick}
                />
              ))}
              (
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default ThumbnailItems
