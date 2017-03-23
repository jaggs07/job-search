import React, { Component } from 'react';
import SearchForm from '../SearchForm/index';
import SideBar from '../SideBar/index';
import JobList from '../JobList/index';
import fetch from 'node-fetch';

class MainContainer extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
			title : 'Title',
			location : 'Location',
			sort : 'Relevance',
			posted: 'Any Time',
			distance: 'Any Where',
			data: [],
			checked: [true, true, true]

		};
	  }

	getInitialState(){

		return 
	}

	setTitle(newTitle){
		this.setState({
			title: newTitle
		});
	}

	setLocation(newLocation){
		this.setState({
			location: newLocation
		});
	}


	setSort(newSort){
		this.setState({
			sort: newSort
		});
	}

	setPosted(newPosted){
		this.setState({
			posted: newPosted
		});
	}

	setDistance(newDistance){
		this.setState({
			distance: newDistance
		});
	}

	handleClick(event){
		
		// alert("ok");
		fetch('http://localhost:8080/search/jobs?location=new york&title=java&site=INDEED,ZIPRECRUITER,JOBS2CAREERS',{
			method: 'GET',
			mode: 'cors',
			headers: new Headers({
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
			})
		})
	    .then(res => res.json())
	    .then(json => this.setState({data:json}));

	     // .then(json => console.log(json))
 	}

 	handleSiteChange(changedSite){
 		
 		this.setState({
 			checked: changedSite
 		});
 	}

	render(){
		return (
			
			<div className="container text-center" > 
				<SearchForm 
					onClick={this.handleClick} //for button click
					title={this.state.title} 
					onChangeTitle={this.setTitle} 
					location={this.state.location}
					onChangeLocation={this.setLocation} />

				<SideBar 
					checked={this.state.checked} // for checked sites
					onChangeSite={this.handleSiteChange} //for hande site change
					sort={this.state.sort} 
					onSortChange={this.setSort}
					posted={this.state.posted} 
					onPostedChange={this.setPosted}
					distance={this.state.distance}
					onDistanceChange={this.setDistance}
					/>
				<JobList jobs={this.state.data}/>
			</div> 
		);
	}
}

export default MainContainer;