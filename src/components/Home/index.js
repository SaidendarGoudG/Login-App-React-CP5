import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {isLogin: false}

  onClickButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    const message = isLogin ? 'Welcome User' : 'Please Login'

    const buttonType = isLogin ? 'Logout' : 'Login'

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">{message}</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {buttonType}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
