import StoreBadge from "./storeBadge.jsx";
import './handyLink.pcss';

export default function HandyLink({link, children}) {

    return (
        <article className='handy-link'>
            <header>
                <img className='app-image'
                     src={link.image}
                     alt={link.title}/>
                <h2 className='app-title'>{link.title}</h2>
                <h3 className='app-subtitle'>{link.subtitle}</h3>
            </header>
            <div className='app-description'>{children}</div>
            <div className='stores-layout'>
                <StoreBadge size='small' store='apple' url={link.appleUrl} name={link.name}/>
                <StoreBadge size='small' store='google' url={link.googleUrl} name={link.name}/>
            </div>
        </article>
    );
}