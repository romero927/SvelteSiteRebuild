import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Panel, Table, Image, Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import NavItem from './CustomReactBootstrap/NavItem'
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    let startDate = new Date("July 15, 2007")

    let diff = Math.abs(new Date() - startDate);
    let yearsExperience = Math.floor(diff / 31536000000);

    let startDateMgr = new Date("October 16, 2017")

    let diffMgr = Math.abs(new Date() - startDateMgr);
    let yearsExperienceMgr = Math.floor(diffMgr / 31536000000);

    return (
      <div className="App">
        <Navbar fixedTop bsClass="navbar" collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">kgromero.com</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown title="Resume" id="basic-nav-dropdown">
                <MenuItem href="./files/kgromero.docx" target="_blank">DOCX (1-Page)</MenuItem>
                <MenuItem href="./files/kgromero.pdf" target="_blank">PDF (1-Page)</MenuItem>
                <MenuItem href="./files/kgromero.html" target="_blank">HTML (Detailed)</MenuItem>
                <MenuItem href="./files/kgromero.json" target="_blank">JSON</MenuItem>
              </NavDropdown>
              <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                <NavDropdown title="InfraSource" id="basic-nav-dropdown">
                  <MenuItem href="./files/Development Path.pdf" target="_blank">Developer Progression</MenuItem>
                  <MenuItem href="./files/IT Landscape.png" target="_blank">IT Landscape</MenuItem>
                  <MenuItem href="./files/Development Process.png" target="_blank">Development Process</MenuItem>
                  <MenuItem href="./files/Electron Architecture.png" target="_blank">Electron Architecture</MenuItem>
                </NavDropdown>
                <NavDropdown title="Worldwide Machinery" id="basic-nav-dropdown">
                  <MenuItem href="./files/Workflow.pdf" target="_blank">Team Workflow</MenuItem>
                  <MenuItem href="./files/WWMMobile.png" target="_blank">Mobile Architecture</MenuItem>
                  <MenuItem href="./files/WWMLandscape.png" target="_blank">App Landscape</MenuItem>
                </NavDropdown>
                <NavDropdown title="HP" id="basic-nav-dropdown">
                  <MenuItem href="./files/SIOverview.pdf" target="_blank">Sudden Impact Overview</MenuItem>
                  <MenuItem href="./files/SIAL.png" target="_blank">Sudden Impact Architecture</MenuItem>
                </NavDropdown>
                <NavDropdown title="X-Fab" id="basic-nav-dropdown">
                  <MenuItem href="./files/Internship.pdf" target="_blank">Internship Projects Overview</MenuItem>
                  <MenuItem href="./files/PlasmaTraceSystem.pdf" target="_blank">Plasma Trace</MenuItem>
                  <MenuItem href="./files/ChemicalTracking.pdf" target="_blank">Chemical Tracking</MenuItem>
                  <MenuItem href="./files/MaskToolingManual.pdf" target="_blank">Mask Tooling Manual</MenuItem>
                  <MenuItem href="./files/DeviceMTM.pdf" target="_blank">Device MTM</MenuItem>
                  <MenuItem href="./files/MiscProjects.pdf" target="_blank">Misc. Projects</MenuItem>
                  <MenuItem href="./files/OtherInformationAboutMe.pdf" target="_blank">Other Information</MenuItem>
                </NavDropdown>
                <NavDropdown title="Texas Tech" id="basic-nav-dropdown">
                  <MenuItem href="./files/Lab1Project1.pdf" target="_blank">Lab 1 Project 1 PPT</MenuItem>
                  <MenuItem href="./files/Lab1Project2Presentation.pdf" target="_blank">Lab 1 Project 2 PPT</MenuItem>
                  <MenuItem href="./files/Lab1Project2.pdf" target="_blank">Lab 1 Project 2 DOC</MenuItem>
                  <MenuItem href="./files/Lab2FinalPresentation.pdf" target="_blank">Lab 2 PPT</MenuItem>
                  <MenuItem href="./files/Lab2FinalReport.pdf" target="_blank">Lab 2 DOC</MenuItem>
                  <MenuItem href="./files/Lab2TrialVideo.webm" target="_blank">Lab 2 Trial Video</MenuItem>
                  <MenuItem href="./files/Lab3FinalPresentation.pdf" target="_blank">Lab 3 PPT</MenuItem>
                  <MenuItem href="./files/Lab3FinalReport.pdf" target="_blank">Lab 3 DOC</MenuItem>
                  <MenuItem href="./files/ProjectLabVFinalReport.pdf" target="_blank">Lab 4/5 DOC</MenuItem>
                  <MenuItem href="./files/MicroprocessorArchitectureFinalProject.pdf" target="_blank">Microprocessor Architecture Final Project</MenuItem>
                  <MenuItem href="./files/TrellisDesignforLHUCA.pdf" target="_blank">Misc. Engineering Project DOC</MenuItem>
                  <MenuItem href="./files/Transcript_Kromero.pdf" target="_blank">Transcript</MenuItem>
                </NavDropdown>
                <NavDropdown title="Other" id="basic-nav-dropdown">
                <MenuItem href="./files/Lab1Project1.pdf" target="_blank">Lab 1 Project 1 PPT</MenuItem>
                  <MenuItem href="./files/Lab1Project2Presentation.pdf" target="_blank">Lab 1 Project 2 PPT</MenuItem>
                  <MenuItem href="./files/Lab1Project2.pdf" target="_blank">Lab 1 Project 2 DOC</MenuItem>
                  <MenuItem href="./files/Lab2FinalPresentation.pdf" target="_blank">Lab 2 PPT</MenuItem>
                  <MenuItem href="./files/Lab2FinalReport.pdf" target="_blank">Lab 2 DOC</MenuItem>
                  <MenuItem href="./files/Lab2TrialVideo.webm" target="_blank">Lab 2 Trial Video</MenuItem>
                  <MenuItem href="./files/Lab3FinalPresentation.pdf" target="_blank">Lab 3 PPT</MenuItem>
                  <MenuItem href="./files/Lab3FinalReport.pdf" target="_blank">Lab 3 DOC</MenuItem>
                  <MenuItem href="./files/ProjectLabVFinalReport.pdf" target="_blank">Lab 4/5 DOC</MenuItem>
                  <MenuItem href="./files/MicroprocessorArchitectureFinalProject.pdf" target="_blank">Microprocessor Architecture Final Project</MenuItem>
                  <MenuItem href="./files/TrellisDesignforLHUCA.pdf" target="_blank">Misc. Engineering Project DOC</MenuItem>
                  <MenuItem href="./files/Transcript_Kromero.pdf" target="_blank">Transcript</MenuItem>
                </NavDropdown>
              </NavDropdown>
              {/* <NavItem href="#about">About Me</NavItem>
              <NavItem href="#tech">Technical Skills</NavItem>
              <NavItem href="#work">Work Experience</NavItem>
              <NavItem href="#education">Education</NavItem> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <Row>
            <Col xsHidden smHidden md={1} lg={1} />
            <Col xs={12} sm={12} md={10} lg={10} style={{zIndex: 2}}>
              <Panel style={{opacity: .9}}>
                <h1>Kyle Romero</h1>
                <p>Director of Software Development with {yearsExperience} years experience in IT. Currently living in Jersey City, NJ.</p>
                <a name="about"> </a>
              </Panel>
              <Panel style={{opacity: .9}}>
                <div className="App-body">
                  <Panel collapsible defaultExpanded header="About Me" >
                    <Table bordered condensed>
                      <thead>
                        <tr className="Table-header">
                          <th colSpan="2">
                            <strong>Information</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="FiftyPercent">
                        <tr>
                          <td>
                            <Image src="./files/kgromero.jpg" responsive thumbnail />
                          </td>
                          <td>
                            Hello! My name is Kyle Romero.
                            I am a director of software development, with {yearsExperienceMgr} years of management experience and 10 years of full-stack development, technical lead, and architecture experience, living in Jersey City, NJ.
                            I have a Bachelor's Degree in Computer Engineering from Texas Tech University, and have worked in the IT field since 2007 focused on internal software development.
                            Currently, I am a director of operations technology (software solutions for field work), and previously was a team lead and senior developer at Worldwide Machinery, and a technical lead at HP.
                            I have extensive knowledge of all aspects of a successful software development organization, and have used many different technologies and methodologies over the years.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Contact</strong>
                          </td>
                          <td>
                          <ul>
                              <li><a href="mailto:kgromero@gmail.com" target="_top">kgromero@gmail.com</a></li>
                              <li><a href="https://www.linkedin.com/in/kyleromero/">LinkedIn</a></li>
                              <li><a href="https://github.com/romero927">Github</a></li>
                              <li><a href="https://keybase.io/kgromero">Keybase</a></li>
                              <li><a href="https://www.goodreads.com/kgromero">Goodreads</a></li>
                              <li><a href="tel://+12818579006">(281) 857-9006</a></li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>vCard</strong>
                          </td>
                          <td>
                            <Image src="./files/QR.png" responsive thumbnail width={'40%'}/>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Interests</strong>
                          </td>
                          <td>
                            <ul>
                              <li>My wife and I love to travel. We have travelled extensively throughout the U.S., as well as to several other countries.</li>
                              <li>Being an engineer at heart, I am constantly trying to find new side-projects to do.
                                  Some of my favorite have been implemented using a Raspberry Pi, such as a digital LED Sign, Pi-hole DNS blocker, E-Ink Nametag, and RTL-SDR.</li>
                              <li>Other Interests: Reading, Nature, Broadway, Music</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Technical Note</strong>
                          </td>
                          <td>
                            This site was built using the Create-React-App and React-Bootstrap libraries.<br />
                            It is hosted on Netlify.<br />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <a name="tech"> </a>
                  </Panel>
                    <a name="work"> </a>
                  <Panel collapsible defaultExpanded header="Work Experience">
                  <Table bordered condensed>
                      <thead>
                        <tr className="Table-header">
                          <th colSpan="2">
                            <strong><a className="whiteanchor" href="http://infrasourceus.com/">InfraSource, A Quanta Services Company (part of MEARS Group)</a></strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Title</strong>
                          </td>
                          <td>
                            Director - Operations Technology
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Dates</strong>
                          </td>
                          <td>
                            10/2017 to Current<br/>
                            (Director of Operations Technology: 2021 to Current)<br />
                            (Senior Operations Technology Manager: 2020 to 2021)<br />
                            (Operations Technology Manager: 2017 to 2020)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Description</strong>
                          </td>
                          <td>
                            <ul>
                              <li>Direct-Report to CIO of MEARS Group, helping to define and drive software development strategy</li>
                              <li>Head of Software Development for InfraSource</li>
                              <li>Manage teams of internal and external developers and project managers</li>
                              <li>Coordinate external and internal teams using Agile processes</li>
                              <li>Travel as needed to various sites around US to deploy new software solutions and manage IT relationship with other groups</li>
                              <li>Interface between technical and non-technical personnel; help to bridge the communication gap</li>
                              <li>Provide consultation on software development initiatives across MEARS Group</li>
                              <li>Explore and architect new technology solutions (focused on digital transformation)</li>
                              <li>Led team through process of making internal tools SOX-Compliant</li>
                              <li>Worked to develop high availability infrastructure architecture for apps</li>
                              <li>Create learning curriculum for new developers and provide training / KT sessions</li>
                              <li>Develop and implement strategy to build out company's internal tools using appropriate technologies</li>
                              <li>Help team manage DevOps, Agile, GitFlow, CICD, and PM processes</li>
                              <li>Help team administer various systems</li>
                              <li>Help team with prototyping / hands-on exploration of new technologies</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Achievements</strong>
                          </td>
                          <td>
                            <ul>
                              <li><strong>2021:</strong> Promoted to Director of Operations Technology after 1 year as Senior Manager</li>
                              <li><strong>2021:</strong> Nominated to MEARS Group Disruptor Team (Company Think-Tank)</li>
                              <li><strong>2021:</strong> Nominated to Quanta Leadership Academy</li>
                              <li><strong>2020:</strong> Promoted to Senior Manager of Operations Technology after 2.5 years of successful innovation</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Technologies (Architecture)</strong>
                          </td>
                          <td>
                            <ul>
                              <li><strong>.NET:</strong> C#, ASP.NET MVC, ASP.NET MVC API, Blazor</li>
                              <li><strong>Scripting:</strong> Python</li>
                              <li><strong>Javascript:</strong> Angular, React, Electron, Node, NPM, Webpack, Bootstrap</li>
                              <li><strong>DB:</strong> MS-SQL, SQLite</li>
                              <li><strong>BI:</strong> PowerBI, SSRS</li> 
                              <li><strong>Cloud:</strong> Azure</li>
                              <li><strong>Machine Learning:</strong> Sentiment Analysis via Azure Cognitive Services + Logic App</li>
                              <li><strong>Development:</strong> Azure DevOps, Github, Visual Studio, VS Code</li>
                              <li><strong>IoT:</strong> RPi + Raspbian + Adafruit Accessories (Python) </li>
                              <li><strong>Servers:</strong> Windows, Ubuntu</li>
                              <li><strong>Processes:</strong> DevOps, Agile, GitFlow, CICD</li>
                              <li><strong>Other:</strong> Sharepoint Online, Twilio, Slack, Trello, Lucidcharts</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table bordered condensed>
                      <thead>
                        <tr className="Table-header">
                          <th colSpan="2">
                            <strong><a className="whiteanchor" href="https://wwmach.com/">Worldwide Machinery</a></strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Title</strong>
                          </td>
                          <td>
                            Team Lead / Senior Software Developer
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Dates</strong>
                          </td>
                          <td>
                            4/2016 to 10/2017
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Description</strong>
                          </td>
                          <td>
                            <ul>
                              <li>Manage project workflow using Agile Scrum methodology</li>
                              <li>Manage junior developers' workloads</li>
                              <li>Develop modern API</li>
                              <li>Develop modern Mobile-first Web Application</li>
                              <li>Maintain legacy ERP application</li>
                              <li>Implement and Maintain Project and DevOps Processes</li>
                              <li>Proactively identify process improvements as well as project opportunities</li>
                              <li>Maintain / troubleshoot hardware infrastructure as needed</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Technologies</strong>
                          </td>
                          <td>
                            <ul>
                              <li><strong>.NET:</strong> C#, ASP.NET MVC API, WinForms</li>
                              <li><strong>Javascript:</strong> React, Redux, Typescript (ES6), Node.js + Express + NPM + PM2, Babel, Webpack, SASS, NGINX Reverse Proxy</li>
                              <li><strong>DB:</strong> MS-SQL</li>
                              <li><strong>Cloud:</strong> DigitalOcean</li>
                              <li><strong>Containerization:</strong> Docker</li>
                              <li><strong>Development:</strong> JIRA, TeamCity, Bitbucket (GIT), Visual Studio, VS Code, Trello, Lucidcharts</li>
                              <li><strong>Processes:</strong> DevOps, Agile, GitFlow, CICD</li>
                              <li><strong>Servers:</strong> Windows, Ubuntu</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table bordered condensed>
                      <thead>
                        <tr className="Table-header">
                          <th colSpan="2">
                            <strong><a className="whiteanchor" href="http://www.hp.com/country/us/en/welcome.html">HP Inc.</a></strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Titles</strong>
                          </td>
                          <td>
                            Technical Lead (IT Developer / Engineer III)<br />
                            Mid-level Developer (IT Developer / Engineer II)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Dates</strong>
                          </td>
                          <td>
                            12/2011 to 2/2016<br />
                            (Technical Lead: 2014 to 2016)<br />
                            (Developer: 2011 to 2014)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Description</strong>
                          </td>
                          <td>
                            <i><b>Technical Lead</b></i><br />
                            <ul>
                              <li>Led development team working on enterprise level product quality / escalation management tool.</li>
                              <li>Helped manage both onshore and offshore, full time and contingent developers.</li>
                              <li>Helped to define and improve processes used on project, including development of a customized disciplined agile methodology and setting project timelines.</li>
                              <li>Administered Team Foundation Server (source and requirements).</li>
                              <li>Managed quality control and workloads for developers on project.</li>
                              <li>Managed release process for tool.</li>
                              <li>Worked with business to define requirements and develop architecture for project.</li>
                              <li>Familiar with all aspects of project, from both technical and business standpoints.</li>
                              <li>While working on .NET Applications, received exposure to Big Data technologies</li>
                              <li>During the year 2015, led team to successfully complete clone of our systems to be used on both sides of HP after the company split into two.</li>
                            </ul>
                            <hr />
                            <i><b>Mid-Level Developer</b></i><br />
                            <ul>
                              <li>Worked on ASP.NET Web applications incorporating a 3-Tier approach.</li>
                              <li>Did work on all three tiers</li>
                              <li>Project was managed using Agile Scrum methodology (Received Certified Scrum Master certification 2012).</li>
                              <li>Source control system was Team Foundation Server.</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Technologies</strong>
                          </td>
                          <td>
                            <ul>
                              <li><strong>.NET:</strong> VB.NET, C#, ASP.NET</li>
                              <li><strong>Javascript:</strong> jQueryUI, jQuery</li>
                              <li><strong>DB:</strong> MS-SQL</li>
                              <li><strong>BI:</strong> Tableau, Qlickview</li>
                              <li><strong>Big Data:</strong> Hadoop, Hive, HP Vertica, </li>
                              <li><strong>Development:</strong> TFS, Subversion, Visual Studio</li>
                              <li><strong>Processes:</strong> Agile</li>
                              <li><strong>Servers:</strong> Windows</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table bordered condensed>
                      <thead>
                        <tr className="Table-header">
                          <th colSpan="2">
                            <strong><a className="whiteanchor" href="https://www.xfab.com/en/about-x-fab/corporate-overview/locations/usa-texas-single/">X-Fab Texas, Inc.</a></strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Titles</strong>
                          </td>
                          <td>
                            Software / Systems Engineer<br/>
                            IT Intern (Texas Tech Electrical Engineering)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Dates</strong>
                          </td>
                          <td>
                            1/2010 to 12/2011 (Full Time)<br />
                            5/2007 to 12/2009 (Intern)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Description</strong>
                          </td>
                          <td>
                            <ul>
                              <li>Development of Web applications to serve as frontends for databases.</li>
                              <li>Developed Windows Applications.</li>
                              <li>Involved in Database Design. Administered servers.</li>
                              <li>Designed Shell / Batch scripts. Developed console applications.</li>
                              <li>Deployed machine monitoring system. Developed Inventory tracking system.</li>
                              <li>Deployed Documentation system to sites globally.</li>
                              <li>Intern: Developed various internal software projects, including statistical analysis programs, format conversion software, and web applications.</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Technologies</strong>
                          </td>
                          <td>
                              <ul>
                                <li><strong>.NET:</strong> C#, ASP.NET, Console, Winforms</li>
                                <li><strong>General Purpose:</strong> C++, Perl</li>
                                <li><strong>DB:</strong> MS-SQL</li>
                                <li><strong>Development:</strong> Subversion, Visual Studio</li>
                                <li><strong>Servers:</strong> Windows, Redhat</li>
                                <li><strong>IoT:</strong> Perle IOLAN</li>
                              </ul>
                            </td>
                        </tr>
                      </tbody>
                    </Table>
                    <a name="education"> </a>
                  </Panel>
                  <Panel collapsible defaultExpanded header="Education">
                    <Table bordered condensed>
                      <thead>
                        <tr className="Table-header">
                          <th colSpan="2">
                            <strong><strong><a className="whiteanchor" href="http://www.ttu.edu/">Texas Tech University</a></strong></strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Degree</strong>
                          </td>
                          <td>
                            Bachelor of Science, Computer Engineering
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>GPA</strong>
                          </td>
                          <td>
                            2.944
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Dates</strong>
                          </td>
                          <td>
                            8/2005 to 12/2009
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Description</strong>
                          </td>
                          <td>
                            - Trained in Electrical Engineering and Computer Science<br />
                            - Project Lab Projects: <br />
                            1a: 60 Hz Notch Filter <br />
                            1b: Line Following Robot <br />
                            2: Tech-SAL Robotics Programming Language <br />
                            3: Remote Event Timer <br />
                            4/5: F.P.G.A. based Waveform Generator.<br />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Panel>
                </div>
              </Panel>
            </Col>
            <Col xsHidden smHidden md={1} lg={1} />
          </Row>
        </Grid>
        <Particles 
            className="particles"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0
            }}
            params={{
              "particles": {
                "number": {
                  "value": 30,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#ffffff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                },
                "opacity": {
                  "value": 0.4,
                  "random": false,
                  "anim": {
                    "enable": true,
                    "speed": .1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.2,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": .5,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "bounce",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "grab"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 140,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 1
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }}
          />
      </div>
    );
  }
}

export default App;
