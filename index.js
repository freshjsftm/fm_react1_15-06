"use strict";
class Heading extends React.Component {
  render() {
    const { titleProp, classProp, children } = this.props;
    return React.createElement(
      "h1",
      {
        title: titleProp,
        className: classProp,
      },
      ...children
    );
  }
}
const reactElement = React.createElement(
  Heading,
  { titleProp: "123", classProp: "heading" },
  "Elon ",
  "Musk ",
  "!!!"
);

ReactDOM.render(reactElement, document.getElementById("root"));
