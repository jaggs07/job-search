var React = require('react');
require('./styles.css');
var logo = require('../../img/logo.png');

var NavBar = React.createClass ({

	render() {

		return (

				<div className="Navbar">
					<div className="Navbar-header-logo">
						<a href="/">
							<img src={logo} alt="Job Reignger" className="Nav-logo" />
						</a>
					</div>



				</div>
		);
	}
});

module.exports = NavBar;
