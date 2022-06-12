import React from 'react';
// import PropTypes from 'prop-types';

import AppHeader from '../../modules/AppHeader';
import AppFooter from '../../modules/AppFooter';
import work from '../../assets/images/razrabotka.jpg';

import './styles.scss';

const Work = () => {
    return (<div>
        <AppHeader />
        <div className="work_img">
            <img src={work} />
        </div>
        <AppFooter isBottomAbsolute />
    </div>)
}

export default Work;
