import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import SliderArrow from '/img/homepage/slider_arrow.svg';
import QuoteIcon from '/img/homepage/quote_icon.svg';
import BgSphere from '/img/homepage/sphere.svg';
import SectionWrapper from '../shared/SectionWrapper';
import Carousel from 'nuka-carousel';


import {TwitterTweetEmbed} from 'react-twitter-embed';
import Marquee from "react-fast-marquee";

const comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."

const useSlidesToShow = () => {
    const [screenSize, setIsMobile] = useState();
    useEffect(() => {
        const onResize = () => {
            setIsMobile(window?.innerWidth);
        }

        window.addEventListener("resize", onResize);

        setIsMobile(window?.innerWidth);

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    if (screenSize < 720) {
        return 1
    } else if (screenSize < 1050) {
        return 2
    } else {
        return 3
    }
}

const WhatTheySay = () => {
    const slidesToShow = useSlidesToShow();

    return (
        <SectionWrapper className={styles.sectionWrapper}>
            <BgSphere className={styles.bgSphere} />
            <div className={styles.bgSphere2} />
            <div className={styles.sectionBackground} />
            <div className={styles.section}>
                <h2 className={styles.title}>See What They Say</h2>
                <div className={styles.tweetsWrapper}>
                    <Marquee className={styles.tweets} gradient={false}>
                        <div className={styles.tweet}><TwitterTweetEmbed options={{conversation: 'none'}} tweetId={'1512404078218915848'}/></div>
                        <div className={styles.tweet}><TwitterTweetEmbed options={{conversation: 'none'}} tweetId={'1556121237184647169'}/></div>
                        <div className={styles.tweet}><TwitterTweetEmbed options={{conversation: 'none'}} tweetId={'1565339704878596103'}/></div>
                        <div className={styles.tweet}><TwitterTweetEmbed options={{conversation: 'none'}} tweetId={'1544218798470971393'}/></div>
                        <div className={styles.tweet}><TwitterTweetEmbed options={{conversation: 'none'}} tweetId={'1553151622762549248'}/></div>
                        <div className={styles.tweet}><TwitterTweetEmbed options={{conversation: 'none'}} tweetId={'1534550646946504706'}/></div>
                        <div className={styles.tweet}><TwitterTweetEmbed options={{conversation: 'none'}} tweetId={'1473042753894375424'}/></div>
                    </Marquee>
                </div>
                {/* <div className={styles.carouselWrapper}> */}
                    {/* <Carousel
                        renderBottomCenterControls={false}
                        wrapAround={true}
                        slidesToScroll={1}
                        slidesToShow={slidesToShow}
                        renderCenterLeftControls={({ previousSlide }) => (
                            <SliderArrow onClick={previousSlide} />
                        )}
                        renderCenterRightControls={({ nextSlide }) => (
                            <SliderArrow onClick={nextSlide} />
                        )}
                    >
                        <Comment text={comment} userName="Maria Ladowska 1" />
                        <Comment text={comment} userName="Steffany Jessica 2" />
                        <Comment text={comment} userName="Chris Wei 3" />
                        <Comment text={comment} userName="Maria Ladowska 4" />
                        <Comment text={comment} userName="Steffany Jessica 5" />
                        <Comment text={comment} userName="Chris Wei 6" />
                        <Comment text={comment} userName="Maria Ladowska 7" />
                        <Comment text={comment} userName="Steffany Jessica 8" />
                        <Comment text={comment} userName="Chris Wei 9" />
                    </Carousel> */}
                {/* </div> */}
            </div>
            {/* <div className={styles.carouselWrapper}>
                <Slider {...settings}
                    // centerMode={true}
                    // slidesToScroll={3}
                    // slidesToShow={3}
                    // // infinite
                    // prevArrow={<SlickButtonFix><SliderArrow /></SlickButtonFix>}
                    // nextArrow={<SlickButtonFix><SliderArrow /></SlickButtonFix>}
                    // centerPadding="10%"
                    // speed={250}
                // responsive={[{
                //     breakpoint: 992,
                //     settings: {
                //         slidesToShow: 2,
                //         slidesToScroll: 1,
                //         infinite: true,
                //     }
                // }, {
                //     breakpoint: 700,
                //     settings: {
                //         slidesToShow: 1,
                //         slidesToScroll: 1
                //     }
                // }]}
                >
                    <Comment text={comment} userName="Maria Ladowska 1" />
                    <Comment text={comment} userName="Steffany Jessica 2" />
                    <Comment text={comment} userName="Chris Wei 3" />
                    <Comment text={comment} userName="Maria Ladowska 4" />
                    <Comment text={comment} userName="Steffany Jessica 5" />
                    <Comment text={comment} userName="Chris Wei 6" />
                    <Comment text={comment} userName="Maria Ladowska 7" />
                    <Comment text={comment} userName="Steffany Jessica 8" />
                    <Comment text={comment} userName="Chris Wei 9" />
                </Slider>
            </div> */}
            {/* <div className={styles.carouselWrapper}>
                <Carousel scrollMode="remainder" wrapAround={true} slidesToScroll={1} slidesToShow={3}>
                    <Comment text={comment} userName="Maria Ladowska 1" />
                    <Comment text={comment} userName="Steffany Jessica 2" />
                    <Comment text={comment} userName="Chris Wei 3" />
                    <Comment text={comment} userName="Maria Ladowska 4" />
                    <Comment text={comment} userName="Steffany Jessica 5" />
                    <Comment text={comment} userName="Chris Wei 6" />
                    <Comment text={comment} userName="Maria Ladowska 7" />
                    <Comment text={comment} userName="Steffany Jessica 8" />
                    <Comment text={comment} userName="Chris Wei 9" />
                </Carousel>
            </div> */}
        </SectionWrapper>

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
