import { Link } from 'react-router-dom';
import LegalLayout from '@/components/legal/LegalLayout';

const TermsOfService = () => {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="Last updated: 12 August 2026">
      <p>
        These Terms of Service ("<strong>Terms</strong>") govern your use of the NoodMart mobile
        application (the "<strong>App</strong>," "<strong>Service</strong>"), operated by an
        individual developer based in Egypt ("<strong>NoodMart</strong>," "<strong>we</strong>,"
        "<strong>us</strong>"). By creating an account or using the App, you agree to these Terms.
      </p>
      <p>If you do not agree, do not use the App.</p>

      <h2>1. Who Can Use NoodMart</h2>
      <p>
        You must be at least 18 years old, or the age of legal majority in your jurisdiction, to
        create an account and place orders. By registering, you confirm this is true.
      </p>
      <p>NoodMart has three types of accounts:</p>
      <ul>
        <li>
          <strong>Buyers</strong> — browse restaurants, order food, and manage deliveries.
        </li>
        <li>
          <strong>Sellers (restaurant partners)</strong> — list menu items, manage stock and
          modifiers, and fulfill orders. Sellers are separately bound by our{' '}
          <Link to="/seller-agreement">Seller Agreement</Link>.
        </li>
        <li>
          <strong>Admins</strong> — operate and moderate the platform.
        </li>
      </ul>

      <h2>2. NoodMart's Role</h2>
      <p>
        NoodMart is a <strong>marketplace</strong> that connects buyers with independent
        restaurants ("Sellers"). Sellers — not NoodMart — are responsible for the quality, safety,
        accuracy, pricing, and preparation of the food and items they list. NoodMart does not
        prepare, own, or take title to any food or products sold through the App.
      </p>

      <h2>3. Orders, Payment, and Cancellation</h2>
      <ul>
        <li>
          <strong>Payment method:</strong> Orders are currently paid via{' '}
          <strong>Cash on Delivery (COD)</strong> only. NoodMart does not collect or store payment
          card or bank details.
        </li>
        <li>
          <strong>Order acceptance:</strong> A Seller may accept or reject your order (e.g., due to
          stock, closing hours, or delivery area). You will be notified of the order status
          in-app.
        </li>
        <li>
          <strong>Cancellations:</strong> You may cancel an order only while it is in a cancellable
          status (before the Seller confirms/starts preparing it), as reflected in the App. Once
          preparation has started, cancellation may not be possible.
        </li>
        <li>
          <strong>Pricing:</strong> Prices, delivery fees, and minimum order amounts are set by
          each Seller and may change without notice. The price shown at checkout is what you agree
          to pay.
        </li>
        <li>
          <strong>Commission:</strong> Sellers pay NoodMart a commission on completed orders, as
          disclosed to Sellers separately; this does not affect the price Buyers pay unless
          reflected in the listed price.
        </li>
      </ul>

      <h2>4. Delivery</h2>
      <p>
        Delivery times shown in the App are estimates, not guarantees, and may be affected by
        weather, traffic, order volume, or Seller availability.
      </p>

      <h2>5. Reviews and User Content</h2>
      <p>
        If you submit reviews, ratings, or photos ("<strong>User Content</strong>"), you grant
        NoodMart a non-exclusive, royalty-free license to display and distribute that content
        within the App. You are solely responsible for your User Content, and it must not be:
      </p>
      <ul>
        <li>False, defamatory, or misleading</li>
        <li>Abusive, harassing, or hateful</li>
        <li>Infringing on anyone's intellectual property or privacy rights</li>
        <li>Spam or unrelated to your genuine experience</li>
      </ul>
      <p>
        We may remove User Content or suspend accounts that violate these rules. To report content,
        contact <strong>support@noodmart.com</strong>.
      </p>

      <h2>6. Account Responsibilities</h2>
      <ul>
        <li>
          You are responsible for keeping your login credentials confidential and for all activity
          under your account.
        </li>
        <li>
          Provide accurate registration information (name, phone, address) so orders can be
          fulfilled correctly.
        </li>
        <li>
          You may delete your account at any time — see our{' '}
          <Link to="/delete-account">Account Deletion</Link> page.
        </li>
        <li>
          We may suspend or terminate accounts that violate these Terms, engage in fraud, or abuse
          other users or Sellers.
        </li>
      </ul>

      <h2>7. Food Safety and Allergens</h2>
      <p>
        Food preparation, ingredient sourcing, allergen labeling (e.g., halal, vegan, calorie
        information), and food safety are the sole responsibility of the Seller preparing the item.
        If you have allergies or dietary restrictions, confirm directly with the Seller before
        ordering. NoodMart is not liable for adverse reactions to food ordered through the App.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        The App is provided "as is" and "as available." To the maximum extent permitted by law,
        NoodMart disclaims all warranties, express or implied, regarding the Service, including
        merchantability, fitness for a particular purpose, and non-infringement. We do not
        guarantee the App will be uninterrupted, error-free, or secure.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, NoodMart is not liable for indirect, incidental,
        special, or consequential damages arising from your use of the App, or from the acts or
        omissions of Sellers or delivery personnel, including but not limited to food quality,
        allergic reactions, or delivery delays. Our total liability for any claim arising from the
        Service will not exceed the amount you paid for the order giving rise to the claim.
      </p>

      <h2>10. Changes to the Service or Terms</h2>
      <p>
        We may modify or discontinue the App, in whole or part, at any time. We may update these
        Terms; continued use of the App after changes take effect constitutes acceptance. Material
        changes will be reflected by updating the "Last updated" date above.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Arab Republic of Egypt, without regard to
        conflict-of-law principles. Any disputes will be subject to the exclusive jurisdiction of
        the competent courts of Egypt, unless applicable consumer-protection law in your country
        requires otherwise.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these Terms: <strong>support@noodmart.com</strong>
      </p>
    </LegalLayout>
  );
};

export default TermsOfService;
