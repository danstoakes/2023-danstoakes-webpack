import React from "react";
import { Fade } from "react-awesome-reveal";

import Button from "../../button";
import Slide from "..";

import styles from "./index.module.scss";

const Banner = ({ backgroundImage, text, fragment, hasForm = false }) => {
    const { bannerButton, section, sectionContactForm, sectionContent, sectionContentWrapper } = styles;

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
                            <form className={ sectionContactForm } name="contact" netlify>
                                <input type="text" name="name" placeholder="Name" />
                                <input type="email" name="email" placeholder="Email" />
                                <select name="type">
                                    <option value="employer">Employer</option>
                                    <option value="recruiter">Recruiter</option>
                                    <option value="collaborator">Collaborator</option>
                                    <option value="other">Other</option>
                                </select>
                                <textarea rows={ 4 } name="message"></textarea>
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