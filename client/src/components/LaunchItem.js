import React from 'react'
import classNames from 'classnames';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

const upcoming = <p className="text-info">Upcoming</p>;

export default function LaunchItem({launch:{flight_number, mission_name,launch_date_local, launch_success, tbd}}) {

   return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission: <span className={classNames({
                        'text-success': launch_success,
                        'text-danger': !launch_success,
                        
                    })}>{mission_name}</span></h4>
                    <p>Date: <Moment format="YYYY">{launch_date_local}</Moment></p>
                    {tbd==="true"?upcoming:null}

                </div>
                <div className="col-md-3">
                    <Link to={`/launch/${flight_number}`} className="btn btn-secondary">Learn More</Link>
                </div>
            </div>
        </div>
    )
}
