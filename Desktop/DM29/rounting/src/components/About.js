import React from 'react';
import Contact from './Contact';
import FAQ from './FAQ';
import {Link, Route, Switch} from 'react-router-dom';

export default function About() {
    return (
        <div>
            
            <Link to='/about/faq'>FAQ</Link>
            <Link to='/about/contact'>Contact</Link>
            <Switch>
            <Route path='/about/faq' component={FAQ}/>
            <Route path='/about/contact' component={Contact}/>
            <Route path='/about' render ={() => (
                <h1>This is the About page! </h1>
            )}/>
            </Switch>
        </div>
    )
}