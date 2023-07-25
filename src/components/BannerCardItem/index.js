import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="title">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="buttonCss">
          show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
