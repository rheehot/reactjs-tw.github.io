webpackJsonp([30355646893989],{890:function(e,t){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"import {ThemeContext, themes} from \'./theme-context\';\\nimport ThemedButton from \'./button\';\\n\\n// An intermediate component that uses the ThemedButton\\nfunction Toolbar(props) {\\n  return (\\n    <ThemedButton onClick={props.changeTheme}>\\n      Change Theme\\n    </ThemedButton>\\n  );\\n}\\n\\nclass App extends React.Component {\\n  constructor(props) {\\n    super(props);\\n    this.state = {\\n      theme: themes.light,\\n    };\\n\\n    this.toggleTheme = () => {\\n      this.setState(state => ({\\n        theme:\\n          state.theme === themes.dark\\n            ? themes.light\\n            : themes.dark,\\n      }));\\n    };\\n  }\\n\\n  render() {\\n    //highlight-range{1-3}\\n    // The ThemedButton button inside the ThemeProvider\\n    // uses the theme from state while the one outside uses\\n    // the default dark theme\\n    //highlight-range{3-5,7}\\n    return (\\n      <Page>\\n        <ThemeContext.Provider value={this.state.theme}>\\n          <Toolbar changeTheme={this.toggleTheme} />\\n        </ThemeContext.Provider>\\n        <Section>\\n          <ThemedButton />\\n        </Section>\\n      </Page>\\n    );\\n  }\\n}\\n\\nReactDOM.render(<App />, document.root);\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-context-theme-detailed-app-1cf3e4857fb293b4b73d.js.map