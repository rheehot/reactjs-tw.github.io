webpackJsonp([0xc3fdfc4bc6ff],{880:function(e,t){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"class FancyButton extends React.Component {\\n  focus() {\\n    // ...\\n  }\\n\\n  // ...\\n}\\n\\n// Use context to pass the current \\"theme\\" to FancyButton.\\n// Use forwardRef to pass refs to FancyButton as well.\\n// highlight-range{1,3}\\nexport default React.forwardRef((props, ref) => (\\n  <ThemeContext.Consumer>\\n    {theme => (\\n      <FancyButton {...props} theme={theme} ref={ref} />\\n    )}\\n  </ThemeContext.Consumer>\\n));\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-context-forwarding-refs-fancy-button-e4e0075fdf6d512d6cb1.js.map