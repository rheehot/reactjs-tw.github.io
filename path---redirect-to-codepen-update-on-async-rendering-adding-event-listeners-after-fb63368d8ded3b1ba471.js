webpackJsonp([69524422346509],{910:function(e,n){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"// After\\nclass ExampleComponent extends React.Component {\\n  // highlight-range{1-3}\\n  state = {\\n    subscribedValue: this.props.dataSource.value,\\n  };\\n  // highlight-line\\n  // highlight-range{1-18}\\n  componentDidMount() {\\n    // Event listeners are only safe to add after mount,\\n    // So they won\'t leak if mount is interrupted or errors.\\n    this.props.dataSource.subscribe(\\n      this.handleSubscriptionChange\\n    );\\n\\n    // External values could change between render and mount,\\n    // In some cases it may be important to handle this case.\\n    if (\\n      this.state.subscribedValue !==\\n      this.props.dataSource.value\\n    ) {\\n      this.setState({\\n        subscribedValue: this.props.dataSource.value,\\n      });\\n    }\\n  }\\n\\n  componentWillUnmount() {\\n    this.props.dataSource.unsubscribe(\\n      this.handleSubscriptionChange\\n    );\\n  }\\n\\n  handleSubscriptionChange = dataSource => {\\n    this.setState({\\n      subscribedValue: dataSource.value,\\n    });\\n  };\\n}\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-update-on-async-rendering-adding-event-listeners-after-fb63368d8ded3b1ba471.js.map