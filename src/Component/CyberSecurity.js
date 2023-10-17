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


const CyberSecurity = () => {
    const navigate = useNavigate();
  return (
    <>
       <div className='header'>
                <div className='header1'>
                    <img src="https://www.guvi.in/build/images/guvi-white-logo.b7f929e677d3c604407e0f0cfb743ae8.webp" height="60" ></img>
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
            <nav className='navbara'>
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
                image='https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepageseven")}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                What Is Hacking? Types of Hacking & More
                </Typography>

                <Typography variant="body2" color="text.secondary">
                Cybersecurity & Ethical hacking and have been key in making sure that your data online<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepageseven")} >READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
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
                image="https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png"
                alt="Paella dish"
                onClick={()=>navigate("/readmorepageeight")}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                Cybersecurity Vs Ethical Hacking: Top 10 Differences
                </Typography>

                <Typography variant="body2" color="text.secondary">
                Cybersecurity & Ethical hacking and have been key in making sure that your data online<br></br>
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
                image='https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepagenine")}

            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                What is Cybersecurity? Importance and its uses & the growing challenges in 2023!
                </Typography>

                <Typography variant="body2" color="text.secondary">
                Cybersecurity & Ethical hacking and have been key in making sure that your data online<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepagenine")}
>READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
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
                image='https://www.guvi.in/blog/wp-content/uploads/2022/11/Blue-Purple-Futuristic-Virus-Hacks-Youtube-Thumbnail.png'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepageone")}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                Top 10 Ethical Hacking Books for Beginner to Advanced
                </Typography>

                <Typography variant="body2" color="text.secondary">
                Cybersecurity & Ethical hacking and have been key in making sure that your data online<br></br>
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
    <Card sx={{ maxWidth: 345 }} className='card-container'>
            <CardMedia
                component="img"
                height="194"
                image='https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepagetwo")}

            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                8 Different Types of Cybersecurity and Threats Involved
                </Typography>

                <Typography variant="body2" color="text.secondary">
                Cybersecurity & Ethical hacking and have been key in making sure that your data online<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepagetwo")}
>READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
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
                image='https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact.jpg'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepagethree")}

            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                Top 7 Cyber Security Attacks in Real Life

                </Typography>

                <Typography variant="body2" color="text.secondary">
                Cybersecurity & Ethical hacking and have been key in making sure that your data online<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepagethree")}
>READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
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
                image='https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-2048x1072.png'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepagefour")}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!
                </Typography>

                <Typography variant="body2" color="text.secondary">
                Cybersecurity & Ethical hacking and have been key in making sure that your data online<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepagefour")} >READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
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
                image='https://www.guvi.in/blog/wp-content/uploads/2021/03/Cybersecurity-ultimate-guide-2048x1072.png'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepagefive")}

            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                Cybersecurity Jobs: Ultimate Cybersecurity Career Roadmap
                </Typography>

                <Typography variant="body2" color="text.secondary">
                Cybersecurity & Ethical hacking and have been key in making sure that your data online<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepagefive")}
 >READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
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
                image='https://www.guvi.in/blog/wp-content/uploads/2020/11/cyber-security-e1614342903477.png'
                alt="Paella dish"
                onClick={()=>navigate("/readmorepagesix")}

            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                How Is Cyber Security Important To Our Lives?
                </Typography>

                <Typography variant="body2" color="text.secondary">
                Cybersecurity & Ethical hacking and have been key in making sure that your data online<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" onClick={()=>navigate("/readmorepagesix")}
 >READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
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
           <img src="https://www.guvi.in/build/images/guvi-white-logo.b7f929e677d3c604407e0f0cfb743ae8.webp
" height="60"></img>                
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

export default CyberSecurity