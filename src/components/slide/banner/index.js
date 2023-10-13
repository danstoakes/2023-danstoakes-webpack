import React from "react";
import { Fade } from "react-awesome-reveal";

import Button from "../../button";
import Slide from "..";

import styles from "./index.module.scss";

const Banner = ({ backgroundImage, text, fragment, hasForm = false }) => {
    const { bannerButton, section, sectionContactForm, sectionContactFormSelect, sectionContent, sectionContentWrapper } = styles;

    return (
        <Slide
            backgroundImage={ backgroundImage } 
            extraClasses={`${ section }`}
            fragment={fragment}
        >
            <Fade direction="bottom" duration={ 500 }>
                <div className={ sectionContentWrapper }>
                    <div className={ sectionContent }>
                        { text }
                        {hasForm && (
                            <form className={ sectionContactForm } name="Contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                                <input type="hidden" name="form-name" value="Contact" />
                                <input type="text" name="name" placeholder="Name" autoComplete="name" />
                                <input type="email" name="email" placeholder="Email" autoComplete="email" />
                                <div class={ sectionContactFormSelect } autoComplete="off">
                                    <label for="type">Enquiry type</label>
                                    <select name="type" id="type">
                                        <option value="employer">Employer</option>
                                        <option value="recruiter">Recruiter</option>
                                        <option value="collaborator">Collaborator</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <label for="message">Message</label>
                                <textarea rows={ 4 } name="message" id="message" autoComplete="off"></textarea>
                                <Button extraClasses={ bannerButton } type="submit" text={`Send message`} alt={``} />
                            </form>
                        )}
                    </div>
                </div>
            </Fade>
        </Slide>
    );
};

export default Banner;