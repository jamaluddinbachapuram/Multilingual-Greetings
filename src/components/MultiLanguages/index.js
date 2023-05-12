import './index.css'

const MultiLanguages = props => {
  const {details, changeState, isActive} = props
  const {id, buttonText} = details
  const classEl = isActive === true ? 'activeEl' : 'notActive'

  const onClickChange = () => {
    changeState(id)
  }

  return (
    <li className="button-list">
      <button className={classEl} type="button" onClick={onClickChange}>
        {buttonText}
      </button>
    </li>
  )
}

export default MultiLanguages
