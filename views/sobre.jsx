const React = require('react');
var DefaultLayout = require('./layout/default');

class HelloWorld extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <div>Sobre</div>
      </DefaultLayout>
    );
  }
}

module.exports = HelloWorld;