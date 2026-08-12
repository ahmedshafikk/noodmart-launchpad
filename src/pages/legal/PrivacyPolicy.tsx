import { Link } from 'react-router-dom';
import LegalLayout from '@/components/legal/LegalLayout';

const PrivacyPolicy = () => {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="Last updated: 12 August 2026">
      <p>
        NoodMart ("<strong>NoodMart</strong>," "<strong>we</strong>," "<strong>us</strong>," or "
        <strong>our</strong>") operates the NoodMart mobile application (the "<strong>App</strong>
        "), a food and restaurant ordering platform. This Privacy Policy explains what information
        we collect, how we use it, and the choices you have.
      </p>
      <p>
        By creating an account or using the App, you agree to the collection and use of
        information as described in this policy.
      </p>

      <h2>1. Who We Are</h2>
      <p>NoodMart is operated by an individual developer based in Egypt.</p>
      <ul>
        <li>
          General support: <strong>support@noodmart.com</strong>
        </li>
        <li>
          Privacy / data requests: <strong>privacy@noodmart.com</strong>
        </li>
      </ul>

      <h2>2. Information We Collect</h2>

      <h3>2.1 Information you provide directly</h3>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Collected when</th>
            <th>Used for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Email address &amp; password</td>
            <td>Account registration / sign-in</td>
            <td>Authentication, account access</td>
          </tr>
          <tr>
            <td>Full name</td>
            <td>Profile setup</td>
            <td>Displaying your name to sellers/couriers on orders, personalizing the App</td>
          </tr>
          <tr>
            <td>Phone number</td>
            <td>Profile setup</td>
            <td>Order coordination, delivery contact</td>
          </tr>
          <tr>
            <td>Profile photo</td>
            <td>Optional, uploaded via camera or photo gallery</td>
            <td>Displaying your avatar in the App</td>
          </tr>
          <tr>
            <td>Delivery addresses</td>
            <td>Address book</td>
            <td>
              Label, address line, country/governorate/city, and an optional map pin
              (latitude/longitude) you place yourself — used to route and deliver your orders
            </td>
          </tr>
          <tr>
            <td>Product / prescription photos</td>
            <td>
              Sellers uploading menu items; buyers uploading a prescription image at checkout for
              pharmacy items, if applicable
            </td>
            <td>Listing products; fulfilling orders that require a prescription</td>
          </tr>
          <tr>
            <td>Order details</td>
            <td>Placing an order</td>
            <td>
              Item list, quantities, modifiers, delivery address, order status, and (for sellers)
              commission amounts
            </td>
          </tr>
          <tr>
            <td>Reviews &amp; ratings</td>
            <td>Optional, after an order</td>
            <td>Shown publicly on the relevant restaurant/product</td>
          </tr>
        </tbody>
      </table>

      <h3>2.2 Information collected automatically</h3>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Source</th>
            <th>Used for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Device information (device model, OS version)</td>
            <td>device_info_plus</td>
            <td>Diagnostics, support, compatibility</td>
          </tr>
          <tr>
            <td>App version</td>
            <td>package_info_plus</td>
            <td>Diagnostics, support</td>
          </tr>
          <tr>
            <td>Push notification token</td>
            <td>Firebase Cloud Messaging, tied to your account</td>
            <td>Sending order-status notifications to your device</td>
          </tr>
          <tr>
            <td>Crash &amp; diagnostic logs</td>
            <td>Firebase Crashlytics</td>
            <td>Identifying and fixing bugs</td>
          </tr>
        </tbody>
      </table>
      <p>
        We do <strong>not</strong> currently collect precise device location (GPS). The App
        requests location permission only to support future map-based address selection; if this
        changes, we will update this policy first.
      </p>

      <h3>2.3 Information we do not collect</h3>
      <p>
        We do not collect or store payment card, bank, or wallet details. NoodMart currently
        supports <strong>Cash on Delivery (COD)</strong> only.
      </p>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To create and manage your account</li>
        <li>To process, fulfill, and track orders between buyers and sellers (restaurants)</li>
        <li>To send order-status push notifications and, where relevant, transactional emails</li>
        <li>To let sellers manage their menu, orders, and payouts/commission</li>
        <li>
          To let admins operate and moderate the platform (fraud prevention, content moderation,
          dispute resolution)
        </li>
        <li>To diagnose crashes and improve app stability and performance</li>
        <li>To communicate with you about support requests</li>
      </ul>

      <h2>4. How We Share Your Information</h2>
      <p>We do not sell your personal information. We share data only as follows:</p>
      <ul>
        <li>
          <strong>Sellers (restaurants):</strong> see the name, phone number, delivery address, and
          order contents necessary to fulfill your order.
        </li>
        <li>
          <strong>Service providers:</strong>
          <ul>
            <li>
              <strong>Supabase</strong> — hosts our database, authentication, and file storage.
            </li>
            <li>
              <strong>Google Firebase</strong> — Crashlytics (crash reporting) and Cloud Messaging
              (push notifications).
            </li>
          </ul>
        </li>
        <li>
          <strong>Legal reasons:</strong> if required by law, legal process, or to protect the
          rights, safety, or property of NoodMart, our users, or the public.
        </li>
      </ul>
      <p>
        These providers process data on our behalf under their own security and confidentiality
        commitments; we do not permit them to use your data for their own purposes.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain your account and order data for as long as your account is active or as needed
        to provide the service, comply with legal obligations, resolve disputes, and enforce our
        agreements. When you delete your account (see Section 7), your personal data is deleted or
        anonymized, except where retention is required for legal, tax, or fraud-prevention purposes
        (e.g., historical order/commission records may be retained in anonymized form).
      </p>

      <h2>6. Your Rights and Choices</h2>
      <p>You can, at any time:</p>
      <ul>
        <li>View and edit your profile, addresses, and phone number in the App.</li>
        <li>Control notification permissions from your device settings.</li>
        <li>
          Request a copy of your personal data by emailing <strong>privacy@noodmart.com</strong>.
        </li>
        <li>Delete your account and associated personal data (see Section 7).</li>
      </ul>

      <h2>7. Account &amp; Data Deletion</h2>
      <p>
        You can permanently delete your account and associated personal data directly in the App:{' '}
        <strong>Profile → Settings → Delete Account</strong>. This immediately and permanently
        removes your profile, saved addresses, and personal data from our systems (order records
        required for legal/accounting purposes may be retained in anonymized form).
      </p>
      <p>
        If you no longer have the App installed, you can request deletion the same way described in
        our <Link to="/delete-account">Account Deletion</Link> page, or by emailing{' '}
        <strong>privacy@noodmart.com</strong> from your registered email address.
      </p>

      <h2>8. Children's Privacy</h2>
      <p>
        The App is not directed to children under 13 (or the minimum age required by your local
        law), and we do not knowingly collect personal information from children. If you believe a
        child has provided us with personal information, contact <strong>privacy@noodmart.com</strong>{' '}
        and we will delete it.
      </p>

      <h2>9. Security</h2>
      <p>
        We use reasonable administrative, technical, and physical safeguards (including row-level
        security on our database and encrypted storage of credentials) to protect your information.
        No method of transmission or storage is 100% secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>10. International Data Transfers</h2>
      <p>
        Our service providers (Supabase, Google Firebase) may process and store data on servers
        located outside your country of residence. By using the App, you consent to this transfer.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be reflected by
        updating the "Last updated" date above, and where appropriate, communicated in-app.
      </p>

      <h2>12. Contact Us</h2>
      <p>Questions about this policy or your data:</p>
      <ul>
        <li>
          <strong>Email:</strong> privacy@noodmart.com
        </li>
        <li>
          <strong>General support:</strong> support@noodmart.com
        </li>
      </ul>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
