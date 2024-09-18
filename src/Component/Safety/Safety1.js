import React from 'react';


const FAQ = React.lazy(() => import('./Faq'));

const Safety1 = () => {
    return (
        <div className='BwGradual fs-5'>
            <div className='pt-5'>
                <p className='m-0 BwGradualBold fs-1'>our approach</p>
                <p className='BwGradualBold fs-1'>to safety</p>
                <p>At LOL, safety is our highest priority. We made LOL as a place where you can foster meaningful and authentic connections with your friends, and we are committed to cultivating a community rooted in kindness and understanding. We take our responsibility to protect the community seriously, and we are constantly improving our safety features to stay up-to-date with an ever-changing online world.</p>
                <p>LOL has built an extensive ecosystem of security tools, safety infrastructure, community guidelines, and user policies that make us a leading voice amongst our peers when it comes to user safety. You can also further control your LOL experience by pausing your link at any time, hiding specific words from your messages, blocking specific users, and reporting unwanted behavior. </p>
                <p>In addition to these features, our Community Team works around the clock to monitor user reports and support tickets, providing the LOL community with 24/7 help and guidance. No concern is too small for us; reach out to help@lolcards.link with any questions. We’re happy to help!</p>
                <p>Additionally, LOL leverages Hive Moderation’s automated moderation solution as the first line of defense to scan messages for inappropriate content.
                    Continue reading our Safety Center to learn more about these resources for a safe and fun experience on LOL.</p>
                <p>Continue reading our Safety Center to learn more about these resources for a safe and fun experience on LOL .</p>
            </div>

            <div className='pt-5'>
                <p className='BwGradualBold fs-1'>moderation</p>
                <p>We take any cases of bullying, hate, or violence very seriously. Our Community Team monitors user reports and support tickets 24/7 to ensure the safety and integrity of our platform and our users.</p>
                <p>LOL  leverages Hive Moderations’s automated moderation solution as the first line of defense to scan messages for inappropriate content. Hive employs cutting-edge deep learning technology to help safeguard our virtual space and filter out potentially harmful language before it hits users’ inboxes. Its advanced algorithm detects the semantic meaning of emojis, and its web scraper pulls specific examples of contextual emoji use. This evolving technology helps to keep us on trend, deciphering slang and helping ensure LOL  users are complying with our Community Guidelines.</p>
                <p>By combining human expertise and advanced technology, we've created a content moderation system that's both effective and able to understand and adapt to modern human behavior. Our Community Team brings their real-world experience and understanding
                    to the process, while Hive Moderation's complex AI algorithms provide invaluable
                    insights and support.</p>
                <p>Together, our Community Team and Hive Moderation act as  a safety shield for the LOL  community, constantly reviewing our platform for objectionable content and taking action.</p>
                <p>We understand that content moderation is a delicate balance between protecting our community and preserving our users’ freedom of expression. Our Community Team and Hive Moderation work diligently to strike this balance, ensuring that our platform remains a place where diverse voices can thrive while maintaining a respectful and inclusive environment, free of any forms of hate or abuse.</p>
            </div>

            <div className='pt-5'>
                <p className='BwGradualBold fs-1'>faq</p>
                <FAQ />
            </div>


        </div>
    );
};

export default Safety1;
