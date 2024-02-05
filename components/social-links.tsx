'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
    return (
        <div className='flex flex-row gap-4'>
            <a href="https://github.com/amandekate" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            
            <a href="https://www.linkedin.com/in/aman-dekate-1b8254195/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://twitter.com/aman_dekate" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
        </div>
    );
};

export default SocialMediaLinks;