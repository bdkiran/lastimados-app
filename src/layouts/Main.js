import React from 'react';

import Topbar from 'layouts/components/Topbar';
import Botbar from 'layouts/components/Botbar';
import SEO from 'layouts/components/SEO';

const Main = props => {
    const {children} = props;
    return (
        <div>
            <SEO/>
            <Topbar/>
                <main>{children}</main>
            <Botbar/>
        </div>
    )
    
}

export default Main;