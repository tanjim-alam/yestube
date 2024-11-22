import Link from 'next/link'
import React from 'react'

function PrivacyPolicyPage() {
    return (
        <div className='bg-white lg:py-20 py-10'>
            <div className='lg:w-[80%] w-[90%] m-auto'>
                <div>
                    <h1 className='text-4xl font-bold text-center text-black'>Privacy Policy</h1>
                    <p className='leading-relaxed text-slate-600 mt-7'>
                        At yestube.xyz, accessible from www.yestube.xyz, one of our main priorities is the privacy of our visitors.
                        This Privacy Policy document contains types of information that is collected and recorded by yestube.xyz and
                        how we use it.
                    </p>
                    <p className='leading-relaxed text-slate-600 mt-3'>
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                    </p>
                    <p className='leading-relaxed text-slate-600 mt-3'>
                        This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the
                        information that they shared and/or collect in yestube.xyz. This policy is not applicable to any information collected
                        offline or via channels other than this website. Our Privacy Policy was created with the help of the Privacy Policy
                        Generator.
                    </p>
                </div>
                <div className='mt-8 flex flex-col gap-6'>
                    <div>
                        <h2 className='lg:text-3xl text-2xl font-bold text-black'>Consent</h2>
                        <p className='leading-relaxed text-slate-600 mt-1'>
                            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                        </p>
                    </div>
                    <div>
                        <h2 className='lg:text-3xl text-2xl font-bold text-black'>Information we collect</h2>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made
                            clear to you at the point we ask you to provide your personal information.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            If you contact us directly, we may receive additional information about you such as your name, email address, phone number,
                            the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            When you register for an Account, we may ask for your contact information, including items such as name, company name,
                            address, email address, and telephone number.
                        </p>
                    </div>

                    <div>
                        <h3 className='lg:text-3xl text-2xl font-bold text-black'>How we use your information</h3>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            We use the information we collect in various ways, including to:
                        </p>
                        <ul className='flex flex-col gap-3 list-disc list-inside mt-3 leading-relaxed text-slate-600'>
                            <li >
                                Provide, operate, and maintain our website
                            </li>
                            <li>
                                Improve, personalize, and expand our website
                            </li>
                            <li >
                                Understand and analyze how you use our website
                            </li>
                            <li >
                                Develop new products, services, features, and functionality
                            </li>
                            <li>
                                Communicate with you, either directly or through one of our partners, including for customer service, to provide you with
                                updates and other information relating to the website, and for marketing and promotional purposes
                            </li>
                            <li>
                                Send you emails
                            </li>
                            <li>
                                Find and prevent fraud
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h3 className='lg:text-3xl text-2xl font-bold text-black'>Log Files</h3>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            yestube.xyz follows a standard procedure of using log files. These files log visitors when they visit websites.
                            All hosting companies do this and a part of hosting services’ analytics. The information collected by log files include
                            internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages,
                            and possibly the number of clicks. These are not linked to any information that is personally identifiable.
                            The purpose of the information is for analyzing trends, administering the site,
                            tracking users’ movement on the website, and gathering demographic information.
                        </p>
                    </div>
                    <div>
                        <h3 className='lg:text-3xl text-2xl font-bold text-black'>Cookies and Web Beacons</h3>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            Like any other website, yestube.xyz uses ‘cookies’. These cookies are used to store information including visitors’ preferences,
                            and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by
                            customizing our web page content based on visitors’ browser type and/or other information.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            For more general information on cookies, please read “What Are Cookies”.
                        </p>
                    </div>
                    <div>
                        <h3 className='lg:text-3xl text-2xl font-bold text-black'>Our Advertising Partners</h3>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below.
                            Each of our advertising partners has their own Privacy Policy for their policies on user data.
                            For easier access, we hyperlinked to their Privacy Policies below.
                        </p>
                        <ul className='flex flex-col gap-3 list-disc list-inside mt-3'>
                            <li className='leading-relaxed text-slate-600'>
                                Google
                            </li>
                        </ul>
                        <Link
                            className='text-secondary'
                            href={"https://policies.google.com/technologies/ads"}>https://policies.google.com/technologies/ads</Link>.
                    </div>
                    <div>
                        <h3 className='lg:text-3xl text-2xl font-bold text-black'>Advertising Partners Privacy Policies</h3>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            You may consult this list to find the Privacy Policy for each of the advertising partners of yestube.xyz.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in
                            their respective advertisements and links that appear on yestube.xyz, which are sent directly to users’ browser.
                            They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness
                            of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            Note that yestube.xyz has no access to or control over these cookies that are used by third-party advertisers.
                        </p>

                    </div>
                    <div>
                        <h3 className='lg:text-3xl text-2xl font-bold text-black'>Third Party Privacy Policies</h3>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            yestube.xyz Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy
                            Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about
                            how to opt-out of certain options.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            You can choose to disable cookies through your individual browser options. To know more detailed information about
                            cookie management with specific web browsers, it can be found at the browsers’ respective websites.
                        </p>
                    </div>
                    <div>
                        <h3 className='lg:text-3xl text-2xl font-bold text-black'>CCPA Privacy Rights (Do Not Sell My Personal Information)</h3>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            Under the CCPA, among other rights, California consumers have the right to:
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            Request that a business that collects a consumer’s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            Request that a business delete any personal data about the consumer that a business has collected.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            Request that a business that sells a consumer’s personal data, not sell the consumer’s personal data.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                        </p>
                    </div>
                    <div>
                        <h3 className='lg:text-3xl text-2xl font-bold text-black'>GDPR Data Protection Rights</h3>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            The right to rectification – You have the right to request that we correct any information you believe is inaccurate.
                            You also have the right to request that we complete the information you believe is incomplete.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            The right to restrict processing – You have the right to request that we restrict the processing of your personal data,
                            under certain conditions.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            The right to data portability – You have the right to request that we transfer the data that we have collected to another organization,
                            or directly to you, under certain conditions.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                        </p>
                    </div>
                    <div>
                        <h3 className='lg:text-3xl text-2xl font-bold text-black'>Children’s Information</h3>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe,
                            participate in, and/or monitor and guide their online activity.
                        </p>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            yestube.xyz does not knowingly collect any Personal Identifiable Information from children under the age of 13.
                            If you think that your child provided this kind of information on our website, we strongly encourage you to contact
                            us immediately and we will do our best efforts to promptly remove such information from our records.
                        </p>

                    </div>
                    <div>
                        <h3 className='lg:text-3xl text-2xl font-bold text-black'>Contact Us</h3>
                        <p className='leading-relaxed text-slate-600 mt-3'>
                            If you have any questions about this Privacy Policy, You can contact us: By email: <b>support@yestube.xyz</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicyPage