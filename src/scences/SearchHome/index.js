var React = require('react');
var NavBar = require('../../components/NavBar/index');
var BodyContainer = require('../../components/BodyContainer/index');


var App = React.createClass ({

    render() {

        return (

       		<div>
	            <NavBar />
	            <BodyContainer />
        	</div>

      	);
  	}
});

module.exports = App;