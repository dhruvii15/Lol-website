import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Container } from 'reactstrap';

// Lazy load components
const Header = lazy(() => import('../Component/Header'));
const Title = lazy(() => import('../Component/Title'));
const Footer2 = lazy(() => import('../Component/Footer2'));
const Loading = lazy(() => import('../Component/Loading'));

const PrivacyPolicy = () => {
    const [loading, setLoading] = useState(true);
    const title = "Privacy Policy";

    useEffect(() => {
        // Simulate loading process
        const timer = setTimeout(() => {
            setLoading(false);
        }, 10); // Loading timeout duration

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    if (loading) {
        return (
            <Suspense fallback={<div><Loading /></div>}>
                <Loading />
            </Suspense>
        );
    }

    return (
        <div>
            <Suspense fallback={<div><Loading /></div>}>
                <Header />
                <div className='rounded-5' style={{ backgroundColor: "#F6F6F6" }}>
                    <Title title={title} />
                    <div>
                        <Container className='py-5 px-4 fs-5 BwGradual'>
                            <p className='BwGradual'>
                                This Privacy Policy (the "Policy") explains the way of treatment of the information which is provided or collected in the websites on which this Policy is posted. In addition the Policy also explains the information which is provided or collected in the course of using the applications of the Company which exist in the websites or platforms of other company. Through this Policy, the Company regards personal information of the users as important and inform them of the purpose and method of Company's using the personal information provided by the users and the measures taken by the Company for protection of those personal information. This Policy will be effective on the 20th September, 2024 and, in case of modification thereof, the Company will make public notice of it through posting it on the bulletin board of Company's website or individual notice through sending mails or e-mails.
                            </p>
                            <p className='BwGradualBold py-3 m-0 fs-3'>1. The basics</p>
                            <p>- LOL allows users to receive messages through their social media. This is how it works:</p>
                            <p>The LOL app permits a user (“App User”) to generate an LOL link and then use the link to solicit messages from anyone with access to the link (the person sending a message is a “Message Sender”).</p>
                            <p>‍When a Message Sender clicks on the LOL link, they will be taken to a URL where they can send a message directly to the App User. The App User also has the choice to post the messages and App User’s response to the App User’s social media accounts.</p>
                            <p>LOL does not store the name or social media handles of the Message Sender, and cannot reveal this information to the App User or to others. LOL may reveal properties of the Message Sender to the App User, based on the Message Sender’s IP address or browser user agent. Additionally, LOL may share this information with law enforcement for compliance, safety, and integrity issues.</p>
                            <p>To protect the safety of our users, we employ AI content moderation services like Hive Moderation. These services utilize deep learning and sophisticated algorithms to screen messages and filter out harmful language and bullying.</p>
                            <p className='BwGradualBold fs-4'>‍Personal information we collect :</p>
                            <p>‍We collect information about you from a variety of sources, and the type of information we collect depends on how you interact with our Services <br></br>
                                – such as whether you visit our website, download the LOL app, or send messages to App Users through the Services.</p>
                            <p className='BwGradualBold fs-4'>‍Personal information you provide to us :</p>
                            <p>Account information, that App Users provide when they download the LOL app and sign up to use the Services. App Users may provide their social media handle so that we can link the Services to their accounts. They may also upload a profile picture for their LOL account.</p>
                            <p>‍Messages that Message Senders submit to App Users through the Services.</p>
                            <p>‍Feedback or correspondence, such as information you provide when you contact us with questions, feedback, product reviews, or otherwise correspond with us online.</p>
                            <p>‍Usage information, such as information about how you use the Services and interact with us, including information associated with any content you upload to the Services or otherwise submit to us, and information you provide when you use any interactive features of the Services.</p>
                            <p>‍Other information that we may collect which is not specifically listed here, but which we will use in accordance with this Privacy Policy or as otherwise disclosed at the time of collection.</p>
                            <p>‍Information we obtain from other sources. We may obtain your personal information from other third parties, such as marketing partners, publicly-available sources, lead generators and data providers.</p>
                            <p className='BwGradualBold'>Automatic data collection. We and our service providers may automatically log information about you, your computer or mobile device, and your interaction over time with our Services, our communications and other online services, such as:</p>
                            <p>Device data, such as your computer’s or mobile device’s operating system type and version, manufacturer and model, browser type, screen resolution, RAM and disk size, CPU usage, device type (e.g., phone, tablet), IP address, unique identifiers (including identifiers used for advertising purposes), language settings, mobile device carrier, radio/network information (e.g., WiFi, LTE, 4G), and general location information such as city, state or geographic area.</p>
                            <p>‍Online activity data, such as  pages or screens you viewed, how long you spent on a page or screen, browsing history, navigation paths between pages or screens, information about your activity on a page or screen, access times, and duration of access, and whether you have opened our marketing emails or clicked links within them.</p>
                            <p className='BwGradualBold fs-4'>‍We use the following tools for automatic data collection :</p>
                            <p>Cookies, which are text files that websites store on a visitor‘s device to uniquely identify the visitor’s browser or to store information or settings in the browser for the purpose of helping you navigate between pages efficiently, remembering your preferences, enabling functionality, helping us understand user activity and patterns, and facilitating online advertising.</p>
                            <p>‍Local storage technologies, like HTML5, that provide cookie-equivalent functionality but can store larger amounts of data, including on your device outside of your browser in connection with specific applications.</p>
                            <p>‍Web beacons, also known as pixel tags or clear GIFs, which are used to demonstrate that a webpage or email was accessed or opened, or that certain content was viewed or clicked.</p>
                            <p className='BwGradualBold fs-4'>‍How we use your personal information</p>
                            <p className='BwGradualBold fs-4'> ‍We use Personal information for one or more of the following purposes :</p>
                            <p>Providing and supporting the Services. We use your personal information to operate, maintain, and provide you with the Services. In particular we will use your personal information to perform our contractual obligation under our terms of use towards you, such as to:Allow you to create an account and use the Services.Respond to your requests, provide customer support, contact you in case of any issue with your account, and send you announcements, updates, security alerts, and support and administrative messages.</p>
                            <p>‍Improve, monitor, personalize, and protect our Services and communications. It is in our legitimate business interests to improve and keep our Services safe for our users, which includes:Troubleshooting, testing and research and to keep the Services secure.Investigating and protecting against fraudulent, harmful, unauthorized or illegal activity.Providing customized Services and communications that may be relevant or of interest to you.</p>
                            <p className='BwGradualBold fs-4'> ‍‍Marketing and advertising, including for :</p>
                            <p>‍Direct marketing. We may send you direct marketing communications as permitted by law, including, but not limited to, sending newsletters, and notifying you of special promotions, offers and events via email and other means.</p>
                            <p>‍Interest-based advertising. We engage our advertising partners, including third party advertising companies and social media companies, to advertise our Services. Where applicable, if you choose to subscribe to our marketing and advertising, we process your personal information based on your consent, which you may withdraw at any time.</p>
                            <p>‍To enforce our agreements, to comply with legal obligations and to defend us against legal claims or disputes. We may use your personal information in our legitimate business interests to enforce and comply with our terms and policies, to ensure the integrity of our Services and to defend ourselves against legal claims or disputes. Some processing may also be necessary to comply with a legal obligation, for example to keep records of transactions, or as requested by any judicial process or governmental agency.</p>
                            <p className='BwGradualBold fs-4'>‍How we share your personal information</p>
                            <p>Service providers. We may share your personal information with third party companies and individuals that provide services on our behalf or help us operate our Services (such as customer support, content moderation, hosting, analytics, email delivery, marketing, identity verification, fraud detection, payment processing, and database management).</p>
                            <p>‍Advertising partners. We may share your personal information with third party advertising companies, including for the interest-based advertising purposes described above.</p>
                            <p>For compliance, fraud prevention and safety. We may share your personal information for the compliance, fraud prevention and safety purposes described above.</p>
                            <p>Business transfers. We may sell, transfer or otherwise share some or all of our business or assets, including your personal information, in connection with a business transaction (or potential business transaction) such as a corporate divestiture, merger, consolidation, acquisition, reorganization or sale of assets, or in the event of bankruptcy or dissolution. In such a case, we will make reasonable efforts to require the recipient to honor this Privacy Policy.</p>
                            <p className='BwGradualBold fs-4'>‍How you share your personal information</p>
                            <p>Other social media users: App Users may choose to post their responses to messages they receive through the Services to their social media accounts. Your social media settings will determine which other users will be able to view these responses.</p>
                            <p className='BwGradualBold fs-4'>‍Your rights and choices</p>
                            <p className='BwGradualBold'>Personal information requests. We also offer you choices that affect how we handle the personal information that we control. You may request the following in relation to your personal information:</p>
                            <p>‍Information about how we have collected and used your personal information. We have made this information available to you without having to request it by including it in this Privacy Policy.</p>
                            <p>‍Access to a copy of the personal information that we have collected about you. Where applicable, we will provide the information in a portable, machine-readable, readily usable format.</p>
                            <p>Correction of personal information that is inaccurate or out of date.</p>
                            <p>‍Deletion of personal information that we no longer need to provide the Services or for other lawful purposes.</p>
                            <p>‍Additional rights, such as to object to and request that we restrict our use of your personal information, and where applicable, you may withdraw your consent.</p>
                            <p>‍Do Not Track. Some Internet browsers may be configured to send “Do Not Track” signals to the online services that you visit.  We currently do not respond to “Do Not Track” or similar signals. To find out more about “Do Not Track,” please visit http://www.allaboutdnt.com. </p>




                            <p className='BwGradualBold pt-3 m-0 fs-3'>2. Children online privacy protection Act (COPPA)</p>
                            <p>In principle, the Company does not collect any information from children under 18 or equivalent minimum age as prescribed in the laws in the relevant jurisdiction. The website or application, products, and services of the Company are the ones to be provided to ordinary people, in principle. The website or application of the Company has a function to do age limit so that children cannot use it and the Company does not intentionally collect any personal information from children through that function.</p>
                            <p>(Additional procedure for collecting personal information from children) However, if the Company collects any personal information from children under 13 or equivalent minimum age as prescribed in the laws in the relevant jurisdiction for the services for unavoidable reason, the Company will go through the additional procedure of the followings for protecting that personal information of children:</p>
                            <p>- Obtain consent from the parents or guardians of children to collect personal information of children or directly send the information of products and services of the Company.</p>
                            <p>- Give the parents or guardians of children a notice of Company's policy of privacy protection for children including the items, purpose, and sharing of personal information collected.</p>
                            <p>- We do not specifically market to children under the age of 18 years old.</p>
                            <p className='BwGradualBold pt-3 m-0 fs-3'>3. Modification of privacy protection policy</p>
                            <p>- The Company has the right to amend or modify this Policy from time to time and, in such case, the Company will make a public notice of it through the bulletin board of its website (or through individual notice such as a written document, fax, or e-mail) and obtain consent from the users if required by relevant laws.</p>
                            <p>We suggest you check this page on a regular basis so you are aware of any modifications. You acknowledge and accept that it is your responsibility to periodically review this policy so you are aware of modifications.</p>
                            <p className='BwGradualBold pt-3 m-0 fs-3'>4. 3rd party's sites and services</p>
                            <p>- The website or application, product, or service of the Company may include links to the ones of a 3rd party and the privacy protection policy of the site of the 3rd party may be different. Thus, it is required for the users to check additionally that policy of a 3rd party site linked to the site of the Company.</p>
                            <p className='BwGradualBold pt-3 m-0 fs-3'>5. Ads</p>
                            <p>- The website or application may display ads supplied by a third-party ad provider, such as AdMob. These providers may be using cookies, web beacons, and other technologies to collect information as a result of ad serving.</p>
                            <p className='BwGradualBold pt-3 m-0 fs-3'>6. Camera, Microphone, and Storage</p>
                            <p>- For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to storage, camera, and microphone. The information that I request will be retained on your device and is not collected by me in any way.</p>
                            <p className='BwGradualBold pt-3 m-0 fs-3'>7. Responsible department of the company</p>
                            <p>- The Company designates the following department and person in charge of personal information in order to protect personal information of customers and deal with complaints from customers:</p>
                            <p>- Department responsible for privacy protection and customer service:</p>
                            <p className='m-0'>Contact No.: +91 90238-38674</p>
                            <p className='m-0'>E-mail: help@lolcards.link</p>
                            <p className='pb-5'>The latest update date: 15 September, 2024</p>
                        </Container>
                    </div>
                    <Footer2 />
                </div>
            </Suspense>
        </div>
    );
};

export default PrivacyPolicy;