import './App.css';
import './addit.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="nav-top grad-nav-top">
          <div class="nav-top-links">
            <div class="top-left float-left">
              <span class="top-link-undergrad"><a href="/Grad/">Graduate Studies</a></span>
              <span class="top-link-grad"><a href="/"><i class="far fa-angle-left"></i>pcci.edu</a></span>
              <span class="desktop-link"><a href="/admissions/online-dual-enrollment/">Online Dual Enrollment</a></span>
            </div>
            <div class="top-right text-right">
              <span class="desktop-link"><a href="/request-info/">Request Info</a></span>
              <span class="desktop-link"><a href="/visit-us/">Visit Us</a></span>
              <span class="desktop-link"><a href="/apply/">Apply</a></span>
              <span class="desktop-link"><a href="/current-students/">Students</a></span>
              <span class="desktop-link"><a href="/current-students/parents/">Parents</a></span>
              <span class="desktop-link"><a href="/Alumni/">Alumni</a></span>

              <span><a href="/coronavirus/">COVID Info</a></span>
              <span><a id="quickLinksToggle" class="btn bg-alternate quick-links-toggle" data-toggle="collapse" href="#topNavCollapse" role="button" aria-expanded="false" aria-controls="topNavCollapse">Quick Links</a></span>
            </div>
          </div>
          <div class="collapse container-fluid" id="topNavCollapse">
            <div class="row justify-content-center">
              <div class="col-4 col-sm nav-top-icons"><a href="/media/webcams/"><i class="far fa-webcam"></i><span>Campus Webcams</span></a></div>
              <div class="col-4 col-sm nav-top-icons"><a href="/Academics/Programs/"><i class="fas fa-books"></i><span>Areas of Interest</span></a></div>
              <div class="col-4 col-sm nav-top-icons"><a href="/admissions/costs/"><i class="far fa-money-bill-alt"></i><span>Costs &amp; Financial Aid</span></a></div>
              <div class="col nav-top-icons"><a href="/calendars/"><i class="far fa-calendar-alt"></i><span>Calendar</span></a></div>
              <div class="col-4 col-sm nav-top-icons"><a href="/offices/employment/"><i class="far fa-briefcase"></i><span>Employment Opportunities</span></a></div>
              <div class="col-4 col-sm nav-top-icons"><a href="/Payments/"><i class="fas fa-file-invoice-dollar"></i><span>Payment Center</span></a></div>
            </div>
          </div>
        </div>
        <nav id="navigation" class="navigation sticky-top grad-nav navigation-landscape">
          <div class="navigation-header">
            <div class="navigation-logo">
              <a href="/Grad/"><img src="https://www.pcci.edu/Images/pcc_grad_logo.svg" alt="Pensacola Christian College Seminary and Graduate Studies" /></a>
            </div>
            <div class="navigation-button-toggler">
              <i class="hamburger-icon"></i>
            </div>
          </div>
          <div class="navigation-body scroll-momentum">
            <div class="navigation-body-header align-to-left">
              <div class="navigation-logo">
                <a href="/Grad/"><img src="https://www.pcci.edu/Images/pcc_grad_logo.svg" alt="Pensacola Christian College Seminary and Graduate Studies" /></a>
              </div>
              <span class="navigation-body-close-button">✕</span>
            </div>
            <ul class="navigation-menu">
              <li class="navigation-item has-submenu">
                <a class="navigation-link" href="./">About</a>
                <div class="navigation-megamenu navigation-submenu" style={{ right: 'auto' }}>
                  <div class="navigation-megamenu-container">
                    <div class="navigation-row">
                      <div class="navigation-col">
                        <ul>
                        </ul>
                      </div>
                      <div class="navigation-col">
                        <ul>
                          <li><a href="/Grad/About/MissionPurpose.aspx">Mission &amp; Purpose</a></li>
                          <li><a href="/Grad/About/BiblicalFoundations.aspx">Biblical Foundations</a></li>
                          <li><a href="/Grad/calendars/EventCalendar/">Calendar of Events</a></li>
                          <li><a href="/Grad/GeneralInfo/StudentLife.aspx">College Life</a></li>
                        </ul>
                      </div>
                      <div class="navigation-col">
                        <ul>
                          <li><a href="/Grad/calendars/OneWeekModules/">One-Week Modules</a></li>
                          <li><a href="/Grad/GradViewbook/default.aspx">PTS-Grad Viewbook</a></li>
                          <li><a href="/Grad/calendars/SummerCalendar/">Summer Sessions</a></li>
                          <li><a href="/Grad/contact/">Contact</a></li>

                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </li>
              <li class="navigation-item has-submenu">
                <a class="navigation-link" href="#">Academics</a>
                <div class="navigation-megamenu navigation-submenu" style={{ right: 'auto' }}>
                  <div class="navigation-megamenu-container">
                    <div class="navigation-row">
                      <div class="navigation-col">
                        <ul>
                          <li><a href="/Grad/Academics/AcademicInformation/">Academic Information</a></li>
                          <li><a href="/Grad/Academics/Programs/?degree=grad">Areas of Interest</a></li>
                          <li><a href="/Grad/Academics/Departments/">Graduate Departments</a></li>
                        </ul>
                      </div>
                      <div class="navigation-col">
                        <ul>
                          <li><a href="/Grad/Academics/Bible/">Pensacola Theological Seminary</a></li>
                          <li><a href="/Grad/Academics/Accreditation/">Accreditation</a></li>
                          <li><a href="/Grad/calendars/OneWeekModules/">One-Week Seminary Modules</a></li>
                        </ul>
                      </div>
                      <div class="navigation-col">
                        <ul>
                          <li><a href="/Grad/Faculty/">Faculty</a></li>
                          <li><a href="/Grad/GeneralInfo/GraduationRequirements.aspx">Graduation Requirements</a></li>
                          <li><a href="/Grad/GeneralInfo/AppealsAndGrievances.aspx">Appeals and Grievances</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="navigation-item has-submenu">
                <a class="navigation-link" href="#">Admissions &amp; Aid</a>
                <div class="navigation-megamenu navigation-submenu" style={{ right: 'auto' }}>
                  <div class="navigation-megamenu-container">
                    <div class="navigation-row">
                      <div class="navigation-col">
                        <div class="nav-card-container">
                          <div class="nav-card-content">
                            <a href="/Grad/Admissions/" class="cta-link btn-secondary btn">Admissions</a>
                            <p>Pensacola Christian College inspires students that are innovative, ambitious, and passionate
                              about making a difference for Christ. Come discover what PCC has to offer, program requirements,
                              tuition costs, and more!</p>
                          </div>
                        </div>
                      </div>
                      <div class="navigation-col">
                        <ul>
                          <li><a href="/Grad/Admissions/GraduateStudents/">Seminary &amp; Graduate Applicants</a></li>
                          <li><a href="/Grad/Admissions/InternationalStudents/">International Grad Applicants</a></li>
                          <li><a href="/Grad/OnlineLearning/onlinelearningchecklist.aspx">Online-Learning Grad Applicants</a></li>
                        </ul>
                      </div>
                      <div class="navigation-col">
                        <ul>

                          <li><a href="/Grad/Apply/Info/">Online Application</a></li>
                          <li><a href="/Grad/Admissions/FAQ/">FAQ</a></li>
                          <li><a href="/Grad/Admissions/Costs/">Basic Cost</a></li>
                          <li><a href="/Grad/Admissions/FinancialAid/">Financial Aid</a></li>
                        </ul>
                      </div>
                      <div class="navigation-col">
                        <ul>
                          <li><a href="/Grad/Admissions/Costs/PaymentPlan/">Payment Plan</a></li>
                          <li><a href="//static.pcci.edu/PCC/DownloadCenter/PDFs/TranscriptRequestGRAD.pdf" target="_blank" rel="noopener">Transcript Request</a></li>
                          <li><a href="/media/catalog/">Catalog</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="navigation-item has-submenu">
                <a class="navigation-link" href="#">Online</a>
                <div class="navigation-megamenu navigation-submenu" style={{ right: 'auto' }}>
                  <div class="navigation-megamenu-container">
                    <div class="navigation-row">
                      <div class="navigation-col">
                        <ul>
                          <li><a href="/Grad/OnlineLearning/">Online Learning</a></li>
                          <li><a href="/Grad/OnlineLearning/OnlineLearningChecklist.aspx">Checklist</a></li>
                          <li><a href="/Grad/Admissions/Costs/#Online">Financial Info</a></li>
                          <li><a href="/Grad/OnlineLearning/PaymentPlan.aspx">Payment Plan</a></li>

                        </ul>
                      </div>
                      <div class="navigation-col">
                        <ul>
                          <li><a href="/Grad/OnlineLearning/DatesDeadlines.aspx">Dates &amp; Deadlines</a></li>
                          <li><a href="/Grad/Admissions/FAQ/#OnlineLearning">FAQ</a></li>
                          <li><a href="/Grad/OnlineLearning/CourseOfferings.aspx">Courses</a></li>
                        </ul>
                      </div>
                      <div class="navigation-col">
                        <ul>
                          <li><a href="/Applications/OnlineLearning/LoginPage.aspx">Registration</a></li>
                          <li><a href="/Applications/">Apply</a></li>
                          <li><a href="https://pcci.instructure.com/login/ldap">Login</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="navigation-item has-submenu">
                <a class="navigation-link" href="#">Resources</a>
                <div class="navigation-megamenu navigation-submenu" style={{ right: 'auto' }}>
                  <div class="navigation-megamenu-container">
                    <div class="navigation-row">
                      <div class="navigation-col">
                        <ul>
                          <li><a href="/Grad/resources/downloads/">Downloads</a></li>
                          <li><a href="/Payments/">Payment Center</a></li>
                          <li><a href="/current-students/computer-requirements.aspx">Computer Requirements</a></li>

                        </ul>
                      </div>
                      <div class="navigation-col">
                        <ul>
                          <li><a href="/media/catalog/">Catalog</a></li>
                          <li><a href="/Grad/GradViewbook/default.aspx">PTS-Grad Viewbook</a></li>
                          <li><a href="//static.pcci.edu/PCC/DownloadCenter/PDFs/Grad-PTS/Grad-Student-Handbook21.pdf" target="_blank" rel="noopener">Graduate Student Handbook</a></li>

                        </ul>
                      </div>
                      <div class="navigation-col">
                        <ul>
                          <li><a href="/Grad/calendars/EventCalendar/">Event Calendar</a></li>
                          <li><a href="/Grad/calendars/OneWeekModules/">One-Week Seminary Modules</a></li>
                          <li><a href="/Grad/calendars/SummerCalendar/">Summer Sessions</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="navigation-item nav-search">
                <div class="navigation-link" id="search-toggle">
                  <svg class="svg-icon search-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                </div>
                <div id="search-container">
                  <div class="search-content search-form">
                    <div class="search-box">
                      <input type="text" name="search-input" id="search-input" placeholder="Search" autocomplete="off" />
                      <span id="search-button" class="fas fa-search" aria-hidden="true"></span>
                      <span id="close-search-button" class="far fa-times" aria-hidden="true"></span>
                    </div>
                  </div>
                  <div id="search-results" class="search-results-none"></div>
                  <div id="search-results-more" class="search-results-none">
                    <a href="#" class="cta-link" id="search-term-link">See All Results</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="overlay-panel" style={{ background: 'rgba(0, 0, 0, 0.7) none repeat scroll 0% 0%' }}></div></nav>
      </header>






      <main className="page-content">
        <section>
          <div class="headerDiv well-lg bg-photo dark-overlay">
            <div class="text-white well-lg text-center">
              <h4>Go where God wants you</h4>
              <h1>Seminary & Graduate Studies</h1>
              <div style={{ marginTop: '15px' }}>
                <a class="btn btn-alternate btn-icon apply" style={{ marginRight: '5px' }}>Apply Now</a>
                <a class="btn btn-alternate btn-icon request" style={{ marginLeft: '5px' }}>Request Info</a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="well-lg">
            <div class="col-md-8 offset-md-2 text-center">
              <h3>Equip Yourself</h3>
              <p>Get the knowledge and credentials to propel your career or ministry forward. Experienced Christian faculty will guide and challenge you each step of the way, whether you choose online, on-campus, or blended study.</p>
              <p>If you’re wondering whether you can do it or if it will be worth it… the answers are “Yes” and “Yes.”</p>
              <p>Your education will be excellent, Christ-centered, and flexible. And it won’t cost you a fortune.</p>
            </div>
          </div>
        </section>
        <section>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 p-0 bg-photo dark-overlay" style={{ backgroundImage: "url('https://pcci.edu/Images/Grad/LearnOnline.jpg')" }}>
                <div class="text-center p-lg well-lg">
                  <h3 class="text-white">Learn Online</h3>
                  <p class="text-white">Earn your graduate or seminary degree when and where it works for you.</p>
                  <a href="/grad/OnlineLearning/" class="btn btn-secondary">Explore Online Learning</a>
                </div>
              </div>
              <div class="col-md-6 p-0 bg-photo dark-overlay" style={{ backgroundImage: "url('https://pcci.edu/Images/Grad/LearnonCampus.jpg')" }}>
                <div class="text-center p-lg well-lg">
                  <h3 class="text-white">Learn on Campus</h3>
                  <p class="text-white">Learn alongside like-minded students on a beautiful campus. Summer classes available!
                  </p>
                  <a href="/Grad/GeneralInfo/OnCampusLanding.aspx" class="btn btn-secondary">Find Out More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="well-lg" style={{ backgroundColor: 'black' }}>
            <div class="majorCenter">
              <div class="grid-item" style={{ gridColumn: 1 }}>
                <a href="https://www.pcci.edu/Grad/Academics/Education/MasterOfScienceEdLeadership.aspx">
                  <div class="degree-item">
                    <span class="material-icons">school</span>
                    <div>Masters of Science</div><div>Educational Leadership</div>
                  </div>
                </a>
              </div>
              <div class="grid-item" style={{ gridColumn: 2 }}>
                <a href="https://www.pcci.edu/Grad/Academics/Bible/MasterDivinity.aspx">
                  <div class="degree-item">
                    <span class="material-icons">school</span>
                    <div>Masters of Divinity</div>
                  </div>
                </a>
              </div>
              <div class="grid-item" style={{ gridColumn: 3 }}>
                <a href="https://www.pcci.edu/Grad/Academics/Business/MasterofBusinessAdmin.aspx">
                  <div class="degree-item">
                    <span class="material-icons">school</span>
                    <div>Masters of</div><div>Business Administration</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="gaDiv well-lg">
            <div class="well-lg text-center">
              <h4>Make a Difference through the</h4>
              <h1>Graduate Assistance Program</h1>
              <div style={{ marginTop: '15px' }}>
                <a class="btn btn-icon apply" style={{ marginRight: '5px' }}>Apply Now</a>
                <a class="btn btn-icon request" style={{ marginLeft: '5px' }}>Request Info</a>
              </div>
            </div>
            <div class="gaInnerDesc text-center">
              <p>Work towards your degree, by working at Pensacola Christian College!</p>
              <p>With your enrollment as a Graduate Assistant, you receive a scholarship that lets you study for free, while receiving professional experience at the numerous departments at Pensacola Christian College</p>
            </div>
          </div>
        </section>
      </main>





      <footer class="bg-primary text-light">
        <div class="container well-lg">
          <div class="row">
            <div class="col-md-3 col-sm-6 footer-icons">
              <img src="https://www.pcci.edu/Images/PccLogo.svg" class="mb-2 footer-logo" alt="footer logo" />
              <div class="mb-4">
                <a href="https://twitter.com/connectpcc/"><i class="fab fa-twitter"></i></a>
                <a href="https://www.facebook.com/PensacolaChristianCollege"><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/connectpcc/"><i class="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/user/PensacolaChristian"><i class="fab fa-youtube"></i></a>
                <a href="https://www.linkedin.com/school/pensacola-christian-college"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <ul class="list-unstyled">
                <li><a href="/contact/">Contact Us</a></li>
                <li><a href="tel:+850-478-8496">850-478-8496</a></li>
                <li><a href="https://www.google.com/maps/place/Pensacola+Christian+College/@30.4731849,-87.2364655,17z/data=!3m1!4b1!4m5!3m4!1s0x8890bf92dfae0c05:0x3b8938693e35d55b!8m2!3d30.4731849!4d-87.2342768" target="_blank" rel="noopener">250 Brent Lane<br />Pensacola, FL, U.S.A.</a></li>
                <li><a data-address="info*pcci|edu" href="mailto:info@pcci.edu">info@pcci.edu</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6">
              <ul class="list-unstyled">
                <li><a href="/offices/employment/">Employment Opportunities</a></li>
                <li><a href="/offices/career-services/">Career Services</a></li>
                <li><a href="/current-students/eagles-nest.aspx">myPCC App</a></li>
                <li><a href="https://cstore.pcci.edu/default.asp?">Campus Store</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6">
              <ul class="list-unstyled">
                <li><a href="/apply/">Apply</a></li>
                <li><a href="/visit-us/">Visit Us</a></li>
                <li><a href="/calendars/events-calendar.aspx">Calendar of Events</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="lower-footer text-center well-sm">
          <div class="container">
            <div class="row small">
              <div class="col-md-6 footer-text-left">
                <p class="m-0">Copyright ©
                  <span id="copyright">2021</span>
                  • Pensacola Christian College. All rights reserved.</p>
              </div>
              <div class="col-md-6 footer-text-right">
                <p class="m-0">
                  <a href="/legal/privacy-policy.aspx">Privacy Policy</a> •
                  <a href="/legal/terms-of-use.aspx">Terms of Use</a> •
                  <a href="/legal/notice-of-liability.aspx">Notice of Liability</a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}

export default App;
