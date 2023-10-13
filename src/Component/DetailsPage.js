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

function DetailsPage() {
  return (
    <>
    <div className='container'>
    <Card sx={{ maxWidth: 345 }} className='card-container'>
            <CardMedia
                component="img"
                height="194"
                image="https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png"
                alt="Paella dish"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color="text.primary">
                    The Top 10 Tools Every Full Stack Developer Should Master in 2023
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    As a full stack developer, having the right set of tools is crucial for your<br></br>
                </Typography>
                <CardActions>
                        <Button size="small" >READ MORE <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon></Button>
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
                <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png" alt="image"></img>
                
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

export default DetailsPage