import Header from "../components/header.jsx";
import './privacy.css';
import '@fontsource/noto-sans/500.css';
import '@fontsource/noto-sans/600.css';
import '@fontsource/noto-sans/700.css';
import {useEffect} from "react";
import {addCanonical} from "../utils/addTagsToHead.js";

export default function Privacy() {

    useEffect(() => {
        const tags = [
            {
                tag: "link",
                rel: "canonical",
                href: "https://www.travel-rates.com/?/privacy",
            },
            {
                tag: "meta",
                property: "og:url",
                content: "https://www.travel-rates.com/?/privacy"
            },
        ]
        addCanonical(tags);
    }, []);

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
                <p><strong>Travel Rates</strong> only collects the latest exchange rates fetched from the server, your
                    previously selected currencies and doesn't store any personal data. This information is stored on
                    your device, and not sent elsewhere at all.</p>

                <h2>How we use your information</h2>
                <p>We use global financial exchange rates to provide you with up-to-date information on currency
                    conversion rates. We do not use your personal data for any purpose.</p>

                <h2>Disclosure of your information</h2>
                <p><strong>Travel Rates</strong> does not share your personal data with any third-party service
                    providers or any other external organizations because we do not store any of your personal data in
                    the first place.</p>

                <h2>Data retention</h2>
                <p>The app retains the last exchange rates fetched from the server for as long as necessary to provide
                    our service. This is not personal data and allows you to access travel rates without a network
                    signal.</p>

                <h2>Your rights</h2>
                <p>You have the right to access, modify, or delete your personal data at any time. We do not store any
                    of your personal data, but please contact us
                    at <a href='mailto:app@travel-rates.com'>app@travel-rates.com</a> if you need help to delete the
                    app or something.</p>

                <h2>Changes to this privacy notice</h2>
                <p><strong>Travel Rates</strong> may update this privacy notice from time to time. We will notify you of
                    any changes by posting the new privacy notice on this page.</p>

                <h2>Contact us</h2>
                <p>If you have any questions or concerns about our privacy notice, please contact us
                    at <a href='mailto:app@travel-rates.com'>app@travel-rates.com</a>.</p>

                <p className='updated'>Last updated: 15th April 2023</p>
            </main>
        </div>
    );
}