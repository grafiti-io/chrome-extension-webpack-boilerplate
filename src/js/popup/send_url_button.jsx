import React from "react";
import { hot } from "react-hot-loader";
import icon from "../../img/icon-128.png";
import light from "../../img/icon-light-128.png";

class GreetingComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      sending: false,
      sentUrlList: [{sent:true,url:'https://plugins.jetbrains.com/plugin/8578-postcss'}],
      // sentUrlList: [], // [{url:'https://plugins.jetbrains.com/plugin/8578-postcss'}],
    }
  }

  saveUrl() {
    const me = this;
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
      const { url } = tabs[0];
      console.log(url);

      me.setState(state => ({...state, sending: true }));
      chrome.runtime.sendMessage({send: true, url}, function (response,x) {
        me.setState(state => {
          const sentUrlList = state.sentUrlList.concat(response);

          return {
            sentUrlList,
            sending: false,
          };
        });
      });
    });
  }

  render () {
    const message = this.state.sending ? 'Sending...' : 'Send to Grafiti';

    const sentList = this.state.sentUrlList.map((info, i) => <li key={i} className={info.sent ? 'sent' : 'failed'}><pre>{info.url}</pre></li>);

    const footer = this.state.sentUrlList.length  > 0 ? <ul>{sentList}</ul> : <h3>History (empty)</h3>;

    return (
      <div className="grafiti-popup">
        <button disabled={this.state.sending} onClick={this.saveUrl.bind(this)}>
          <img src={icon} />
          <h3>{message}</h3>
        </button>
        {footer}
      </div>
    )
  }
};

export default hot(module)(GreetingComponent)
