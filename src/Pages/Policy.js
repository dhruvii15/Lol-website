import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import Title from '../Component/Title';
import { Container } from 'reactstrap';
import Footer2 from '../Component/Footer2';
import Loading from '../Component/Loading';



const PrivacyPolicy = () => {

    const [loading, setLoading] = useState(true);

    const title = "Privacy Policy";

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div>
            <Header />
            <div className='rounded-5' style={{ backgroundColor: "#F6F6F6" }}>
                <Title title={title} />
                <div>
                    <Container className='py-5 px-4 fs-5 BwGradual'>
                        <p className='BwGradual'>
                            This Privacy Policy (the "Policy") explains the way of treatment of the information which is provided or collected in the websites on which this Policy is posted. In addition the Policy also explains the information which is provided or collected in the course of using the applications of the Company which exist in the websites or platforms of other company. Through this Policy, the Company regards personal information of the users as important and inform them of the purpose and method of Company's using the personal information provided by the users and the measures taken by the Company for protection of those personal information. This Policy will be effective on the 20th September, 2020 and, in case of modification thereof, the Company will make public notice of it through posting it on the bulletin board of Company's website or individual notice through sending mails or e-mails.                        </p>
                        <p className='BwGradualBold pt-3 m-0 fs-4'>1.Information to be collected and method of collection</p>
                        <p>-We do not take any information from user</p>
                        {/* == */}
                        <p className='BwGradualBold pt-3 m-0 fs-4'>2. App use</p>
                        <p>-The purpose of the Anonymous create a funny cards.</p>
                        {/* == */}
                        <p className='BwGradualBold pt-3 m-0 fs-4'>3. Children online privacy protection Act(COPPA)</p>
                        <p>In principle, the Company does not collect any information from the children under 18 or equivalent minimum age as prescribed in the laws in relevant jurisdiction. The website or application, products and services of the Company are the ones to be provided to ordinary people, in principle. The website or application of the Company has function to do age limit so that children cannot use it and the Company does not intentionally collect any personal information from children through that function.</p>
                        <p>(Additional procedure for collecting personal information from children) However, if the Company collects any personal information from children under 13 or equivalent minimum age as prescribed in the laws in relevant jurisdiction for the services for unavoidable reason, the Company will go through the additional procedure of the followings for protecting that personal information of children:</p>
                        <p>-Obtain consent from the parents or guardian of children so as to collect personal information of children or directly send the information of products and services of the Company.</p>
                        <p>-Give the parents or guardian of children a notice of Company's policy of privacy protection for children including the items, purpose and sharing of personal information collected.</p>
                        <p>-We do not specifically market to children under the age of 18 years old.</p>
                        {/* == */}
                        <p className='BwGradualBold pt-3 m-0 fs-4'>4. Modification of privacy protection policy</p>
                        <p>-The Company has the right to amend or modify this Policy from time to time and, in such case, the Company will make a public notice of it through bulletin board of its website (or through individual notice such as written document, fax or e-mail) and obtain consent from the users if required by relevant laws.</p>
                        <p> We suggest you check this page on a regular basis so you are aware of any modifications. You acknowledge and accept that it is your responsibility to periodically review this policy so you are aware of modifications.</p>
                        {/* == */}
                        <p className='BwGradualBold pt-3 m-0 fs-4'>5. 3rd party's sites and services</p>
                        <p>-The website or application, product or service of the Company may include the links to the ones of a 3rd party and the privacy protection policy of the site of 3rd party may be different. Thus, it is required for the users to check additionally that policy of a 3rd party site linked to the site of the Company.</p>
                        {/* == */}
                        <p className='BwGradualBold pt-3 m-0 fs-4'>6. Ads</p>
                        <p>-The website or application may display ads supplied by a third party ad provider, such as AdMob. These providers may be using cookies, web beacons, and other technologies to collect information as a result of ad serving.</p>
                        {/* == */}
                        <p className='BwGradualBold pt-3 m-0 fs-4'>7. Camera,Microphone and Storage</p>
                        <p>-For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to storage, camera, microphone. The information that I request will be retained on your device and is not collected by me in any way.</p>
                        {/* == */}
                        <p className='BwGradualBold pt-3 m-0 fs-4'>8. Responsible department of company</p>
                        <p>-The Company designates the following department and person in charge of personal information in order to protect personal information of customers and deal with complaints from customers:</p>
                        <p>-Department responsible for privacy protection and customer service :</p>
                        <p className='m-0'>Contact No.: +91 90238-38674</p>
                        <p className='m-0'>E-mail: help@lolcards.link</p>
                        <p className='pb-5'>The latest update date: 15 September,2024</p>
                        <hr />
                    </Container>

                </div>

                <Footer2 />
            </div>
        </div>
    );
};

export default PrivacyPolicy;