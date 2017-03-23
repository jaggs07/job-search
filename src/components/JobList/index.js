import React, { Component } from 'react';

class SiteImage extends Component {

	render(){
		let img;
		if (this.props.siteType === 'indeed'){
			img = "../../src/static/img/indeed.jpg";
		}
		if (this.props.siteType === 'zipRecruiter'){
			img = "../../src/static/img/zip.jpg";
		}
		if (this.props.siteType === 'jobs2Carrers'){
			img = "../../src/static/img/jobs2careers.png";
		}
		return(
			<img src={img} className="img-circle" height="100" width="100" alt="Avatar" />  
		);
	}
}


class DisplayJobs extends Component {
	render(){

		let jobDetail = [];

		this.props.jobs.map(function(job, i){
			jobDetail.push(

				<div key={i} className="row">
					<div className="col-sm-9">
			               
		                <a href={job.jobLink} target='_blank'><h2> {job.title} </h2></a>
		                <h3> {job.companyName} </h3> 
		                <p>
			               <span>{job.location}</span>
		                </p>
		                <p><b> Posted Date: </b> {job.date} </p> 

		            </div>

		            <div className="col-sm-3">
		                <SiteImage siteType={job.partnerSite} />  
		            </div>	
		        </div>
			);
      	});

		return (
			
			<div className="col-sm-9">
			    <div className="row">

				    <div className="col-sm-12">

				        <div className="well">
				        	{jobDetail}
				            
				        </div>
				    </div>
				</div> 
			</div>
		);
	}
}

export default DisplayJobs;