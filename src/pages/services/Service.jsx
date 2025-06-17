import React from 'react'
import './Service.css'

const Service = () => {
    return (
        <div className='container services-parent'>
            <div className="heading-services">
                <h1>Master JavaScript — Build <br /> the Future of the Web</h1>
                <p>
                    Start your journey to become a skilled JavaScript developer.
                    Learn how to create <br /> dynamic, interactive, and powerful applications that shape modern digital experiences.
                </p>
            </div>
            <div className="services-container">
                <div className="service-box">
                    <button><i class="fa-brands fa-js"></i></button>
                    <h1>Master the Fundamentals</h1>
                    <p>Start by understanding core concepts like variables, data types, functions, loops, and conditionals — the building blocks of JavaScript.</p>
                </div>
                <div className="service-box">
                    <button><i class="fa-brands fa-js"></i></button>
                    <h1>Practice Every Day</h1>
                    <p>Consistency is key. Solve coding challenges, build mini projects, and experiment with code to strengthen your problem-solving skills.</p>
                </div>
                <div className="service-box">
                    <button><i class="fa-brands fa-js"></i></button>
                    <h1>Build Real Projects</h1>
                    <p>Create real-world applications like to-do apps, calculators, or games to apply your knowledge and showcase your skills.</p>
                </div>
                <div className="service-box">
                    <button><i class="fa-brands fa-js"></i></button>
                    <h1>Learn Modern Tools</h1>
                    <p>Explore frameworks and libraries like React, Node.js, and Express to build dynamic and scalable web applications.</p>
                </div>
                <div className="service-box">
                    <button><i class="fa-brands fa-js"></i></button>
                    <h1>Understand the Ecosystem</h1>
                    <p>Familiarize yourself with version control (Git), package managers (NPM), and deployment practices to work like a pro.</p>
                </div>
                <div className="service-box">
                    <button><i class="fa-brands fa-js"></i></button>
                    <h1>Stay Curious & Updated</h1>
                    <p>JavaScript evolves fast! Keep learning, follow updates, read blogs, and join developer communities to stay ahead.</p>
                </div>
            </div>

        </div>
    )
}

export default Service
