import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from 'react-router-dom';

import ScrollableTabs from '../components/ScrollableTabs/ScrollableTabs';
import Card from '../components/card/Card';


import HTMLTabPanel from '../components/TabPanelContent/tabPanels/HTMLTabPanel';
import CSSTabPanel from '../components/TabPanelContent/tabPanels/CSSTabPanel';
import JavaScriptTabPanel from '../components/TabPanelContent/tabPanels/JavaScriptTabPanel';
import ReactTabPanel from '../components/TabPanelContent/tabPanels/ReactTabPanel';
import PrototypingTabPanel from '../components/TabPanelContent/tabPanels/PrototypingTabPanel';
import DesignSystemsTabPanel from '../components/TabPanelContent/tabPanels/DesignSystemsTabPanel';
import UserResearchTabPanel from '../components/TabPanelContent/tabPanels/UserResearchTabPanel';

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
                        panel: <HTMLTabPanel />
                    },
                    {
                        label: 'CSS',
                        index: 1,
                        panel: <CSSTabPanel />
                    },
                    {
                        label: 'JavaScript',
                        index: 2,
                        panel: <JavaScriptTabPanel />
                    },
                    {
                        label: 'React',
                        index: 3,
                        panel: <ReactTabPanel />
                    },
                ]} name="frontend-skills" />
            </Card>

            <Card >
                <h3>UX Design</h3>
                <ScrollableTabs tabs={[
                    {
                        label: 'Prototyping',
                        index: 0,
                        panel: <PrototypingTabPanel />
                    },
                    {
                        label: 'Design Systems',
                        index: 1,
                        panel: <DesignSystemsTabPanel />
                    },
                    {
                        label: 'User Research',
                        index: 2,
                        panel: <UserResearchTabPanel />
                    }
                ]} name="frontend-skills" />
            </Card>

            <Card >
                <h3>Backend Development</h3>
                <ScrollableTabs tabs={[
                    {
                        label: 'Java',
                        index: 0,
                        panel: <div>Java content</div>
                    },
                    {
                        label: 'Ruby on Rails',
                        index: 1,
                        panel: <div>Ruby on Rails content</div>
                    },
                    {
                        label: 'C, C++, C#',
                        index: 2,
                        panel: <div>C, C++, C# content</div>
                    },
                    {
                        label: 'AEM',
                        index: 3,
                        panel: <div>AEM content</div>
                    },
                ]} name="backend-skills" />
            </Card>

            <Card >
                <h3>Professional Skills</h3>
                <ScrollableTabs tabs={[
                    {
                        label: 'Leadership',
                        index: 0,
                        panel: <div>Leadership content</div>
                    },
                    {
                        label: 'Collaboration',
                        index: 1,
                        panel: <div>Collaboration content</div>
                    },
                    {
                        label: 'Agile',
                        index: 2,
                        panel: <div>Agile content</div>
                    },
                    {
                        label: 'Project Management',
                        index: 3,
                        panel: <div>Project Management content</div>
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
                        panel: <div>Google igniteCS content</div>
                    },
                    {
                        label: 'CTiK-12',
                        index: 1,
                        panel: <div>CTiK-12 content</div>
                    },
                    {
                        label: 'PLA',
                        index: 2,
                        panel: <div>PLA content</div>
                    }
                ]} name="university-programs" />
            </Card>

            <Card >
                <h3>Elective Interests</h3>
                <ScrollableTabs tabs={[
                    {
                        label: 'Psychology',
                        index: 0,
                        panel: <div>Computational Thinking, General Psychology</div>
                    },
                    {
                        label: 'Geology',
                        index: 1,
                        panel: 
                        
                            <div className="flex flex-col gap-4">
                                <p>
                                    Ever since I was a small child, I had a fascination with rocks and minerals.
                                     I used to go out in the desert and pick up "lava rocks" and petrified wood.
                                     I'd take them home and polish them with a tumbler and display them on the shelf.
                                     So when given the opportunity to take a geology class in university, I eagerly took it.
                                     We learned about mineral classifications, tectonic plates, and the practical applications of geology in the job market.
                                     My favorite part of the class were the field excursions, where we got to go out to local geologic formations, such as the Organ Mountains and a local caldera off of I-25.
                                     It was a great way to see mineral formations in the wild.
                                </p>

                                <img 
                                    src={process.env.PUBLIC_URL + '/assets/images/geology_hike_2.jpg'} 
                                    alt="NMSU Geology"
                                    className=""
                                />

                                <img 
                                    src={process.env.PUBLIC_URL + '/assets/images/geology_hike.jpg'} 
                                    alt="NMSU Geology"
                                    className=""
                                />
                            </div>
                    },
                    {
                        label: 'Music',
                        index: 2,
                        panel: <div>Music History content</div>
                    },
                    {
                        label: 'Brewing Science',
                        index: 3,
                        panel: <div>Brewing Science content</div>
                    }
                ]} name="elective-interests" />
            </Card>

            <Card >
                <h3>Extracurricular Activities</h3>
                <ScrollableTabs tabs={[
                    {
                        label: 'Esports',
                        index: 0,
                        panel: 
                            <div className="flex flex-wrap gap-4">
                                <p>
                                    The year is 2016, and a video game called <i><strong>Overwatch</strong></i> is released.
                                     I was a casual player of <i><strong>Overwatch</strong></i>, playing with my friends and my brother in my free time.
                                     After playing the game for a few months, I heard about a budding esports club at NMSU, and I went to the first meeting.
                                     I was able to make the team, and we were able to compete in a number of events, including the collegiate league known as <i><strong>Tespa</strong></i>.
                                     I played Utility Support for the team, mainly playing <i><strong>Zenyatta</strong></i>, <i><strong>Ana</strong></i>, and <i><strong>Brigitte</strong></i>.
                                     We performed very well in the Tespa Collegiate Series for an orgnization without extensive University support.
                                </p>
                                <img 
                                    src={process.env.PUBLIC_URL + '/assets/images/NMSUow_Teams.jpg'} 
                                    alt="NMSU 2016 Overwatch Teams"
                                    className="w-128"
                                />
                                <p>
                                    My time on the team was an amazing experience, and I was able to make lifelong friends.
                                     Shortly after I left the team, the University decided to make the esports club an official program.
                                     They were able to get a new computer lab on campus, and were given a budget to purchase equipment and attend events.
                                     I was an unofficial advisor for the organization for a time after my graduation, and I am proud to see what the organization has become.
                                </p>

                                <a href="https://esports.nmsu.edu/" target="_blank" rel="noopener noreferrer" className="ml-auto">
                                    <Button variant="outlined" className="flex gap-2">
                                        <LinkIcon />
                                        NMSU Esports
                                    </Button>
                                </a>
                            </div>
                    },
                    {
                        label: 'Anime Club',
                        index: 1,
                        panel:  
                            <div className="flex flex-wrap gap-4">
                                <p>
                                    <img 
                                        src={process.env.PUBLIC_URL + '/assets/images/anime_night.jpg'} 
                                        alt="Anime Night!"
                                        className="w-64 object-cover sm:float-left justify-self-center pb-4 sm:pb-0"
                                    />
                                    I've always been a fan of anime, so when I found out that there was an anime club at NMSU, I was excited to join.
                                     I was a member of <i><strong>Anime Night!</strong></i> for 2 years, and I was able to attend and help run events, such as the annual Anime Expo and Video Game Tournaments at the NMSU community center.
                                     During my senior year, I was voted in as the club's president, where I was responsible for planning weekly meetings, and managing the club's assets and budget.
                                     This involved a lot of planning, organization, and communication with the other club members, which helped me develop my leadership and organizational skills.
                                     While it hasn't been active since I graduated, I still keep in touch with some of the other members, and we still get together to watch anime and play video games.
                                </p>
                            </div>
                    }
                ]} name="Extracurricular-activities" />
            </Card>

            <h2>Hobbies</h2>

            <Card >
                <h3>Video Games</h3>
                <ScrollableTabs tabs={[
                    {
                        label: 'Competitive',
                        index: 0,
                        panel: <div>Competitive content</div>
                    },
                    {
                        label: 'Casual',
                        index: 1,
                        panel: <div>Casual content</div>
                    },
                    {
                        label: 'Coaching',
                        index: 2,
                        panel: <div>Coaching content</div>
                    }
                ]} name="video-games" />
            </Card>

            <Card >
                <h3>Sports</h3>
                <ScrollableTabs tabs={[
                    {
                        label: 'Golf',
                        index: 0,
                        panel: <div>Golf content</div>
                    },
                    {
                        label: 'Bowling',
                        index: 1,
                        panel: <div>Bowling content</div>
                    },
                    {
                        label: 'Baseball',
                        index: 2,
                        panel: <div>Baseball content</div>
                    }
                ]} name="sports" />
            </Card>

        </>
    );
  }

  export default Home;