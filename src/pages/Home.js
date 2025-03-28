import FrontendSkills from '../components/Skills/FrontendSkills';
import BackendSkills from '../components/Skills/BackendSkills';
import ProfessionalSkills from '../components/Skills/ProfessionalSkills';
import UniversityPrograms from '../components/Skills/UniversityPrograms';
import VideoGames from '../components/Skills/VideoGames';
import Sports from '../components/Skills/Sports';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    return (
        <>
            <title>Christopher Scirone</title>

            <h1>About Me</h1>

            <div className="card">
                <div className="flex gap-10 items-center">
                    <img src="/assets/images/professional_photo.jpg" className="rounded-full w-48 h-48 object-cover"></img>

                    <div className="flex flex-1 flex-wrap justify-between gap-4">
                        <div className="flex flex-col gap-2">
                            <h2>Christopher Joseph Scirone II</h2>
                            <p>Frontend Developer | UX Designer | Software Engineer</p>
                        </div>

                        <Link to="/contact" className="button button-primary h-fit self-center">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                            Contact Me
                        </Link>
                    </div>
                </div>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <Link to="/career" className="button button-outline w-fit self-end">Check out my career experience!</Link>
            </div>

            <h2>Skills</h2>

            <FrontendSkills />

            <BackendSkills />

            <ProfessionalSkills />

            <h2>Education</h2>

            <div className="card">
                <div className="flex gap-6 flex-wrap justify-center mr-auto">
                    <img src="/assets/svg/nmsu_logo.svg" className="object-contain bg-[#8c0b42] rounded-full bg-origin-padding pt-3 pl-1 w-24 h-24" />

                    <div className="flex flex-col">
                        <h3>Bachelor of Science - Computer Science, Minor in Mathematics</h3>
                        <p>New Mexico State University, Las Cruces, NM</p>
                        <p>August 2014 - May 2018</p>
                    </div>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <UniversityPrograms />

            <h2>Hobbies</h2>

            <VideoGames />

            <Sports />

        </>
    );
  }

  export default Home;