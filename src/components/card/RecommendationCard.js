import Card from "../card/Card";
import { LinkedInButton } from "../customButtons/SocialMediaButtons";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function RecommendationCard({
    name,
    title,
    linkedinUrl,
    imageUrl,
    paragraphs
 }) {
    return (
        <Card>
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex self-center">
                    <img 
                        alt={name}
                        src={imageUrl} 
                        className="w-20 rounded-full object-cover aspect-square"
                    />
                </div>

                <div className="flex sm:justify-between items-center gap-3 flex-col sm:flex-row flex-wrap flex-1 justify-center">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-pretty">{name}</h3>
                        <h5 className="text-pretty">{title}</h5>
                    </div>

                    <div className="flex">
                        <a href={linkedinUrl} className="flex flex-1" target="_blank" rel="noopener noreferrer">
                            <LinkedInButton variant="outlined" className="flex flex-1 gap-2">
                                <LinkedInIcon />
                                <span className="truncate">LinkedIn</span>
                            </LinkedInButton>
                        </a>
                    </div>
                </div>
            </div>

            <blockquote className="flex flex-col gap-4">
                {paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-pretty">{paragraph}</p>
                ))}
            </blockquote>
        </Card>
    );
}

export default RecommendationCard;
