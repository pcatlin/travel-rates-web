import Header from "../components/header.jsx";

export default function Home() {
    return (
        <div className="app">
            <Header/>
            <main className='page home'>
                <p>Get the latest exchange rates for your next trip.</p>
                <p>FREE!</p>
            </main>
        </div>
    );
}
