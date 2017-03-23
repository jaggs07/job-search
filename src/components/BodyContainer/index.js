var React = require('react');
var Form = require('../Form/index');
var SideBar = require('../SideBar/index');
var SearchResults = require('../SearchResults/index');
require( './styles.css');
var $ = require('jquery');
var  fetchJobs = require('../../services/api/fetchJobs');
var loader = require('../../img/loading.gif');

var FetchData = React.createClass({

    getInitialState: function(){

        return {

            title : '',
            location : '',
            sort : 'relevance',
            posted: '',
            distance: '',
            posts:[],
            isChecked: [true, true, true],
            sites:'INDEED,ZIPRECRUITER,JOBS2CAREERS',
            loaderClass:'row hidden',
            errorMessage:'invalid_search hidden'
        };
    },

    setTitle: function(newTitle){

        this.setState({
            title: newTitle
        });
    },

    setLocation: function(newLocation){

        this.setState({
            location: newLocation
        });
    },


    setSort: function(newSort){

        this.setState({
            sort: newSort
        });
    },

    setPosted: function(newPosted){

        this.setState({
            posted: newPosted
        });
    },

    setDistance: function(newDistance){

        this.setState({
            distance: newDistance
        });
    },

    handleCheckboxChange: function(newCheckboxStatus){

        var siteParamArray=[];
        var sitesParam = "";

        this.setState({

            isChecked: newCheckboxStatus
        });

        if(newCheckboxStatus[0]){

            siteParamArray.push("INDEED");
        }

        if(newCheckboxStatus[1]){

            siteParamArray.push("ZIPRECRUITER");
        }

        if(newCheckboxStatus[2]){

            siteParamArray.push("JOBS2CAREERS");
        }

        siteParamArray.map(function(name, index){

            if(index=== ( siteParamArray.length - 1) ){

              sitesParam +=  name;
            }else{

                sitesParam = sitesParam + name + ",";
            }
            return sitesParam;
        });

        this.setState({

            sites: sitesParam
        });

    },

    apiCall: function(){

        var url = "http://localhost:8080/search/jobs?" + $.param({ title: this.state.title,
                                                                      location: this.state.location,
                                                                      sort: this.state.sort,
                                                                      radius: this.state.distance,
                                                                      relevance: this.state.relevance,
                                                                      posted: this.state.posted,
                                                                      site: this.state.sites
                                                                    });

        fetchJobs(url)
        .then(res => {
            this.setState({ posts: res.data });

                if(res instanceof Error) {

                     console.log(res.message,"error message");
                } else {

                    console.log(res.data,"result data");
            
                    if(res.data.length <=0){

                        this.setState({
                            errorMessage: 'invalid_search',
                            loaderClass:'row hidden'
                        })
                    }else{

                        this.setState({

                            posts:res.data,
                            loaderClass:'row hidden'
                        })
                    }
                 
                }
        })
        .catch(function (error) {

             console.log(JSON.stringify(error));
        });
    },

    handleClick: function(){

        this.setState({
             loaderClass:'row',
             posts:[],
             errorMessage:'invalid_search hidden'

        });

        this.apiCall();
        
        
    },

    render() {
        
            return (

                <div className="container" > 

                    <Form 
                        onClick={this.handleClick} 
                        title={this.state.title} 
                        onChangeTitle={this.setTitle} 
                        location={this.state.location}
                        onChangeLocation={this.setLocation}
                    />


                    <div className="row">
                    
                        <SideBar 
                            isChecked={this.state.isChecked}

                            onChangeCheckbox={this.handleCheckboxChange}

                            sort={this.state.sort} 

                            onSortChange={this.setSort}

                            posted={this.state.posted} 

                            onPostedChange={this.setPosted}

                            distance={this.state.distance}

                            onDistanceChange={this.setDistance}
                        />

                        <div className="col-sm-9  ">
                            <div className={this.state.loaderClass}>
                                <div className="col-sm-12">
                                    <div className="loader-gif">
                                        <img className="loader-image" src={loader} alt='load-gif' />  
                                    </div>
                                </div>

                            </div>
                        </div> 

                        <SearchResults
                            posts={this.state.posts} 
                            error={this.state.errorMessage}
                        />

                    </div>
                </div>

        );
    }
});


module.exports = FetchData;
