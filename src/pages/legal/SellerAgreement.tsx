import { Link } from 'react-router-dom';
import LegalLayout from '@/components/legal/LegalLayout';

const SellerAgreement = () => {
  return (
    <LegalLayout title="Seller (Restaurant Partner) Agreement" lastUpdated="Last updated: 12 August 2026">
      <p>
        This Seller Agreement ("<strong>Agreement</strong>") supplements our{' '}
        <Link to="/terms-of-service">Terms of Service</Link> and applies specifically to
        restaurants and food sellers ("<strong>Seller</strong>," "<strong>you</strong>") listing
        products on the NoodMart platform, operated by an individual developer based in Egypt ("
        <strong>NoodMart</strong>," "<strong>we</strong>," "<strong>us</strong>"). By creating a
        Seller account, you agree to this Agreement.
      </p>

      <h2>1. Your Listings</h2>
      <ul>
        <li>
          You are solely responsible for the accuracy of your menu, including pricing,
          descriptions, photos, allergen/dietary information (halal, vegan, calories, etc.), and
          stock levels.
        </li>
        <li>
          You must keep your operating hours, availability, and stock accurate in the App so
          Buyers only see items you can actually fulfill.
        </li>
        <li>
          You must have the legal right to sell any product you list, and comply with all
          applicable food-safety, licensing, and health regulations in your jurisdiction.
        </li>
      </ul>

      <h2>2. Orders</h2>
      <ul>
        <li>
          You may accept or reject incoming orders (e.g., due to stock, capacity, or closing
          time), with a reason where applicable.
        </li>
        <li>
          Once accepted, you are responsible for preparing the order accurately and within the
          estimated timeframe shown in the App.
        </li>
        <li>
          You must update order status (confirmed, preparing, ready, etc.) promptly so Buyers
          receive accurate updates.
        </li>
      </ul>

      <h2>3. Commission and Payouts</h2>
      <ul>
        <li>
          NoodMart charges a commission on each completed order, calculated as shown in your
          Seller dashboard.
        </li>
        <li>
          Orders are currently Cash on Delivery (COD); settlement of NoodMart's commission on COD
          orders is handled according to the payout terms communicated to you separately in the
          App or by NoodMart.
        </li>
        <li>NoodMart may adjust commission rates with reasonable advance notice.</li>
      </ul>

      <h2>4. Content You Upload</h2>
      <ul>
        <li>
          You retain ownership of the photos, descriptions, and other content you upload, but
          grant NoodMart a non-exclusive, royalty-free license to display it within the App and
          its marketing.
        </li>
        <li>
          You must have the rights to any images or content you upload (e.g., not use copyrighted
          photos without permission).
        </li>
      </ul>

      <h2>5. Reviews and Ratings</h2>
      <p>
        Buyers may leave public reviews and ratings on your listings. NoodMart may remove reviews
        that violate our content policies (Section 5 of the Terms of Service) but does not remove
        genuine negative reviews on request.
      </p>

      <h2>6. Suspension and Termination</h2>
      <p>We may suspend or remove your Seller account or specific listings if you:</p>
      <ul>
        <li>Repeatedly fail to fulfill accepted orders</li>
        <li>Provide inaccurate food-safety or allergen information</li>
        <li>Violate applicable law or these terms</li>
        <li>Receive a sustained pattern of legitimate quality/safety complaints</li>
      </ul>
      <p>
        You may close your Seller account at any time by contacting{' '}
        <strong>support@noodmart.com</strong>.
      </p>

      <h2>7. Independent Business Relationship</h2>
      <p>
        You operate as an independent business. Nothing in this Agreement creates an employment,
        partnership, joint-venture, or agency relationship between you and NoodMart.
      </p>

      <h2>8. Liability</h2>
      <p>
        You are solely responsible for the safety, quality, and legality of the food and products
        you sell. You agree to indemnify NoodMart against claims arising from your food, listings,
        or fulfillment of orders, to the extent permitted by law.
      </p>

      <h2>9. Governing Law</h2>
      <p>This Agreement is governed by the laws of the Arab Republic of Egypt.</p>

      <h2>10. Contact</h2>
      <p>
        Questions about this Agreement: <strong>support@noodmart.com</strong>
      </p>
    </LegalLayout>
  );
};

export default SellerAgreement;
