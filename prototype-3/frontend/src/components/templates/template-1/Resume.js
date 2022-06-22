import React, { useState, useEffect, useContext} from 'react';
import './styles.css'
import { format } from 'date-fns'
const Resume = ({ resume }) => {

    

    return (
        <div id='divToDownload' className="resume_wrapper">
            <div className="resume_left">
                <div className="resume_image">
                    <img src={resume.personalInformation.image} alt="Resume_image"/>
                </div>
                <div className="resume_bottom">
                    <div className="resume_item resume_namerole">
                        <div className="name">{resume.personalInformation.firstName} {resume.personalInformation.lastName}</div>
                        <div className="role">{resume.personalInformation.postTitle}</div>
                    </div>
                    <div className="resume_item resume_profile">
                        <div className="resume_title">Profile</div>
                        <div className="resume_info">{resume.profile}</div>
                    </div>
                    <div className="resume_item resume_address">
                        <div className="resume_title">Address</div>
                        <div className="resume_info">
                            {resume.personalInformation.address},<br/>
                            {resume.personalInformation.city} {resume.personalInformation.zip},<br/>
                            {resume.personalInformation.state}<br/>
                        </div>
                    </div>
                    <div className="resume_item resume_contact">
                        <div className="resume_title">Contact</div>
                        <div className="resume_info">
                            <div className="resume_subtitle">Phone</div>
                            <div className="resume_subinfo">{resume.personalInformation.phone}</div>
                        </div>
                        <div className="resume_info">
                            <div className="resume_subtitle">Email</div>
                            <div className="resume_subinfo">{resume.personalInformation.email}</div>
                        </div>
                    </div>
                    <div className="resume_item resume_skills">
                        <div className="resume_title">Skills</div>
                        <div className="resume_info">
                            {resume.skills.map((item, index) => {
                                return (
                                    <div className="skills_list" key={index}>
                                        <div className="skills_left">{item}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="resume_item resume_skills">
                        <div className="resume_title">Languages</div>
                        <div className="resume_info">
                            {resume.languages.map((item, index) => {
                                return (
                                    <div className="skills_list" key={index}>
                                        <div className="skills_left">{item.name}: {item.level}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume_right">
                <div className="resume_item resume_namerole">
                <div className="name">{resume.personalInformation.firstName} {resume.personalInformation.lastName}</div>
                        <div className="role">{resume.personalInformation.postTitle}</div>
                </div>
                <div className="resume_item resume_education">
                    <div className="resume_title">Education</div>
                    <div className="resume_info">
                        {resume.education.map((item, index) => {
                            return(
                                <div key={index} className="resume_data">
                                    <div className="year">
                                    {item.startDate && format(item.startDate, 'yyyy')} - {item.startDate && format(item.endDate, 'yyyy')}                                    </div>
                                    <div className="content">
                                        <p>{item.degree} {item.fieldOfStudy}, {item.schoolName} {item.location}</p>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                        
                
                    </div>
                </div>
                <div className="resume_item resume_experience">
                    <div className="resume_title">Experience</div>
                    <div className="resume_info">
                        {resume.experience.map((item, index) => {
                            return(
                                <div key={index} className="resume_data">
                                    <div className="year">
                                    {item.startDate && format(item.startDate, 'yyyy')} - {item.startDate && format(item.endDate, 'yyyy')}                                    </div>
                                    <div className="content">
                                        <p>{item.jobTitle} at {item.employer}, {item.city} </p>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })} 
                    </div>
                </div>
                <div className="resume_item resmue_interests">
                    <div className="resume_title">Interests</div>
                    <div className="resume_info">
                        <div className="interests">
                        {resume.interests.map((item, index) => {
                            return (
                                <div key={index} className="int_data">{item}</div>

                            )
                        })}
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Resume;