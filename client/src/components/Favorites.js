import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

export const Favorites = props => {
	const renderContent = () => {
       const {data} = props;
       if (data){ 
           const {applications} = data; 
           return applications.map(item => {
                if (item.favorite === true) {
                    return (
                        <Link to={`/application/${item._id}`} key={item._id}>
                            <div className="fav-item">
                                <div className="fav-position">
                                    {item.position}
                                </div>
                                <div className="fav-company">
                                    {item.company}
                                </div>
                            </div>
                        </Link>
                    );
                }
            })
        }
	};

	return <div className="fav-container">{renderContent()}</div>;
};

const mapStateToProps = ({ data }) => {
	return {
		data
	};
};

export default connect(mapStateToProps, null)(Favorites);
