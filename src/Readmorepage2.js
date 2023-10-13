import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './readpage.css';
function ReadMorePagetwo(){
    return(
        <>
        <div className='header'>
          <div className='header1'>
              <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png" alt="image"></img>
          </div>
          <nav className='navbar'>
              <ul className='navlink'>
                  <li className='topnav'>COURSES</li>
                  <li className='topnav dropdown'>LIVE CLASSES <ArrowDropDownIcon></ArrowDropDownIcon>
                      <div class="dropdown-contentlive">
                          <a href='#'>Zen Class    <button className='livebutton'> 🔴 live online classes </button><br></br><br></br><p className='two'>LIVE Online Intensive Program + 100% Placement Support</p></a>
                          <a href='#'>Full Stack Development Program (FSD)<br></br><br></br><p className='two'>Learn Javascript, HTML, CSS, Java, Data Structure, MongoDB & more</p></a>
                          <a href='#'>IIT-M Advanced Programming and Data Science Program<br></br><br></br><p className='two'>Learn Python, Machine Learning, NLP, Tableau, PowerBI & more</p></a>
                          <a href='#'>Automation and Testing Program<br></br><br></br><p className='two'>Learn Selenium, Python, Java, Jenkins, Jmeter, API Testing & more</p></a>
                          <a href='#'><p className='one'>Explore More Programs</p></a>
                      </div>
                  </li>
                  <li className='topnav dropdown'>PRACTICE <ArrowDropDownIcon></ArrowDropDownIcon>
                     <div class="dropdown-contentprac">
                          <a href="#">Codekata<br></br><br></br><p className='two'>Sharpen your coding skills, prepare for interviews</p></a>
                          <a href="#">Webkata<br></br><br></br><p className='two'>Build basic Frontend and Backend development skills</p></a>
                          <a href="#">IDE-Online Compiler<br></br><br></br><p className='two'>Run & test your code in any programming language</p></a>
                     </div>
                  </li>
                  <li className='topnav dropdown'>RESOURCES <ArrowDropDownIcon></ArrowDropDownIcon>
                      <div class="dropdown-contentres">
                          <a href='#'>REWARDS</a>
                          <a href='#'>REFERRAL</a>
                          <a href='#'>FORUM SUPPORT</a>
                          <a href='#'>BLOGS</a>
                      </div>
                  </li>
                  <li className='topnav dropdown'>OUR PRODUCTS <ArrowDropDownIcon></ArrowDropDownIcon>
                      <div class="dropdown-content">
                          <a href="#">HackerKid<br></br><br></br><p className='two'>Coding classes platform for K-12 Children</p></a>
                          <a href="#">GUVI for Corporates<br></br><br></br><p className='two'>Meet your hiring needs at ease</p></a>
                      </div>
                  </li>
              </ul>
          </nav>
      </div>
      <div>
          <h1 className='readhead'>Everything You Should Know About ChatGPT & Why It Matters?
</h1>
          
          <p className='readdatehead'>5 August 2023 . No Comments</p>
          <br></br>
          <br></br>

          <div className='image1'>
            <img src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Everything-You-Should-Know-About-ChatGPT-and-Why-It-Matters.webp"/>
          </div>
          <div>
              <p>
              In the constantly growing landscape of artificial intelligence (AI) and natural language processing (NLP), ChatGPT has emerged as a significant milestone. ChatGPT is an advanced language model, developed by OpenAI, represents a leap forward for humankind, in our ability to interact with machines using natural language.
              <br></br>
              <br></br>

This revolutionary language model developed by Open AI, an American AI research and deployment company has captured the minds of tech enthusiasts, students, teachers, businesses, researchers, and everyone. But, does it impact your career? What are its applications? does it enhance your quality of work? Why does it even matter?
                
                </p>
                </div>
              
          
      </div>
  </>
    )
}
export default ReadMorePagetwo