const React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head><title></title></head>
        <body>
          <main className='main'>
            {this.props.children}
          </main>          
        </body>
      </html>
   );
  }
}

module.exports = DefaultLayout;