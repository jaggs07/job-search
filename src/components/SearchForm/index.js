import React, { Component } from 'react';

class SearchForm extends Component {

	handleSubmit(){

		this.props.onClick();
	}

	handleChangeTitle(e){

		let title = e.target.value;
		this.props.onChangeTitle(title);
	}

	handleChangeLocation(e){

		let location = e.target.value;
		this.props.onChangeLocation(location);
	}

	render(){
		return (
			
			<div className="row">
		        <div className="col-sm-12">
			        <div className="panel panel-default text-left">
			            <div className="panel-body">

				             <form className="form-inline">

				                <div className="form-group col-sm-5">
					                  <label className="sr-only" htmlFor="exampleInputEmail3">Job Title </label>
					                  <input value={this.props.title} onChange={this.handleChangeTitle} type="jobTitle" className="form-control" id="exampleInputEmail3" placeholder="JobTitle" />
				                </div>

				                <div className="form-group col-sm-5">
					                  <label className="sr-only" htmlFor="exampleInputPassword3">Location </label>
					                  <input value={this.props.location} onChange={this.handleChangeLocation} type="location" className="form-control" id="exampleInputPassword3" placeholder="Location" />
					            </div>

				                <div className="form-group col-sm-2">
				                    <button onClick={this.handleSubmit} type="button" id="search_selected" className="btn btn-primary btn-findJobs">Search</button> 
				                </div> 
				                             
				              </form>    
			            </div>
			        </div>
		        </div>
  			</div>
		);
	}
}

export default SearchForm;