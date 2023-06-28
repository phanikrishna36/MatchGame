const ListTab = props => {
  const {tabDetails, onCatClick} = props
  const {tabId, displayText} = tabDetails
  const BtnClicked = () => {
    onCatClick(tabId)
  }
  return (
    <li type="none">
      <button onClick={BtnClicked} type="button" id={tabId}>
        {displayText}
      </button>
    </li>
  )
}

export default ListTab
