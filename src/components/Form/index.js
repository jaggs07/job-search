var React = require('react');
require('./styles.css');

var Form = React.createClass({

    handleSubmit: function(){
        this.props.onClick();
    },

    handleChangeTitle: function(e){

        var title = e.target.value;
        this.props.onChangeTitle(title);
    },

    handleChangeLocation: function(e){

        var location = e.target.value;
        this.props.onChangeLocation(location);
    },

	render() {
		return (
			<div className="row" >
	          <div className="panel panel-default text-left">
	            <div className="panel-body form-class">

	              <form>

	                <div className="form-group col-md-5 title-field">
	                  <label className="sr-only " htmlFor="exampleInputEmail3">Job Title</label>
	                  <input value={this.props.title} onChange={this.handleChangeTitle} type="jobTitle" className="form-control" id="exampleInputEmail3" placeholder="JobTitle" />
	                </div>

	                <div className="form-group col-md-5 location-field">
	                  <label className="sr-only" htmlFor="exampleInputPassword3">Location</label>
	                  <input value={this.props.location} onChange={this.handleChangeLocation} type="location" className="form-control" id="exampleInputPassword3" placeholder="Location" />
	                </div>

	                <div className="form-group col-md-2 button-field">	                 
					    <button onClick={this.handleSubmit} type="button"  id="search_selected" className="btn btn-primary">
					      <span className="glyphicon glyphicon-search"></span> Search
					    </button>
	                </div>  

	               </form>    
	      	      </div>
	         </div>
         </div>

         
		);
	}
});

module.exports = Form;