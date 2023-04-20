import {useEffect} from "react";

export default function AdSense() {
    useEffect(() => {
        let tag = document.createElement("script");
        tag.async = true;
        tag.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9612116433207542";
        tag.crossOrigin = "anonymous";
        document.head.appendChild(tag);
    }, []);

    return (
        <div className='adWrapper'>
            <ins className="adsbygoogle"
                 style={{display: 'block', position: 'absolute', width: 'inherit', maxWidth: 'inherit'}}
                 data-ad-client='ca-pub-9612116433207542'
                 data-ad-slot='3200096918'
                 data-ad-format="auto"
                 data-full-width-responsive="true"/>
        </div>
    )
}