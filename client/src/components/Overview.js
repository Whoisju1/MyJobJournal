import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';      

export const Overview = (props) => {
    let applicationQuantity = props.auth.applications.length;
    return(
        <div>
            <Link to='/applications'>View your applications</Link>
            <div className="application-number">{`Number of applications ${applicationQuantity}`}</div>
            {console.log()}
        </div>
    )
}

const mapStateToProps = ({auth}) => {
    return {
        auth
    }
}

export default connect(mapStateToProps)(Overview);