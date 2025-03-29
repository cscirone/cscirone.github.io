import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';

import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <title>Christopher Scirone</title>

            <h1>About Me</h1>

            <Paper sx={{ p: 4 }} variant="outlined" className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="flex self-center">
                        <img src="/assets/images/professional_photo.jpg" className="w-48 rounded-full object-cover aspect-square"></img>
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
                    With over five years of experience in Frontend development, and User Experience Design, I am a passionate and innovative UX Engineer dedicated to creating intuitive, engaging, and accessible digital experiences.                </p>
                <p className="text-pretty">
                    My previous role was at StrongMind, a leading online education company that provides personalized and adaptive learning solutions for K-12 students. At StrongMind, I shared the vision of transforming education through technology and empowering students to achieve their full potential. In my role I served as the primary designer for key AI-driven curriculum development tools, including Course Builder and Prompt Studio, which enhanced AI-human collaboration in course creation. I also maintained and refined a Storybook.js Design System to ensure consistency across StrongMind’s products. My role involved close collaboration with multiple development teams, utilizing AI tools to accelerate development, mentoring designers in frontend technologies, prototyping new features, writing user flows, and working closely with product managers to meet the goals/expectations of StrongMind and its clients.                </p>
                <p className="text-pretty">
                    In my former role from General Motors, I leveraged my skills in Java, JavaScript, and Adobe Experience Manager to create, maintain, and document web components and forms components for various General Motors brand sites globally. I was also responsible for onboarding and localizing site components to global markets, ensuring that the web experiences are culturally relevant and user-friendly. Additionally, I was a founding member of the Forms 2.0 project, which utilized Adobe Experience Manager Forms to replace our previous JSON-based forms solution. This project significantly reduced the time and work required to author, publish, and deploy new and existing forms to the live site, as well as the amount of off-cycle deployment requests. As a result, we improved the efficiency, quality, and security of our web applications and forms, as well as maintained or increased lead generation for dealerships around the world.                </p>
                <p className="text-pretty">
                    With a diverse skill set that includes HTML, CSS, CSS pre-processors (Less and Sass), JavaScript, Package Management tools (npm and maven), Ruby on Rails with Stimulus.js and Turbo.js, UX prototyping, GitHub Actions project building/deployment, and Agile methodologies, I thrive in fast-paced, cross-functional environments where innovation, design, and development intersect.
                </p>

                <Button variant="outlined" className="w-fit self-end">
                    <Link to="/career">Learn about my career experience!</Link>
                </Button>
            </Paper>

            <h2>Skills</h2>

            <h2>Education</h2>

            <Paper sx={{ p: 4 }} variant="outlined" className="flex flex-col gap-4">
                <div className="flex gap-6 flex-wrap justify-center mr-auto">
                    <a href="https://www.nmsu.edu/" target="_blank" rel="noopener noreferrer" className="hover:scale-[1.05] transition-all duration-[120ms]">
                        <img src="/assets/svg/nmsu_logo.svg" className="object-contain bg-[#8c0b42] rounded-full bg-origin-padding pt-3 pl-1 w-24 h-24" />
                    </a>

                    <div className="flex flex-col">
                        <h3>Bachelor of Science - Computer Science, Minor in Mathematics</h3>
                        <p>New Mexico State University, Las Cruces, NM</p>
                        <p>August 2014 - May 2018</p>
                    </div>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Paper>

            <h2>Hobbies</h2>

        </>
    );
  }

  export default Home;