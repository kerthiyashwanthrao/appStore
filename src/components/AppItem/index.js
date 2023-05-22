// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName, appId} = appDetails

  return (
    <li className="appContainer" key={appId}>
      <img className="img" src={imageUrl} alt={appName} />
      <p className="appName">{appName}</p>
    </li>
  )
}
export default AppItem
