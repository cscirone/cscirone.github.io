import Card from '../components/card/Card';
import { LinkedInButton } from '../components/customButtons/SocialMediaButtons';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RecommendationCard from '../components/card/RecommendationCard';

function Recommendations() {
    return (
        <>
            <h1>Recommendations</h1>

            <RecommendationCard
                name="Ray Villaraza"
                title="UX/UI Design and Front-end Development at StrongMind"
                linkedinUrl="https://www.linkedin.com/in/ray-villaraza-23389130/"
                imageUrl="https://media.licdn.com/dms/image/v2/C5603AQEEw1d2b42KjA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516457393747?e=1749081600&v=beta&t=riMx95xlVJ8F4lZ4pLHW_RmhR8D-vLrTPov5OFvptcg"
                paragraphs={[
                    `CJ isn’t just a "dev"—he’s an engineer at heart. He doesn’t just do the work; he’s into the difficult stuff. When something complex came up, like untangling the codebase of an app on the brink of failure, we knew we could count on him to step up and execute. While others might’ve danced around the problem, CJ just hammered into it.`,
                    `Beyond his technical skills, CJ was someone we relied on for everything else, too. He says more in fewer words than most, getting straight to the core of the issue. When things got messy, he stayed clear-headed through it all—the kind of teammate you need in moments like that.`,
                    `When engineering isn’t just a job but also a hobby, there’s really no limit to where it’ll take him.`,
                    `Your next team will be lucky to have you, man! It was an honor working with you, CJ!`
                ]}
            />

            <RecommendationCard
                name="Jennifer Southall"
                title="User Experience Manager at StrongMind"
                linkedinUrl="https://www.linkedin.com/in/jenluiszer/"
                imageUrl="https://media.licdn.com/dms/image/v2/D5603AQFmga3MmS4fww/profile-displayphoto-shrink_200_200/B56ZWsicC.HoAY-/0/1742356464178?e=1749081600&v=beta&t=2qjH0684nz5_iA_SLe8Eoff5r_20s87P24NZ731rBuM"
                paragraphs={[
                    `CJ is one of those rare people who combines deep expertise with genuine kindness and a true team spirit. He's incredibly skilled in UX and frontend engineering, consistently delivering high-quality work while also being a thoughtful mentor to others. CJ brings a learning mindset to everything he does, always looking to grow and help others grow too. He’s smart, reliable, and always gets the job done—someone you definitely want on your team.`,
                ]}
            />

            <RecommendationCard
                name="Maxwell Creamer"
                title="Product Manager at StrongMind"
                linkedinUrl="https://www.linkedin.com/in/maxwell-creamer-3728242a8/"
                imageUrl="https://media.licdn.com/dms/image/v2/D4E03AQEpdQqUjKn0Fw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704498750387?e=1749081600&v=beta&t=w6bkUPBzhq5JN2CoSsHvLX6CjbvNiUPc8zTBgfORRyA"
                paragraphs={[
                    `Christopher is a thoughtful and hardworking engineer who actively seeks opportunities to collaborate with his team. Having personally worked with him, I can confidently say that he would be a valuable asset to any organization. He has pioneered several solutions to complex UI/UX challenges and consistently delivers on his commitments. If you have the chance to work with him, I highly recommend it. He would be a positive addition to any team.`,
                ]}
            />

            <RecommendationCard
                name="Brianna Chiu"
                title="UI/UX Motion Designer at StrongMind"
                linkedinUrl="https://www.linkedin.com/in/brianna-chiu/"
                imageUrl="https://media.licdn.com/dms/image/v2/D5635AQGEKJL4Y4CbGQ/profile-framedphoto-shrink_400_400/B56ZXdtuhjHEAc-/0/1743181507243?e=1744405200&v=beta&t=L3iQXHm8wVvkC4gZ9jjmQ1IDNloObQZiqRSxGIy-_dc"
                paragraphs={[
                    "I cannot recommend CJ highly enough. His ability to breakdown difficult concepts in code to someone completely new to it has been actually game changing. I’m incredibly grateful for his guidance and mentorship the last few years in my journey to learn how to implement my interactive animations and css animations on the web. CJ is incredibly knowledgeable and patient, always willing to answer your questions no matter how silly or unimportant you might feel they are—he’s also incredible willing to put in the time to make things work. That’s exactly the kind of person you want on your team, I promise you!",
                    "While working with CJ, I leveled up exponentially. Don’t miss out on the opportunity to work with someone this kind, funny, and knowledgeable!"
                ]}
            />

            

            <RecommendationCard
                name="Michelle Vilavanh"
                title="UX Engineer at StrongMind"
                linkedinUrl="https://www.linkedin.com/in/michelle-vilavanh/"
                imageUrl="https://media.licdn.com/dms/image/v2/D5603AQGKojH0Xz4AHg/profile-displayphoto-shrink_200_200/B56ZUpQLP5HsAc-/0/1740153862240?e=1749081600&v=beta&t=_o0PNo3921Di340HP2g2-Dhz42DEv0RXf-z94BTWaZk"
                paragraphs={[
                    `CJ is a Swiss Army Knife. He intakes the problem at hand and the outcome is a super thought out solution. He is constantly willing to grow in whatever area is needed. During my time with him, he helped build essential components within our design system, ideated architecture and interaction within the refresh of our platform, and mentored others with his coding knowledge. Aside from his work skills, he has an awesome sense of humor and is a fantastic bowler. You have to see him in action!`,
                ]}
            />

            

            
        </>
    );
}   

export default Recommendations;
