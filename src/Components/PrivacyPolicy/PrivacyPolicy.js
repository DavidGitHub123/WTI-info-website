import React from "react";
import { Link } from "react-router";
import './PrivacyPolicy.css'
import "../../index.css";

export default function PrivacyPolicy() {
  return (

    <div className="privacy">

      <div>
          <Link className='button' to="/">Home</Link>

          <h1>Privacy Policy for The Words To Impress App</h1>
          <h3>Effective Date: January 1, 2025</h3>
          <h3>We value your privacy and are committed to protecting the personal information you share with us when using our app, Words to Impress App (the "App"). This Privacy Policy explains what information we collect, how we use it, and how we protect it. By using the App, you consent to the collection and use of information in accordance with this Privacy Policy.</h3>
          
          <div className="section">  
            <h3>1. Information We Collect</h3>
              <p>We may collect the following types of information:</p>
              <p>•	Personal Information: This includes information that identifies you as an individual, such as your name, email address, or phone number, which you may provide when you register or interact with the App.</p>
              <p>•	Usage Data: We collect information about how you use the App, such as your activity within the App, device information, IP addresses, browser type, and the pages you visit. This helps us improve our services and your experience.</p>
              <p>•	Location Information: If you enable location services, we may collect your device's geolocation data to provide location-based services, such as nearby locations or personalized content.</p>
              <p>•	Cookies and Tracking Technologies: We may use cookies, web beacons, or other tracking technologies to improve user experience and analyze usage patterns.</p>
          </div>

          <div className="section"> 
            <h3>2. How We Use Your Information</h3>
              <p>We may use the information we collect for the following purposes:</p>
              <p>•	To provide and maintain the App’s features and services.</p>
              <p>•	To personalize your experience and provide customized content.</p>
              <p>•	To send you notifications, updates, and customer support communications.</p>
              <p>•	To monitor and analyze usage patterns to improve the App.</p>
              <p>•	To comply with legal obligations and protect our rights.</p>
          </div>

          <div className="section">
            <h3>3. How We Share Your Information</h3>
            <p>We do not sell or share your personal information with third parties, except in the following situations:</p>
            <p>•	Service Providers: We may share your information with third-party service providers who help us operate the App and deliver services, such as payment processors or analytics tools. These service providers are bound by confidentiality agreements and are not permitted to use your information for any other purpose.</p>
            <p>•	Legal Compliance: We may disclose your information if required by law, to enforce our terms of service, or to protect the rights, property, or safety of [Your Company Name], our users, or others.</p>
          </div> 

          <div className="section"> 
            <h3>4. Data Security</h3>
              <p>•  We take reasonable precautions to protect your personal information from unauthorized access, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>
          </div>

          <div className="section">
            <h3>5. Your Rights and Choices</h3>
              <p>•	Access and Update Your Information: You may access and update your personal information within the App’s settings or by contacting us at [your contact email].</p>
              <p>•	Data Retention: We will retain your personal information for as long as necessary to provide you with the services and as required by law.</p>
              <p>•	Opt-Out of Marketing Communications: You can opt-out of receiving promotional emails or notifications by following the unsubscribe instructions included in the communication or by adjusting the settings within the App.</p>
              <p>•	Location Services: You can disable location services on your device at any time by adjusting your device's settings.</p>
          </div> 

          <div className="section">
            <h3>6. Children’s Privacy</h3>
              <p>•  Our App is not intended for use by children under the age of 13, and we do not knowingly collect personal information from children. If we learn that we have inadvertently collected personal information from a child under 13, we will take steps to delete such information as soon as possible.</p>
          </div> 

          <div className="section">
            <h3>7. Third-Party Links</h3>
              <p>•  Our App may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.</p>
          </div> 

          <div className="section"> 
            <h3>8. Changes to This Privacy Policy</h3>
              <p>•  We may update this Privacy Policy from time to time. Any changes will be reflected in this policy, and the "Effective Date" at the top of this page will be updated. We recommend that you review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
          </div>

          <div className="section">
            <h3>9. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy or how we handle your personal information, please email us at: Thewordstoimpress@gmail.com.</p>
          </div> 

      </div>

      </div>
   
  );
}
