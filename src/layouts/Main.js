import React from 'react';

import Topbar from 'layouts/components/Topbar';
import Botbar from 'layouts/components/Botbar';

const Main = props => {
    const {children} = props;
    return (
        <div>
            <Topbar/>
                <main className="">{children}</main>
            <Botbar/>
        </div>
    )
    
}

export default Main;