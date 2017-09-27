import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

export const Nav = (props) => {

    const showLength = () =>{ 
        if(props.data) return props.data.applications.length;
    };
    
    return(
        <div>
            <nav className="navbar">
            <Link to="/applications">
                <div className="application-link-wrapper">
                        Dashboard
                   
                    <div className="application-numbers">
                        {showLength() || 0}
                    </div>
                </div>
            </Link>
                <Link to="/favorites">
                    Favorites
                </Link>
            </nav>
        </div>
    )
}

const mapStateToProps = ({data}) => {
    return {data}
}

export default connect(mapStateToProps, actions)(Nav);
