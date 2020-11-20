import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        
        <div className="hero-container"> 
           <h1>EMPOWERED EACHDAY, EVERYDAY!</h1> 
           <p>Our project aims to help empower women who do not have conventional/formal education, are housewives that are completely dependent on their significant other, or belong to the economically deprived classes. 
              Women in India form Self Help Groups under the government (e.g. under the National Rural Livelihood Mission launched by the Ministry of Rural Development (MoRD), Government of India in June 2011) or with NGOs (e.g. Jnana Prabodhini, stree shakti vibhag). They start small businesses or hunt for jobs that may not require an academic/strong educational background. As per our observation, these products are sold at physical stalls (locally made achar, chutney, jewelry, handicrafts) or at nearby supermarkets. The reach is not huge, and it will continue to have a small reach in the post-pandemic world, where everything is going online. Another observation we made is, all the job/hiring sites focus a lot on academic skills and create opportunities for them, often ignoring those who don’t have an educational background. 
              Our project will create a platform (website) for individual women or SHGs who want to sell their products, women who are looking for non-academic jobs (e.g. menial labor), and NGOs that are working on the same problem. The reason for involving NGOs is that not every one of these women has technological knowledge or are literate. The NGOs that take part in this, will help them handle the technological aspect, which might be the initiative of the NGO in the first place. The platform connects those who seek jobs (e.g. as a maid, cleaner, cook, babysitter) with those who are in need of such workers. A similar feature helps SHGs who are selling products take custom orders or mass orders. The platform will also enable volunteers to work on-site (through NGOs or otherwise) with the SHGs and teach them skills or spread awareness about rights these women have (e.g. How to handle a bank account). For women that are part of this individually or are familiar with technology, a news and information section will be a one-stop destination for what are the policies, schemes, and initiatives targeted at them and how to make use of them, as well as relaying the latest happenings in women empowerment initiatives in India.
            </p>
            <div className="hero-btns">
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
            </div>
        </div>
        
    )
}

export default HeroSection 
 