import Header from "../components/header.jsx";
import './privacy.css';

export default function Privacy() {

    return (
        <div className="app">
            <Header/>
            <main className='page privacy'>
                <h1 className='title'>Privacy notice</h1>

                <p><strong>Travel Rates</strong> respects your privacy and is committed to protecting your personal
                    data.<br/>
                    This privacy notice will inform you how we collect, use, and disclose your personal data when you
                    use our app.</p>

                <h2>Information we collect</h2>
                <p><strong>Travel Rates</strong> only collects the last exchange rates fetched from the server, your
                    previously chosen currencies and doesn't store any personal data.</p>

                <h2>How we use your information</h2>
                <p>We use the exchange rates to provide you with up-to-date information on currency conversion rates.
                    We do not use your personal data for any other purpose.</p>

                <h2>Disclosure of your information</h2>
                <p><strong>Travel Rates</strong> does not share your personal data with any third-party service
                    providers or any other external organizations.</p>

                <h2>Data retention</h2>
                <p>We retain the last exchange rates fetched from the server for as long as necessary to provide our
                    service. We will delete this information when it is no longer needed.</p>

                <h2>Your rights</h2>
                <p>You have the right to access, modify, or delete your personal data at any time. Please contact us
                    at <a href='mailto:app@travel-rates.com'>app@travel-rates.com</a> if you wish to exercise any of
                    these rights.</p>

                <h2>Changes to this privacy notice</h2>
                <p><strong>Travel Rates</strong> may update this privacy notice from time to time. We will notify you of
                    any changes by posting the new privacy notice on this page.</p>

                <h2>Contact us</h2>
                <p>If you have any questions or concerns about our privacy notice, please contact us
                    at <a href='mailto:app@travel-rates.com'>app@travel-rates.com</a>.</p>
            </main>
        </div>
    );
}