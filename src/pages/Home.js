import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from 'react-router-dom';

import ScrollableTabs from '../components/ScrollableTabs/ScrollableTabs';
import Card from '../components/card/Card';

import TabPanels from '../components/TabPanelContent/TabPanels';

function Home() {
    return (
        <>
            <title>Christopher Scirone</title>

            <h1>About Me</h1>

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

                        <div className="flex">
                            <Link to="/contact">
                                <Button variant="outlined" className="flex gap-2">
                                    <EmailIcon />
                                    Contact Me
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <p className="text-pretty">
                    With over six years of experience in Frontend development, and User Experience Design, I am a passionate and innovative UX Engineer dedicated to creating intuitive, engaging, and accessible digital experiences.
                </p>
                <p className="text-pretty">
                    My previous role was at StrongMind, a leading online education company that provides personalized and adaptive learning solutions for K-12 students.
                    At StrongMind, I shared the vision of transforming education through technology and empowering students to achieve their full potential.
                    In my role I served as the primary designer for key AI-driven curriculum development tools, including Course Builder and Prompt Studio, which enhanced AI-human collaboration in course creation.
                    I also maintained and refined a Storybook.js Design System to ensure consistency across StrongMind’s products. 
                    My role involved close collaboration with multiple development teams, utilizing AI tools to accelerate development, mentoring designers in frontend technologies, prototyping new features, writing user flows, and working closely with product managers to meet the goals/expectations of StrongMind and its clients.
                </p>
                <p className="text-pretty">
                    In my former role from General Motors, I leveraged my skills in Java, JavaScript, and Adobe Experience Manager to create, maintain, and document web components and forms components for various General Motors brand sites globally. I was also responsible for onboarding and localizing site components to global markets, ensuring that the web experiences are culturally relevant and user-friendly. Additionally, I was a founding member of the Forms 2.0 project, which utilized Adobe Experience Manager Forms to replace our previous JSON-based forms solution. This project significantly reduced the time and work required to author, publish, and deploy new and existing forms to the live site, as well as the amount of off-cycle deployment requests. As a result, we improved the efficiency, quality, and security of our web applications and forms, as well as maintained or increased lead generation for dealerships around the world.
                </p>
                <p className="text-pretty">
                    With a diverse skill set that includes HTML, CSS, CSS pre-processors (Less and Sass), JavaScript, Package Management tools (npm and maven), Ruby on Rails with Stimulus.js and Turbo.js, UX prototyping, GitHub Actions project building/deployment, and Agile methodologies, I thrive in fast-paced, cross-functional environments where innovation, design, and development intersect.
                </p>

                <Button variant="contained" className="w-fit self-end">
                    <Link to="/career">Learn about my career experience!</Link>
                </Button>
            </Card>

            <h2>Skills</h2>

            <Card >
                <h3>Frontend Development</h3>
                <ScrollableTabs tabs={[
                    {
                        label: 'HTML',
                        index: 0,
                        panel: <TabPanels.HTMLTabPanel />
                    },
                    {
                        label: 'CSS',
                        index: 1,
                        panel: <TabPanels.CSSTabPanel />
                    },
                    {
                        label: 'JavaScript',
                        index: 2,
                        panel: <TabPanels.JavaScriptTabPanel />
                    },
                    {
                        label: 'React',
                        index: 3,
                        panel: <TabPanels.ReactTabPanel />
                    },
                ]} name="frontend-skills" />
            </Card>

            <Card >
                <h3>UX Design</h3>
                <ScrollableTabs tabs={[
                    {
                        label: 'Prototyping',
                        index: 0,
                        panel: <TabPanels.PrototypingTabPanel />
                    },
                    {
                        label: 'Design Systems',
                        index: 1,
                        panel: <TabPanels.DesignSystemsTabPanel />
                    },
                    {
                        label: 'User Research',
                        index: 2,
                        panel: <TabPanels.UserResearchTabPanel />
                    }
                ]} name="frontend-skills" />
            </Card>

            <Card >
                <h3>Backend Development</h3>
                <ScrollableTabs tabs={[
                    {
                        label: 'Java',
                        index: 0,
                        panel: <TabPanels.JavaTabPanel />
                    },
                    {
                        label: 'Ruby on Rails',
                        index: 1,
                        panel: <TabPanels.RubyOnRailsTabPanel />
                    },
                    {
                        label: 'C, C++, C#',
                        index: 2,
                        panel: <TabPanels.CTabPanel />
                    },
                    {
                        label: 'AEM',
                        index: 3,
                        panel: <TabPanels.AEMTabPanel />
                    },
                    {
                        label: 'Deployment',
                        index: 4,
                        panel: <TabPanels.DeploymentTabPanel />
                    }
                ]} name="backend-skills" />
            </Card>

            <Card >
                <h3>Professional Skills</h3>
                <ScrollableTabs tabs={[
                    {
                        label: 'Leadership',
                        index: 0,
                        panel: <TabPanels.LeadershipTabPanel />
                    },
                    {
                        label: 'Collaboration',
                        index: 1,
                        panel: <TabPanels.CollaborationTabPanel />
                    },
                    {
                        label: 'Agile',
                        index: 2,
                        panel: <TabPanels.AgileTabPanel />
                    },
                    {
                        label: 'Project Management',
                        index: 3,
                        panel: <TabPanels.ProjectManagementTabPanel />
                    },
                ]} name="professional-skills" />
            </Card>

            <h2>Education</h2>

            <Card >
                <div className="flex gap-6 flex-wrap justify-center mr-auto">
                    <a href="https://www.nmsu.edu/" target="_blank" rel="noopener noreferrer" className="hover:scale-[1.05] transition-all duration-[120ms]">
                        <img 
                            alt="New Mexico State University"
                            src={process.env.PUBLIC_URL + '/assets/svg/nmsu_logo.svg'} 
                            className="object-contain bg-[#8c0b42] rounded-full bg-origin-padding pt-3 pl-1 w-24 h-24" 
                        />
                    </a>

                    <div className="flex flex-col">
                        <h3>Bachelor of Science - Computer Science, Minor in Mathematics</h3>
                        <p>New Mexico State University, Las Cruces, NM</p>
                        <p>August 2014 - May 2018</p>
                    </div>
                </div>

                <p>
                    While the Computer Science program at NMSU is a small program, I am proud to have been able to be a part of it.
                    The professors were all very knowledgeable and hardened by industry experience.
                    The program was a Bachelor of Science, meaning that it was more tailored to Backend programming and a fundemental understanding of programming languages and data science.
                    Some of the classes that I took were Algorithms, Data Structures, Computer Architecture, Linux Administration, Discrete Mathematics, and Object-Oriented Programming with Java and C++.
                    While attending the University, I was able to participate in multiple student outreach programs, as well as multiple community outreach programs.
                    I also participated in a number of extracurricular activies, such as the Esports team and the Anime Club.
                </p>
            </Card>

            <Card >
                <h3>University Programs</h3>
                <ScrollableTabs tabs={[
                    {
                        label: 'Google igniteCS',
                        index: 0,
                        panel: <TabPanels.IgniteCSTabPanel />
                    },
                    {
                        label: 'CTiK-12',
                        index: 1,
                        panel: <TabPanels.Ctik12TabPanel />
                    },
                    {
                        label: 'PLA',
                        index: 2,
                        panel: <TabPanels.PLATabPanel />
                    }
                ]} name="university-programs" />
            </Card>

            <Card >
                <h3>Elective Interests</h3>
                <ScrollableTabs tabs={[
                    {
                        label: 'Psychology',
                        index: 0,
                        panel: <TabPanels.PsychologyTabPanel />
                    },
                    {
                        label: 'Geology',
                        index: 1,
                        panel: <TabPanels.GeologyTabPanel />
                    },
                    {
                        label: 'Music',
                        index: 2,
                        panel: <TabPanels.MusicTabPanel />
                    },
                    {
                        label: 'Brewing Science',
                        index: 3,
                        panel: <TabPanels.BeerTabPanel />
                    }
                ]} name="elective-interests" />
            </Card>

            <Card >
                <h3>Extracurricular Activities</h3>
                <ScrollableTabs tabs={[
                    {
                        label: 'Esports',
                        index: 0,
                        panel: <TabPanels.EsportsTabPanel />
                    },
                    {
                        label: 'Anime Club',
                        index: 1,
                        panel: <TabPanels.WeebTabPanel />
                    }
                ]} name="Extracurricular-activities" />
            </Card>

            <h2>Hobbies</h2>

            <Card >
                <h3>Video Games</h3>
                <p>
                    I've been playing video games since I was 3 years old, when my parents bought me a Nintendo 64.
                    The unparalleled immersion that video games can accomplish is what makes them such a unique form of art.
                    I've enjoyed video games both competitively and casually my entire life.
                    I appreciate all that there is to gain from video games, whether that be immersive storytelling, the honing of motor skills, development of multitasking abilities, or the joy of competition.
                </p>
                <ScrollableTabs tabs={[
                    {
                        label: 'Competitive',
                        index: 0,
                        panel: <TabPanels.VGCompTabPanel />
                    },
                    {
                        label: 'Casual',
                        index: 1,
                        panel: <TabPanels.VGCasualTabPanel />
                    },
                    {
                        label: 'Coaching',
                        index: 2,
                        panel: <TabPanels.VGCoachingTabPanel />
                    }
                ]} name="video-games" />
            </Card>

            <Card >
                <h3>Sports</h3>
                <ScrollableTabs tabs={[
                    {
                        label: 'Golf',
                        index: 0,
                        panel: <TabPanels.GolfTabPanel />
                    },
                    {
                        label: 'Bowling',
                        index: 1,
                        panel: <TabPanels.BowlingTabPanel />
                    },
                    {
                        label: 'Baseball',
                        index: 2,
                        panel: <TabPanels.BaseBallTabPanel />
                    }
                ]} name="sports" />
            </Card>

        </>
    );
  }

  export default Home;