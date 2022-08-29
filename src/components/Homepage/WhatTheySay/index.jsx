import React from 'react';
import styles from './styles.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderArrow from '/img/homepage/slider_arrow.svg';
import QuoteIcon from '/img/homepage/quote_icon.svg';
import BgSphere from '/img/homepage/sphere.svg';

const comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."

// fixes incorrect html atributes on prev/next buttons
const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <span {...props}>{children}</span>
);

const WhatTheySay = () => {
    return (
        <div className={styles.sectionWrapper}>
            <BgSphere className={styles.bgSphere} />
            <div className={styles.bgSphere2} />
            <div className={styles.sectionBackground} />
            <div className={styles.section}>
                <h2 className={styles.title}>See What They Say</h2>

            </div>
            <div className={styles.carouselWrapper}>
                <Slider
                    centerMode={true}
                    slidesToScroll={1}
                    slidesToShow={3}
                    infinite
                    prevArrow={<SlickButtonFix><SliderArrow /></SlickButtonFix>}
                    nextArrow={<SlickButtonFix><SliderArrow /></SlickButtonFix>}
                    centerPadding="10%"
                    speed={250}
                >
                    <Comment text={comment} userName="Maria Ladowska" />
                    <Comment text={comment} userName="Steffany Jessica" />
                    <Comment text={comment} userName="Chris Wei" />
                    <Comment text={comment} userName="Maria Ladowska" />
                    <Comment text={comment} userName="Steffany Jessica" />
                    <Comment text={comment} userName="Chris Wei" />
                    <Comment text={comment} userName="Maria Ladowska" />
                    <Comment text={comment} userName="Steffany Jessica" />
                    <Comment text={comment} userName="Chris Wei" />
                </Slider>
            </div>
        </div>

    )
}

const Comment = ({ text, userName }) => {
    return (
        <div className={styles.comment}>
            <div className={styles.inner}>
                <div className={styles.userPhoto}></div>
                <div className={styles.text}>{text}</div>
                <hr />
                <div className={styles.userName}>{userName}</div>
                <QuoteIcon className={styles.quoteIcon} />
            </div>
        </div>
    )
}

export default WhatTheySay;