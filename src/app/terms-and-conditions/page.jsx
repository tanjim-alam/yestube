import React from 'react';
import TermsAndConditionsPage from './TermsAndConditionsPage';
export const generateMetadata = () => {
    return {
        title: "Terms and Conditions",
        description: "Terms and Conditions Welcome! These terms and conditions outline the rules and regulations for the use of Media’s Website, located at www... By accessing this website we assume you accept these terms and conditions. Do not continue to use if you do not agree to take all of the terms and… Read More Terms and Conditions"
    }
}

function page() {
    return <TermsAndConditionsPage />
}

export default page