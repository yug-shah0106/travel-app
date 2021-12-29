import React, { useState } from "react";
import './navbar.css';
import { useHistory } from 'react-router-dom';

function Navbar() {

    const [open, setopen] = useState(false);
    const [nav, setNav] = useState(false);
    const history = useHistory();

        const changeBackground = () =>{
                    
            if(window.scrollY >= 100){
                setNav(true);
            }
            else{
                setNav(false);
            }
        }

        window.addEventListener('scroll', changeBackground);


        const handleOpen = () =>{
            setopen(!open);

            if(open){
                document.querySelector('.body').classList.remove('active');
            }
            else{
                document.querySelector('.body').classList.add('active');
            }
        }


        document.querySelectorAll('.nav-link').forEach(navlink =>{
            navlink.addEventListener('click',function(){
                document.querySelector('.body').classList.remove('active');
                var all = document.querySelectorAll('.span');

                for (var i = 0; i < all.length; i++) {
                    all[i].classList.remove('active')
                  }
            })
        })


    return (
        <div className={nav ? "nav active" : "nav"}>
            <div className="container">
                    <div className="logo-block">
                        <h1 className="logo" onClick={()=>{
                            history.push("/");
                        }}> TravelsWorld</h1>
                    </div>
            
                    <div className="side-menu">
                        <ul className={ open ? "nav-list active" : "nav-list"}>
                            
                            <a href="/"><li className="nav-link">Home</li></a>

                            <a href="collection">
                                <li className="nav-link">Collection</li>
                            </a>

                            <a href="blog">
                                <li className="nav-link">Blog</li>
                            </a>

                            <a href="sales">
                                <li className="nav-link">Sales</li>
                            </a>

                            <a href="about">
                                <li className="nav-link">About us</li>
                            </a>

                        </ul>
                    </div>   
                    
                    <div className="hamburger" onClick={handleOpen} >
                        <span className={open ? "span span1 active" : "span span1"}></span>
                        <span className={open ? "span span2 active" : "span span2"}></span>
                    </div>
            </div>
        </div>
    )
}

export default Navbar
