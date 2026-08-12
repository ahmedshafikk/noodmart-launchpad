import LegalLayout from '@/components/legal/LegalLayout';

const AccountDeletion = () => {
  return (
    <LegalLayout title="Delete Your NoodMart Account">
      <p>
        You can request deletion of your NoodMart account and associated personal data at any
        time, whether or not you still have the app installed.
      </p>

      <h2>Option 1: Delete in-app (fastest)</h2>
      <ol>
        <li>Open the NoodMart app and sign in.</li>
        <li>
          Go to <strong>Profile → Settings → Delete Account</strong>.
        </li>
        <li>Confirm the deletion.</li>
      </ol>
      <p>
        This immediately and permanently deletes your profile, saved addresses, phone number, and
        photos from our systems.
      </p>

      <h2>Option 2: Request deletion by email</h2>
      <p>
        If you no longer have the app installed, or are unable to sign in, send an email to{' '}
        <strong>privacy@noodmart.com</strong> from the email address associated with your NoodMart
        account, with the subject line "Account Deletion Request." Include:
      </p>
      <ul>
        <li>The email address or phone number on your account</li>
        <li>Confirmation that you want your account permanently deleted</li>
      </ul>
      <p>
        We will verify your identity and complete the deletion within <strong>30 days</strong>, and
        confirm by email once it's done.
      </p>

      <h2>What gets deleted</h2>
      <p>When your account is deleted, we permanently remove:</p>
      <ul>
        <li>Your profile (name, email, phone number, photo)</li>
        <li>Saved delivery addresses</li>
        <li>Saved payment/contact preferences</li>
        <li>Push notification tokens tied to your device</li>
      </ul>

      <h2>What we may retain, and why</h2>
      <p>
        Some data may be retained in <strong>anonymized or aggregated</strong> form after deletion,
        where required for:
      </p>
      <ul>
        <li>
          <strong>Legal and tax obligations</strong> — e.g., historical order and commission
          records, which we are required to retain for accounting purposes, are stripped of
          personal identifiers rather than fully deleted.
        </li>
        <li>
          <strong>Fraud prevention</strong> — records needed to prevent abuse of the platform.
        </li>
      </ul>
      <p>None of this retained data can be used to identify you after deletion.</p>

      <h2>Questions</h2>
      <p>
        Contact <strong>privacy@noodmart.com</strong> for any questions about this process.
      </p>
    </LegalLayout>
  );
};

export default AccountDeletion;
