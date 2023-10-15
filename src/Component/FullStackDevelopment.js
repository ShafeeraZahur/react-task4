/* eslint-disable */
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
//import DetailsPage from './DetailsPage';
import './style.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import './Navbar/Navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';

const FullStackDevelopment = () => {
    const navigate = useNavigate();
  return (
    <>
       <div className='header'>
                <div className='header1'>
                    <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png"></img>
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
                <CardMedia
                    component="img"
                    height="200"
                    image='https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png'
                    alt="Paella dish"
                />
            </div>
            <nav className='navbar'>
                <ul className='navlink'>
                    <Link to="/" className='all'>
                        <li>ALL</li>
                    </Link>
                    <Link to="/fsd" className='fsd'>
                        <li>FULL STACK DEVELOPMENT</li>
                    </Link>
                    <Link to="/datascience" className='datascience'>
                        <li>DATA SCIENCE</li>
                    </Link>
                    <Link to="/cybersecurity" className='cybersecurity'>
                        <li>CYBER SECURITY</li>
                    </Link>
                    <Link to="/career" className='career'>
                        <li>CAREER</li>
                    </Link>

                </ul>
            </nav>
    <div className='container'>
        <Card sx={{ maxWidth: 345 }} className='card-container'>
            <CardMedia
                component="img"
                height="194"
                image='https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepagenine")}

            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                7 Best Full-Stack Development Online Courses [2023]
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    As a full stack developer, having the right set of tools is crucial for your<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepagenine")}>READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
                </CardActions>
            </CardContent>
            <hr>
            </hr>
            <CardContent>
                <Typography variant="body2" color="text.secondary">5 August 2023 . No Comments</Typography>
            </CardContent>

        </Card>
        <Card sx={{ maxWidth: 345 }} className='card-container'>
            <CardMedia
                component="img"
                height="194"
                image="https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png"
                alt="Paella dish"
                onClick={()=>navigate("/readmorepageeight")}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                    The Top 10 Tools Every Full Stack Developer Should Master in 2023
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    As a full stack developer, having the right set of tools is crucial for your<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepageeight")}>READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
                </CardActions>
            </CardContent>
            <hr>
            </hr>
            <CardContent>
                <Typography variant="body2" color="text.secondary">5 August 2023 . No Comments</Typography>
            </CardContent>

        </Card>
        <Card sx={{ maxWidth: 345 }} className='card-container'>
            <CardMedia
                component="img"
                height="194"
                image='https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-2048x1072.png'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepageseven")}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                The Ultimate Guide to Real-World Full-Stack Development Applications
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    As a full stack developer, having the right set of tools is crucial for your<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepageseven")}>READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
                </CardActions>
            </CardContent>
            <hr>
            </hr>
            <CardContent>
                <Typography variant="body2" color="text.secondary">5 August 2023 . No Comments</Typography>
            </CardContent>

        </Card>
        <Card sx={{ maxWidth: 345 }} className='card-container'>
            <CardMedia
                component="img"
                height="194"
image='https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-2048x1072.webp'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepagesix")}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                Best Ways to Learn Full Stack Development in 2023
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    As a full stack developer, having the right set of tools is crucial for your<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepagesix")}>READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
                </CardActions>
            </CardContent>
            <hr>
            </hr>
            <CardContent>
                <Typography variant="body2" color="text.secondary">5 August 2023 . No Comments</Typography>
            </CardContent>

        </Card>
        <Card sx={{ maxWidth: 345 }} className='card-container'>
            <CardMedia
                component="img"
                height="194"
                image='https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepagefive")}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                How Long Would It Take to Be a Full Stack Developer?
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    As a full stack developer, having the right set of tools is crucial for your<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepagefive")}>READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
                </CardActions>
            </CardContent>
            <hr>
            </hr>
            <CardContent>
                <Typography variant="body2" color="text.secondary">5 August 2023 . No Comments</Typography>
            </CardContent>

        </Card>
        <Card sx={{ maxWidth: 345 }} className='card-container'>
            <CardMedia
                component="img"
                height="194"
image='https://www.guvi.in/blog/wp-content/uploads/2023/07/image-6.png'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepagefour")}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">

                Top Skills To Become a Full-Stack Developer in 2023                </Typography>

                <Typography variant="body2" color="text.secondary">
                    As a full stack developer, having the right set of tools is crucial for your<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepagefour")}>READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
                </CardActions>
            </CardContent>
            <hr>
            </hr>
            <CardContent>
                <Typography variant="body2" color="text.secondary">5 August 2023 . No Comments</Typography>
            </CardContent>

        </Card>
        <Card sx={{ maxWidth: 345 }} className='card-container'>
            <CardMedia
                component="img"
                height="194"
                image='https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-Full-Stack-Development-Webinars-and-Workshops.jpg'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepagethree")}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                Top Full Stack Development Webinars and Workshops
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    As a full stack developer, having the right set of tools is crucial for your<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepagethree")}>READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
                </CardActions>
            </CardContent>
            <hr>
            </hr>
            <CardContent>
                <Typography variant="body2" color="text.secondary">5 August 2023 . No Comments</Typography>
            </CardContent>

        </Card>
        <Card sx={{ maxWidth: 345 }} className='card-container'>
            <CardMedia
                component="img"
                height="194"
                image='https://www.guvi.in/blog/wp-content/uploads/2023/07/24746653_7002417-1-2048x1365.jpg'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepagetwo")}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                The Future & Scope of Full-Stack Developers in India
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    As a full stack developer, having the right set of tools is crucial for your<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepagetwo")}>READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
                </CardActions>
            </CardContent>
            <hr>
            </hr>
            <CardContent>
                <Typography variant="body2" color="text.secondary">5 August 2023 . No Comments</Typography>
            </CardContent>

        </Card>
        <Card sx={{ maxWidth: 345 }} className='card-container'>
            <CardMedia
                component="img"
                height="194"
                image='https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepageone")}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                Top 10 Full-Stack Developer Frameworks in 2023
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    As a full stack developer, having the right set of tools is crucial for your<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepageone")}>READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
                </CardActions>
            </CardContent>
            <hr>
            </hr>
            <CardContent>
                <Typography variant="body2" color="text.secondary">5 August 2023 . No Comments</Typography>
            </CardContent>

        </Card>

    </div>
    <div className='footer'>
        <div className='parent1'>
             <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png"></img>
             
             <br></br>
             <button variant="outlined" className='btn'>Refer & Earn</button>
             
             <div className='follow'>
             <p>Follow us on
                <div className='icons'>
                <FacebookRoundedIcon></FacebookRoundedIcon>
                <InstagramIcon></InstagramIcon>
                <LinkedInIcon></LinkedInIcon>
                
                <br></br>
                <TwitterIcon></TwitterIcon>
                <TelegramIcon></TelegramIcon>
                <YouTubeIcon></YouTubeIcon>
                </div>
             </p>
             </div>
        </div>
        <div className='parent2'>
        <Typography gutterBottom variant="h5" color="text.primary">Course Library</Typography>
        <Typography variant="body2" color="text.secondary">
                    <ul className='list'>
                        <li>Premium Course</li>
                        <li>Free Library</li>
                        <li>Offers</li>
                    </ul>
        </Typography>
        <Typography gutterBottom variant="h5" color="text.primary">ZEN CLASS Live Classes</Typography>
        <Typography variant="body2" color="text.secondary">
                    <ul className='list'>
                        <li>Full Stack Development</li>
                        <li>IIT-M Advanced Programming & Data Science Program</li>
                        <li>Automation and Testing Program</li>
                    </ul>
        </Typography>
        </div>
        <div className='parent3'>
        <Typography gutterBottom variant="h5" color="text.primary">Practice</Typography>
        <Typography variant="body2" color="text.secondary">
                    <ul className='list'>
                        <li>Codekata</li>
                        <li>Webkata</li>
                        <li>IDE</li>
                    </ul>
        </Typography>
        <Typography gutterBottom variant="h5" color="text.primary">Resources</Typography>
        <Typography variant="body2" color="text.secondary">
                    <ul className='list'>
                        <li>Reward</li>
                        <li>Refer a Friend</li>
                        <li>Blogs</li>
                        <li>Forum Support</li>
                    </ul>
        </Typography>
        </div>
        <div className='parent4'>
        <Typography gutterBottom variant="h5" color="text.primary">Products</Typography>
        <Typography variant="body2" color="text.secondary">
                    <ul className='list'>
                        <li>HackerKid</li>
                        <li>Guvi for Corporates</li>
                    </ul>
        </Typography>
        <Typography gutterBottom variant="h5" color="text.primary">Company</Typography>
        <Typography variant="body2" color="text.secondary">
                    <ul className='list'>
                        <li>Refund Policy</li>
                        <li>FAQs</li>
                        <li>Contact us</li>
                    </ul>
        </Typography>
        </div>
        
        <Typography variant="body2" color="text.secondary">Terms and Conditions | Privacy Policy</Typography>
    </div>
   
    

    </>
  )
}

export default FullStackDevelopment