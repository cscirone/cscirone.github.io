import { Button, Chip } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

import Card from '../components/card/Card';

function Career() {
    return (
        <>
            <h1>Career</h1>

            <h2>Professional Experience</h2>

            <Card >
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    <a href="https://www.strongmind.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-[1.05] transition-all duration-[120ms] flex justify-center">
                        <img 
                            alt="StrongMind Logo"
                            src={process.env.PUBLIC_URL + '/assets/svg/SM_Company_Logo_Wht.svg'} 
                            className="sm:w-64 w-48 sm:p-4 p-2 bg-neutral-900 rounded-lg"
                        />
                    </a>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-pretty">User Experience Engineer</h2>
                            <h3>Course Builder, Prompt Studio, Central, Enrollment, and Backpack UI</h3>
                            <h4 className="text-pretty">November 2023 - March 2025</h4>
                        </div>
                    </div>
                </div>

                <p>
                    As a User Experience Engineer at StrongMind, I am the primary designer for Course Builder and Prompt Studio, AI-powered tools that enhance curriculum development and content generation through AI-human collaboration. 
                    I lead the design and development of these tools, ensuring seamless user experiences for educators and administrators while enabling efficient course publishing to external LMS platforms.
                </p>

                <p>
                    I also maintain and enhance the Storybook.js Design System, ensuring design uniformity and cohesion across all StrongMind products. 
                    This involves working with component-based stylesheets, theme stylesheets, and component controllers utilizing LESS, CSS variables, and Stimulus.js to create scalable and maintainable design solutions.
                </p>

                <p>
                    Beyond design, I mentor and train team members and new hires in front-end development, helping UX designers integrate effectively into agile development teams. I work closely with multiple development teams to implement user stories, resolve bugs, and improve product workflows across various projects.
                </p>

                <p>
                    By leveraging AI coding tools, I accelerate rapid prototyping, feature development, and iterative design improvements, ensuring efficiency in the development lifecycle. 
                    Additionally, I have contributed to months-long code cleanup initiatives aimed at reducing design and technical debt, improving maintainability, and optimizing the overall code quality of our products.
                </p>

                <div className="flex flex-wrap gap-1">
                    <Chip label="HTML" />
                    <Chip label="CSS" />
                    <Chip label="JavaScript" />
                    <Chip label="Tailwind CSS" />
                    <Chip label="UX Design" />
                    <Chip label="Prototyping" />
                    <Chip label="Design Systems" />
                    <Chip label="User Research" />
                    <Chip label="Ruby on Rails" />
                    <Chip label="Stimulus.js" />
                    <Chip label="Turbo.js" />
                    <Chip label="GitHub Actions" />
                    <Chip label="Agile Methodologies" />
                    <Chip label="Less" />
                    <Chip label="Figma" />
                    <Chip label="Balsamiq" />
                    <Chip label="Jira" />
                    <Chip label="Confluence" />
                    <Chip label="Storybook.js" />
                    <Chip label="Education Technology" />
                    <Chip label="Responsive Design" />
                </div>

                <a href="https://www.strongmind.com/" target="_blank" rel="noopener noreferrer" className="self-end">
                    <Button variant="outlined" className="flex gap-2">
                        <LinkIcon />
                        Website
                    </Button>
                </a>
            </Card>

            <Card >
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    <a href="https://www.gm.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-[1.05] transition-all duration-[120ms] flex justify-center">
                        <img 
                            alt="General Motors Logo"
                            src={process.env.PUBLIC_URL + '/assets/images/GM-Logo-2021.png'} 
                            className="w-24 p-4 bg-[#11365f] rounded-2xl"
                        />
                    </a>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-pretty">Software Developer</h2>
                            <h3>Global Brands & Web Channel Platform Engineering</h3>
                            <h4 className="text-pretty">November 2023 - March 2025</h4>
                        </div>
                    </div>
                </div>

                <p>
                    Responsibilities include the creation, maintenance, and creation of documentation for Adobe Experience Manager 6.5 web components and forms components for use across all General Motors brand sites across global markets. 
                    Responsible for onboarding and localizing site components to global markets including Europe, Korea, Mexico, Canada, and Brazil. 
                    Founding member of the Forms 2.0 project which utilized Adobe Experience Manager Forms, replacing our previous JSON-based forms solution. 
                    Significantly reduced time and work required to author, publish, and deploy new and existing forms to the live site. Massively cut down the amount of off-cycle deployment requests, as code deployments were no longer necessary for minor live forms changes. 
                    Tech stack utilized in current position includes Java 8, JavaScript, JSP, HTML, XML, CSS, Scss, Sling, jQuery, AJAX, NodeJS, and Akamai Cloud Services. 
                    Previous role experience with AEM web components services such as Locate New Vehicle and Vehicle Shopper. 
                    Both services provided AEM web component with data about vehicles and dealers fetched using AJAX calls, with the resulting parsed data being displayed on the web page.
                </p>

                <div className="flex flex-wrap gap-1">
                    <Chip label="Java" />
                    <Chip label="JavaScript" />
                    <Chip label="Adobe Experience Manager" />
                    <Chip label="HTML" />
                    <Chip label="CSS" />
                    <Chip label="Sass" />
                    <Chip label="Maven" />
                    <Chip label="Agile Methodologies" />
                    <Chip label="SaFE" />
                    <Chip label="Akamai Cloud Services" />
                    <Chip label="XML" />
                    <Chip label="JSP" />
                    <Chip label="jQuery" />
                    <Chip label="Sling" />
                    <Chip label="Localization" />
                    <Chip label="e-commerce" />
                </div>

                <a href="https://www.gm.com/" target="_blank" rel="noopener noreferrer" className="self-end">
                    <Button variant="outlined" className="flex gap-2">
                        <LinkIcon />
                        Website
                    </Button>
                </a>
            </Card>

            <h2>Non-Professional Experience</h2>

            <Card >
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    <a href="https://www.nmsu.edu/" target="_blank" rel="noopener noreferrer" className="hover:scale-[1.05] transition-all duration-[120ms] flex justify-center">
                        <img 
                            alt="New Mexico State University"
                            src={process.env.PUBLIC_URL + '/assets/svg/nmsu_logo.svg'} 
                            className="object-contain bg-[#8c0b42] rounded-full bg-origin-padding pt-3 pl-1 w-24 h-24" 
                        />
                    </a>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-pretty">Google igniteCS Student Leader</h2>
                            <h3>uCreate Program</h3>
                            <h4 className="text-pretty">April 2017 - May 2018</h4>
                        </div>
                    </div>
                </div>

                <p>
                    The Google igniteCS Program provides funding and resources for groups of college and university students to make a difference in their communities via Computer Science mentorship.
                    I co-led a team of 10 studens through the planning and drafting of a grant proposal to the igniteCS program.
                    We were awarded $5700 of funding for a Unity game development workshop at Las Cruces High School and Centennial High School with five sessions at each school.
                    I planned and led the workshop sessions, teaching both CS and non-CS students the basics of Unity game development through the assisted implementation and manipulation of Unity tutorial games.
                    Projects included a basic "Hello, World" tutorial, a Rock-Paper-Scissors game of my own design, as well as the three Unity tutorials of "2D UFO Game", "2D Rouge-like Survival", and "Breakout".
                </p>

                <div className="flex flex-wrap gap-1">
                    <Chip label="C#" />
                    <Chip label="Unity Game Engine" />
                    <Chip label="Leadership" />
                    <Chip label="Budgeting" />
                    <Chip label="Event Planning" />
                    <Chip label="Teaching" />
                    <Chip label="Community Outreach" />
                </div>

                <a href="https://www.nmsu.edu/" target="_blank" rel="noopener noreferrer" className="self-end">
                    <Button variant="outlined" className="flex gap-2">
                        <LinkIcon />
                        Website
                    </Button>
                </a>
            </Card>

            <Card >
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    <a href="https://www.nmsu.edu/" target="_blank" rel="noopener noreferrer" className="hover:scale-[1.05] transition-all duration-[120ms] flex justify-center">
                        <img 
                            alt="New Mexico State University"
                            src={process.env.PUBLIC_URL + '/assets/svg/nmsu_logo.svg'} 
                            className="object-contain bg-[#8c0b42] rounded-full bg-origin-padding pt-3 pl-1 w-24 h-24" 
                        />
                    </a>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-pretty">CTiK-12 Dissect Fellow</h2>
                            <h3>Computational Thinking in K-12 Program</h3>
                            <h4 className="text-pretty">September 2016 - May 2018</h4>
                        </div>
                    </div>
                </div>

                <p>
                </p>

                <div className="flex flex-wrap gap-1">
                    <Chip label="Computational Thinking" />
                    <Chip label="Teaching" />
                    <Chip label="Mentorship" />
                    <Chip label="Community Outreach" />
                    <Chip label="K-12 Education" />
                    <Chip label="Lesson Planning" />
                </div>

                <a href="https://www.nmsu.edu/" target="_blank" rel="noopener noreferrer" className="self-end">
                    <Button variant="outlined" className="flex gap-2">
                        <LinkIcon />
                        Website
                    </Button>
                </a>
            </Card>

            <Card>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    <a href="https://www.konicaminolta.us/" target="_blank" rel="noopener noreferrer" className="hover:scale-[1.05] transition-all duration-[120ms] flex justify-center">
                        <img 
                            alt="Konica Minolta Logo"
                            src={process.env.PUBLIC_URL + '/assets/svg/konica_minolta.svg'} 
                            className="sm:w-64 w-48" 
                        />
                    </a>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-pretty">Sales Intern</h2>
                            <h3>Konica Minolta Business Solutions</h3>
                            <h4 className="text-pretty">June 2016 - August 2016</h4>
                        </div>
                    </div>
                </div>

                <p>
                </p>

                <div className="flex flex-wrap gap-1">
                    <Chip label="Sales" />
                    <Chip label="Customer Service" />
                    <Chip label="Java" />
                    <Chip label="Database" />
                    <Chip label="CRM" />
                </div>

                <a href="https://www.konicaminolta.us/" target="_blank" rel="noopener noreferrer" className="self-end">
                    <Button variant="outlined" className="flex gap-2">
                        <LinkIcon />
                        Website
                    </Button>
                </a>
            </Card>

            <Card >
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    <a href="https://www.nmsu.edu/" target="_blank" rel="noopener noreferrer" className="hover:scale-[1.05] transition-all duration-[120ms] flex justify-center">
                        <img 
                            alt="New Mexico State University"
                            src={process.env.PUBLIC_URL + '/assets/svg/nmsu_logo.svg'} 
                            className="object-contain bg-[#8c0b42] rounded-full bg-origin-padding pt-3 pl-1 w-24 h-24" 
                        />
                    </a>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-pretty">Peer Learning Assistant</h2>
                            <h3>Intro to Java, College Algebra, Business Calculus</h3>
                            <h4 className="text-pretty">January 2015 - May 2016</h4>
                        </div>
                    </div>
                </div>

                <p>
                </p>

                <div className="flex flex-wrap gap-1">
                    <Chip label="Teaching" />
                    <Chip label="Mentorship" />
                    <Chip label="Lesson Planning" />
                    <Chip label="Java" />
                    <Chip label="Mathematics" />
                    <Chip label="Tutoring" />
                </div>

                <a href="https://www.nmsu.edu/" target="_blank" rel="noopener noreferrer" className="self-end">
                    <Button variant="outlined" className="flex gap-2">
                        <LinkIcon />
                        Website
                    </Button>
                </a>
            </Card>

            <Card >
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    <a href="https://www.nmsu.edu/" target="_blank" rel="noopener noreferrer" className="hover:scale-[1.05] transition-all duration-[120ms] flex justify-center">
                        <img 
                            alt="New Mexico State University"
                            src={process.env.PUBLIC_URL + '/assets/svg/nmsu_logo.svg'} 
                            className="object-contain bg-[#8c0b42] rounded-full bg-origin-padding pt-3 pl-1 w-24 h-24" 
                        />
                    </a>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-pretty">Customer Service</h2>
                            <h3>Pan American Center</h3>
                            <h4 className="text-pretty">August 2014 - May 2016</h4>
                        </div>
                    </div>
                </div>

                <p>
                </p>

                <div className="flex flex-wrap gap-1">
                    <Chip label="Customer Relations" />
                </div>

                <a href="https://www.nmsu.edu/" target="_blank" rel="noopener noreferrer" className="self-end">
                    <Button variant="outlined" className="flex gap-2">
                        <LinkIcon />
                        Website
                    </Button>
                </a>
            </Card>

            <Card>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                    <a href="https://www.konicaminolta.us/" target="_blank" rel="noopener noreferrer" className="hover:scale-[1.05] transition-all duration-[120ms] flex justify-center">
                        <img 
                            alt="Topform Data Logo"
                            src={process.env.PUBLIC_URL + '/assets/images/tfd-logo-3.png'} 
                            className="w-36 p-4 bg-gradient-to-b from-[#f47821] to-[#00b4ae] rounded-lg" 
                        />
                    </a>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-pretty">Assistant Warehouse Manager & Production</h2>
                            <h3>Topform Data, Inc.</h3>
                            <h4 className="text-pretty">June 2016 - August 2016</h4>
                        </div>
                    </div>
                </div>

                <p>
                </p>

                <div className="flex flex-wrap gap-1">
                    <Chip label="Shipping" />
                    <Chip label="Printing Production" />
                    <Chip label="Warehouse Management" />
                    <Chip label="Inventory Management" />
                    <Chip label="UPS Shipping" />
                </div>

                <a href="https://www.konicaminolta.us/" target="_blank" rel="noopener noreferrer" className="self-end">
                    <Button variant="outlined" className="flex gap-2">
                        <LinkIcon />
                        Website
                    </Button>
                </a>
            </Card>
        </>
    );
}

export default Career;