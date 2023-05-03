import Header from "../components/header.jsx";
import './links.pcss';
import {useEffect} from "react";
import {addCanonical} from "../utils/addTagsToHead.js";
import HandyLink from "../components/handyLink.jsx";

export default function Links() {

    useEffect(() => {
        const tags = [
            {
                tag: "link",
                rel: "canonical",
                href: "https://www.travel-rates.com/?/other-handy-apps",
            },
            {
                tag: "meta",
                property: "og:url",
                content: "https://www.travel-rates.com/?/other-handy-apps"
            },
        ]
        addCanonical(tags);
    }, []);

    return (
        <div className="app">
            <Header/>
            <main className='page links'>
                <h1 className='title'>Other handy apps</h1>
                <p>Here are some other essential apps that you should definitely take on your travels!</p>

                <div className='links-layout'>
                    <HandyLink link={{
                        title: 'Google Maps',
                        subtitle: 'For finding where things are and how to get there',
                        name: 'Google Maps',
                        image: 'https://www.gstatic.com/images/branding/product/2x/maps_2020q4_2x.png',
                        appleUrl: 'http://apple.com',
                        googleUrl: 'http://google.com',
                    }}>
                        <p>Are you ready to unlock the superpowers of navigation? Look no further than Google Maps!
                            It's like having a wise and witty travel genie in your pocket. With its nifty features and
                            magical accuracy, Google Maps will have you navigating like a boss in no time.</p>

                        <p>Lost in the maze of city streets? Fear not, for Google Maps provides turn-by-turn
                            directions that will make even the most complicated routes feel like a stroll through
                            Candyland. Plus, it's armed with real-time traffic updates, so you can dodge those
                            pesky traffic jams like a ninja on a mission.</p>

                        <p>But hold on, there's more to this digital treasure map! Google Maps is a treasure trove
                            of information. It's packed with reviews, ratings, and juicy tidbits about local
                            hotspots. Need a place to satisfy your cravings? Just tap on that restaurant icon and
                            let the feast-finding magic unfold.</p>

                        <p>And guess what? Google Maps even has a Street View feature that lets you play virtual
                            explorer. Take a peek at your destination before you even get there, and feel like a
                            time-traveling adventurer with 360-degree street-level imagery.</p>

                        <p>Oh, and did we mention offline maps? It's like having a secret power-up! No Wi-Fi,
                            no problem! Download those maps before your journey, and you're good to go even in the
                            most remote corners of the world.</p>

                        <p>So, grab your virtual backpack and embark on an epic adventure with Google Maps by your
                            side. It's the ultimate travel companion that will make your trips as thrilling as a
                            rollercoaster ride. Get ready to conquer new territories and navigate like a
                            superstar!</p>
                    </HandyLink>

                    <HandyLink link={{
                        title: 'Trip Advisor',
                        subtitle: 'For finding things to do',
                        name: 'TripAdvisor',
                        image: 'https://www.tripadvisor.com/img/cdsi/img2/branding/150_logo-11900-2.png',
                        appleUrl: 'http://apple.com',
                        googleUrl: 'http://google.com',
                    }}>
                        <p>Calling all travel enthusiasts! Prepare to be blown away by the travel wonderland that is
                            TripAdvisor! It's like having a secret stash of insider knowledge at your fingertips. With
                            a vibrant community of explorers sharing their experiences and opinions, TripAdvisor is
                            your ticket to uncovering the hidden gems and avoiding the tourist traps.</p>

                        <p>From cozy bed-and-breakfasts to luxury resorts, and mouthwatering street food joints to
                            fancy restaurants, TripAdvisor has got you covered. Their treasure trove of
                            user-generated reviews and ratings will have you feeling like a travel wizard, making
                            informed choices that guarantee a memorable journey.</p>

                        <p>But wait, there's more! TripAdvisor isn't just about reviews. It's an adventure-planning
                            powerhouse! Get ready to dive into a world of destination guides, tips, and top-rated
                            attractions. Want to book a hotel? Score amazing deals and find the perfect place to
                            rest your weary explorer's head.</p>

                        <p>So, buckle up and let TripAdvisor be your trusty travel companion. It's time to
                            embark on a thrilling quest, armed with the knowledge and recommendations of fellow
                            globetrotters. With TripAdvisor by your side, your travel adventures will reach epic levels
                            of awesomeness!</p>
                    </HandyLink>

                    <HandyLink link={{
                        title: 'Google Translate',
                        subtitle: 'For finding how to say things',
                        name: 'Google Translate',
                        image: '',
                        appleUrl: 'http://apple.com',
                        googleUrl: 'http://google.com',
                    }}>
                        <p>Calling all language adventurers! Prepare to have your mind blown by the magical powers of
                            Google Translate! It's like having a pocket-sized language wizard, ready to break down
                            barriers and unlock a world of communication possibilities.</p>

                        <p>Lost in translation? Fear not, for Google Translate is here to save the day! With a few
                            taps on your device, you can transform gibberish into a symphony of words that will
                            impress even the most critical language connoisseurs.</p>

                        <p>Not only does Google Translate offer translations for a multitude of languages, but it
                            also has voice input and instant translation capabilities. Just speak into your device,
                            and voila! Your words will be transformed into a linguistic masterpiece.</p>

                        <p>But wait, there's more! Picture this: you're wandering the streets of a foreign land,
                            staring at a menu that seems like a secret code. Fret not, dear traveler! Whip out your
                            trusty Google Translate app, snap a photo of that mysterious menu, and watch as the
                            words come alive in your preferred language. It's like having a culinary compass that
                            guides you to delicious delights.</p>

                        <p>And if you're feeling adventurous, dive into the depths of conversation mode. It's like
                            having a multilingual sidekick who can help you chat with locals in their own language.
                            Impress the locals, make new friends, and maybe even discover the secret to the best
                            street food in town.</p>

                        <p>So, language explorers, fear no more! With Google Translate by your side, you can
                            navigate the linguistic landscape with confidence and flair. Break down language
                            barriers, unravel the mysteries of foreign words, and embark on a linguistic adventure
                            like never before. Get ready to speak the world's languages and become a true citizen
                            of the world with Google Translate!</p>
                    </HandyLink>

                    <HandyLink link={{
                        title: 'PhotoPills',
                        subtitle: 'For finding the perfect photo opportunity',
                        name: 'PhotoPills',
                        image: '',
                        appleUrl: 'http://apple.com',
                        googleUrl: 'http://google.com',
                    }}>
                        <p>Attention all photography enthusiasts! Get ready to enter a realm of photographic wizardry
                            with the extraordinary PhotoPills app! It's like having a magic camera companion that turns
                            your wildest photo dreams into pixel-perfect reality.</p>

                        <p>Ever wanted to capture the stars dancing in the night sky? PhotoPills has got your back!
                            With its celestial superpowers, you can plan your stargazing sessions with precision.
                            Discover the best times and locations to capture breathtaking astrophotography that will
                            leave everyone starstruck.</p>

                        <p>But wait, there's more! PhotoPills is the ultimate toolbox for capturing jaw-dropping
                            landscapes. It's like having a virtual assistant that knows all the secret spots, the
                            perfect angles, and the best lighting conditions. Whether you're chasing golden sunsets,
                            epic panoramas, or mesmerizing reflections, PhotoPills will guide you to photography
                            nirvana.</p>

                        <p>Need to add some artistic flair to your shots? PhotoPills' augmented reality features will
                            blow your mind! Imagine superimposing the Milky Way onto your scene or aligning the moon
                            perfectly over a breathtaking landscape. It's like having a creative genie granting your
                            every photographic wish.</p>

                        <p>Oh, and did we mention the planner? Picture this: you have a grand photography idea,
                            but you're not sure when and where to execute it. Fear not, dear visual maestro! PhotoPills'
                            planner lets you map out your photo expeditions in advance. Plan down to the minute,
                            calculate
                            angles, and track the sun and moon positions. It's like having a personal assistant that
                            ensures you never miss a perfect photo opportunity.</p>

                        <p>So, grab your camera and embark on a photographic adventure like no other with PhotoPills
                            as your trusty sidekick. This app is your ticket to capturing stunning shots that will
                            make jaws drop, eyes widen, and Instagram feeds explode with envy. Get ready to unleash
                            your inner photography superhero and create visual masterpieces with PhotoPills!</p>
                    </HandyLink>

                    <HandyLink link={{
                        title: 'Flight Radar 24',
                        subtitle: 'For finding out what that plane is',
                        name: 'FlightRadar24',
                        image: '',
                        appleUrl: 'http://apple.com',
                        googleUrl: 'http://google.com',
                    }}>
                        <p>Buckle up and get ready for takeoff as FlightRadar24 transforms your device into a window
                            to the skies. With real-time flight tracking, you'll be able to follow planes as they soar
                            through the air, turning your screen into a virtual cockpit. Who needs wings when you have
                            FlightRadar24?</p>

                        <p>Lost in wonder as you gaze at the sky? Fear not, for FlightRadar24 provides a flight
                            number decoder that unveils the mysteries of the aircraft passing overhead. No more
                            wondering about that silver bird soaring through the clouds - now you'll know its
                            destination, speed, and even the type of aircraft.</p>

                        <p>But wait, there's more! Picture this: you're sitting in your backyard, enjoying the
                            sun, when you spot a plane with unfamiliar markings. What on earth could it be? Whip
                            out your trusty FlightRadar24 app, aim it at the sky, and witness the magic of
                            augmented reality. Instantly, the plane's details, flight path, and even its history
                            will materialize before your eyes. It's like having X-ray vision for the aviation world!</p>

                        <p>Oh, and did we mention the aircraft playback feature? Get ready to relive the excitement
                            of past flights or follow the journeys of your favorite airlines. With FlightRadar24,
                            you'll become an aviation detective, piecing together flight paths and tracing the
                            routes of the airborne wanderers.</p>

                        <p>So, aviation aficionados, strap in and soar to new heights with FlightRadar24 as your
                            trusted co-pilot. Experience the thrill of the skies, unlock the mysteries of flight,
                            and let your imagination take flight. With FlightRadar24, the world of aviation
                            becomes your playground, and every plane is a story waiting to be discovered!</p>
                    </HandyLink>
                </div>
            </main>
        </div>
    );
}