import './index.css'

const ThumbnailImage = props => {
  const {imageDetails, onBtnClick} = props
  const {id, thumbnailUrl, category} = imageDetails
  const BtnClicked = () => {
    onBtnClick(id)
  }
  return (
    <li type="none">
      <button type="button" onClick={BtnClicked}>
        <img
          className="thumbImage"
          id={id}
          src={thumbnailUrl}
          alt="thumbnail"
        />
      </button>
    </li>
  )
}

export default ThumbnailImage
