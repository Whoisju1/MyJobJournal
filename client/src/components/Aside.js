import React from 'react';

export const Aside = (props) => {
    return(
        <aside className="aside">
            {props.children}
        </aside>
    )
}

export default Aside;