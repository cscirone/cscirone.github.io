import { Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { LinkedInButton, GitHubButton } from '../components/customButtons/SocialMediaButtons';
import Card from '../components/card/Card';


function Contact() {
    return (
        <>
            <title>Contact Christopher Scirone</title>
            <h1>Contact Me</h1>

            <Card >
                <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex self-center">
                        <img 
                            alt="Christopher Scirone"
                            src={process.env.PUBLIC_URL + '/assets/images/professional_photo.jpg'} 
                            className="w-48 rounded-full object-cover aspect-square"
                        />
                    </div>

                    <div className="flex sm:justify-between items-center gap-3 flex-wrap flex-1 justify-center">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-pretty">Christopher Joseph Scirone II</h2>
                            <h4 className="text-pretty">Frontend Developer | UX Designer | Software Engineer</h4>

                        </div>  
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 flex-1 justify-center">
                    <Button variant="outlined" className="flex gap-2 md:flex-1">
                        <EmailIcon />
                        <a href="mailto:cscirone2@hotmail.com" className="truncate">cscirone2@hotmail.com</a>
                    </Button>
                    <Button variant="outlined" className="flex gap-2 md:flex-1">
                        <PhoneIcon />
                        <a href="tel:+15056049118" className="truncate">(505)604-9118</a>
                    </Button>
                </div>  
            </Card>

            <Card>
                <h2>Find me on these platforms</h2>
                <a href="https://www.linkedin.com/in/christopher-scirone-152743261/" className="flex flex-1" target="_blank" rel="noopener noreferrer">
                    <LinkedInButton variant="outlined" className="flex flex-1 gap-2">
                        <LinkedInIcon />
                        <span className="truncate">LinkedIn</span>
                    </LinkedInButton>
                </a>

                <a href="https://github.com/cscirone" className="flex flex-1" target="_blank" rel="noopener noreferrer">
                    <GitHubButton variant="outlined" className="flex flex-1 gap-2">
                        <GitHubIcon />
                        <span className="truncate">GitHub</span>
                    </GitHubButton>
                </a>
            </Card>
        </>
    );
}

export default Contact;