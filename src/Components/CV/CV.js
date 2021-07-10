import React from 'react';
import classes from './CV.module.sass';
import FadeIn from 'react-fade-in';

const CV = props => {
    return (
        <div className={classes.CV}>
            <FadeIn>
            <div className={classes.Heading}>
                <h2>Billy Smith | Front End Developer</h2>
                <p>Bishopston, Bristol</p>
                <p>07717325656</p>
                <p>billy@billysmith.net</p>
            </div>
            <div className={classes.Body}>
                <h3>Personal Profile</h3>
                <p>I am a driven and independent developer, with a passion for continuous learning. <br/> I took lockdown as an opportunity to learn HTML, CSS and Javascript, finding my first client for freelance work in May 2020.<br/><br/> Wanting to build more complex apps, I began learning React in July 2020 and have since furthered my skills, winning prizes at the ColoradoJam hackathon and taking on the lead developer role for a small startup.</p>
                <h3>Core Skills</h3>
                <table className={classes.CoreSkills}>
                    <tr><td><strong>Languages</strong></td><td>HTML/JSX, CSS, Javascript, Python, Solidity</td></tr>
                    <tr><td><strong>Frameworks</strong></td><td>React.js, Express, Truffle</td></tr>
                    <tr><td><strong>Other</strong></td><td>Linux, AWS, Firebase, Photoshop</td></tr>
                </table>
                <h3>Education</h3>
                <p><strong className={classes.bsc}>BSc (Hons) Physics [2:1]</strong> Bristol University (2016-2019)</p>
                <p><strong>A-levels:</strong></p>
                <table>
                    <tr><td><strong>Physics</strong></td><td>A</td></tr>
                    <tr><td><strong>Mathematics</strong></td><td>B</td></tr>
                    <tr><td><strong>Psychology</strong></td><td>B</td></tr>
                </table>
                <h3>Relevant Work Experience &amp; Projects</h3>
                <div className={classes.JobHeadline}>
                    <p><strong>Frontend Lead</strong></p><p>Moonwolf.io</p><p>February - June 2021</p>
                </div>
                <p>I designed and built frontends in React for blockchain applications from scratch for thousands of users, working remotely in a small and fast paced team.</p>
                <p>I created the frontend for a cryptocurrency staking platform in React in under a week as requested by the community and in response to market conditions. <span onClick = {() => window.open("https://farm.moonwolf.io/")}>View here</span>.</p>
                <p>I built the frontend for an NFT store, facilitating the sale of over $100,000 worth of digital art, creating a new revenue stream for the project and partnered artists. <span onClick = {() => window.open("https://nft.moonwolf.io/")}>View here</span>.</p>
                <p></p>
                <div className={classes.JobHeadline}>
                    <p><strong>Other React Projects</strong></p><p>July 2020 - February 2021</p>
                </div>
                <p>I designed and built the frontend of <span onClick={() => window.open("https://devfolio.co/submissions/freefund-e3ca")}>Freefund</span>, becoming a finalist in the 2021 ColoradoJam Hackathon. The cryptocurrency based crowdfunding platfrom was also awarded a runner up prize by a venture capital firm.</p>
                <p>I created a <span onClick = {() => window.open("https://master.d1l4h4map9o1uj.amplifyapp.com/")}>collaborative bugtracker web application</span> using React and Firebase, allowing users to create bug reports, comment on bugs and manage their urgency to name a few features.</p>
                <p>This website is built with React, and runs as a single page application using the React router. It also allows me to create blog posts so I can collate and share my research into various topics of interest.</p>
                <div className={classes.JobHeadline}>
                    <p><strong>Freelance Web Development</strong></p><p>March 2019 - Present</p>
                </div>
                <p>I worked with clients to realise their needs, created mockup designs in Photoshop before building whole websites front to back using CSS, HTML, JS and Node. I acted on feedback quickly to work towards a solution that the client felt was their own.</p>
                <p>I saved clients up to 80% of ongoing fees using efficient cloud hosting (AWS EC2).</p>
                <p>I learned technologies as required by clients (Webmail, AWS, Express).</p>
                <p><span onClick = {() => window.open("https://www.biographicalcounselling.net/")}>biographicalcounselling.net</span></p>
                {/* <div className={classes.JobHeadline}>
                    <p><strong>Open Day Operations Assistant</strong></p><p>University of Bristol</p><p>April 2019 - October 2019</p>
                </div>
                <p>I was responsible for organising and distributing all equipment for the 2019 open days, attended by thousands of people.</p>
                <p>Efficient communication with a large and varied team was essential, both in the months leading up to the event and on the day.</p>
                <p>I led several teams of student workers, assigning jobs as issues arose to ensure a smooth running of the event, representing the university to the highest standard.</p> */}
                <h3>Other Interests and Activities</h3>
                <p>Learning about emerging privacy technologies - zk-SNARKS, STARKs, SNORKs.</p>
                <p>Participating in and learning about the Ethereum ecosystem - attending virtual conferences, experimenting with dApps, reaching out to members of the community.</p>
                <p>Digital art</p>
                <p>I meditate and play guitar to get away from my computer</p>
                <p style = {{textAlign: 'center', fontWeight: 400, marginTop: "50px"}}>References available on request</p>
            </div>
            </FadeIn>
        </div>
    )
}

export default CV