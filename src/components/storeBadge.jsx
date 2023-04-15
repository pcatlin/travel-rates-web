import PropTypes from "prop-types";
import appleBadge from "../assets/app-store-badge.svg";
import googleBadge from "../assets/google-play-badge.svg";
import styles from "./storeBadge.module.css";

export default function StoreBadge({store, size}) {
    const altText = store === 'apple' ? 'Download on the App Store' : 'Get it on Google Play';
    const url = store === 'apple' ? 'https://apps.apple.com/us/app/travel-rates/id6447621937?itsct=apps_box_link&itscg=30200' : 'https://play.google.com/store/apps/details?id=com.paulcatlin.travelrates&gl=GB&utm_source=travel-rates.com&utm_campaign=home&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1';

    return (
        <a href={url}>
            <img src={store === 'apple' ? appleBadge : googleBadge} alt={altText} className={styles[size]}/>
        </a>
    );
}

StoreBadge.propTypes = {
    store: PropTypes.oneOf(['google', 'apple']).isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
}