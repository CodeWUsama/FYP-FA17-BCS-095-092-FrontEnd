import React, { Component } from 'react';
import IntroBanner from './IntroBanner/IntroBanner';
import ServicesSection from './ServicesSection/ServicesSection';
import Explain from './ExplainService/Explain';
import StunningTemp from './StunningTemp/StunningTemp';
import CreateWeb from './CreateWebsite/CreateWebsite';
import Footer from './../Footer/Footer';

export default class Home extends Component { 
    render() {
        return (
            <div>
                <IntroBanner></IntroBanner>
                <ServicesSection />
                <Explain></Explain>
                <StunningTemp></StunningTemp>
                <CreateWeb></CreateWeb>
                <Footer />
             </div>
        );
    }
}