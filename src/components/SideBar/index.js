var React = require('react');
require( './styles.css');

var SideBar = React.createClass ({

	handleChangeSort: function(e){

		var sort = e.target.value;
		this.props.onSortChange(sort);
	},

	handleChangePosted: function(e){

		var posted = e.target.value;
		this.props.onPostedChange(posted);
	},

	handleChangeDistance: function(e){

		var distance = e.target.value;
		this.props.onDistanceChange(distance);
	},

	handleChangeCheckbox: function(e){

		var newCheckboxStatus = [];

		if(e.target.value === 'indeed'){

			newCheckboxStatus = [ e.target.checked, this.props.isChecked[1], this.props.isChecked[2] ];
		}
		if(e.target.value === 'zipRecruiter'){

			newCheckboxStatus = [ this.props.isChecked[0], e.target.checked, this.props.isChecked[2] ];
		}
		if(e.target.value === 'jobs2Careers'){

			newCheckboxStatus = [ this.props.isChecked[0], this.props.isChecked[1], e.target.checked ];
		}
		this.props.onChangeCheckbox(newCheckboxStatus);
	},

	render() {

		return (
			   
			<div className="col-sm-3">

				<div className="well">

					<p>
						<b>Partner Sites</b>
					</p>

					<div className="checkbox">

					    <label>
					        <input type="checkbox" 
					        		value="indeed"
					        		onChange={this.handleChangeCheckbox}
					        		checked={this.props.isChecked[0]}
					        		/> 
					        	Indeed
					    </label>

					    <label>
					        <input type="checkbox"
					      			value="zipRecruiter"
					      			onChange={this.handleChangeCheckbox}
					        		checked={this.props.isChecked[1]}
					        		/> 
					        	ZipRecruiter
					    </label>

					    <label>
					        <input type="checkbox"
					        		value="jobs2Careers"
					      			onChange={this.handleChangeCheckbox}
					        		checked={this.props.isChecked[2]}
					        		/>  
					        	Jobs2Careers
					    </label>

					</div>

				</div>

			    <div className="well">

			        <p><b>Sort By</b></p>
			        <select className="selectpicker" onChange={this.handleChangeSort}>
			          <option value="relevance">Relevance</option>
			          <option value="date">Date</option>
			        </select>

			    </div>

			    <div className="well">
			        <p><b>Posted</b></p>
		            <select className="selectpicker" onChange={this.handleChangePosted}>
		                 <option> AnyTime </option>
		                 <option value="1"> Within 1 Day </option>
		                 <option value="3"> Within 3 Day </option>
		                 <option value="7"> Within 7 Day </option>
		                 <option value="15"> Within 15 Day </option>
		            </select>
			    </div>

			    <div className="well">
			        <p><b>Distance</b></p>
		                <select className="selectpicker" onChange={this.handleChangeDistance}>
		                     <option> Anywhere </option>
		                     <option value="5"> Within 5 Miles </option>
		                     <option value="10"> Within 10 Miles </option>
		                     <option value="15"> Within 15 Miles </option>
		                     <option value="25"> Within 25 Miles </option>
		                     <option value="50"> Within 50 Miles </option>
		                     <option value="100"> Within 100 Miles </option>
		                </select>
			    </div>
			</div>
   		);
	}
});


module.exports = SideBar;