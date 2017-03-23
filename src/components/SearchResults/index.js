var React = require('react');
require('./styles.css');
var indeedImage = require('../../img/ico-indeed-v3.png');
var zipRecruiterImage = require('../../img/ico-ziprecruiter-v4.png');
var jobs2CarrersImage = require('../../img/ico-jobs2careers-v3.png');

var Image = React.createClass({

    render: function(){

        var img;

        if (this.props.siteType === 'indeed'){

            img = indeedImage;
        }else if (this.props.siteType === 'zipRecruiter'){

			img = zipRecruiterImage;
        }else if (this.props.siteType === 'jobs2Carrers'){

            img = jobs2CarrersImage;
        }
        return(

            <img className="site-image" src={img} height="100" width="100" alt="Avatar" />  
        );
    }
});

var SearchResults = React.createClass ({

	render() {

		var jobArray = [];

		var jobsArray = this.props.posts;

		if(jobsArray.length >0){

				jobsArray.map(function(job,i){

					jobArray.push(

			        	<li key={i} className="job-container">
								<div className="col-sm 9 job-details">

										<div className="jobTitle">
											<a href={job.jobLink} target='_blank'>
				   						         <h2 className="jobHeader"> {job.title} </h2>
				   						 	</a>
										</div>

				 						<div className="jobOrganization"> 
				 							<span>
				 								<b>Company: </b>{job.companyName} 
				 							</span>
				 						</div>

				 						<div className="jobLocation">			          
						               		<span> 
						               			<b>Location: </b>{job.location} 
						               		</span>
					              		</div>

					               		<div className="posteDate">
					               			<span>
					               				 <b>Posted : </b>{job.date} 
					               			 </span>
					               		 </div>

					               		 <div className="postedDateFormat">
					               			<span>
					               				 <b>Posted : </b>{job.postedDate} 
					               			 </span>
					               		 </div>  

								   		<div className="partnerSite">
								   			<span>
								   				 <b>Partner Site: </b>{job.partnerSite} 
								   			</span>
								   		</div> 

							    </div>

								<div className="col-sm-3 image-container">
										<span className="site-text">Apply on</span>
		           					     <Image siteType={job.partnerSite} /> 
		           				</div> 	
	           			</li>		    
 					);	
 					return job;		               
				})
		}
        if(jobArray.length >0){
			return (

				<div className="col-sm-9">
				    <div className="row">
					    <div className="col-sm-12">
					        <ul className="job-list-container">

						           {jobArray}
						           
				            </ul>
				        </div>
				    </div> 
			    </div>
			);
		}else{
			return (

				<div className="col-sm-9">
				    <div className="row">
					    <div className="col-sm-12">
						    <div className={this.props.error}>
					            <h2 className="error-text"><b>The location and title you searched could not be found.</b></h2>
					            <div id="search_suggestions">
					            	<p><b>Search suggestions:</b></p>
					             	<ul>
				                    	<li>Use a valid title and loaction</li>
				                    	<li>Make sure the title and loaction are spelled correctly</li>
				                    	<li>Try writing entire word instead of abbrevations</li>
					            	</ul>
					            </div>
					        </div>
				        </div>
				    </div> 
			    </div>
			);
		}
	}
});

module.exports = SearchResults;
