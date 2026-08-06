import React, { useState } from 'react';
import {
	ReviewSlider,
	ImageWrapper,
    Row,
    Section,
    TextWrapper,
    TestimonialH1,
    CircleImage,
} from './TestimonialElements';
import famous from '../../images/famous.jpg';
// import nene from '../../images/nene.png';
// import nili1 from '../../images/nili1.png';
// import nili2 from '../../images/nili2.png';
// import miraj from '../../images/miraj1.png'
import sujan from '../../images/sujan.png';
import shashi from '../../images/Shashi.png';
import basab from '../../images/Basab.png';

export const data = [
	{
		title: 'Sujan Dhungana',
		extraDescription:
			'Participant IdeaX 2024',
		description:
			'Participating in IdeaX 2024 was an incredible journey of personal growth. From brainstorming with my team to building something real under pressure, every moment challenged me to think bigger and move faster. The mentors were supportive, the atmosphere was electric, and the whole event felt like a celebration of ideas and potential.',
		image: sujan,
	},
	// {
	// 	title: 'Miraj Bhattarai',
	// 	extraDescription:
	// 		'Operations IdeaX 2024',
	// 	description:
	// 		'Being part of the Operations Team at IdeaX 2024 was quite exciting. From coordinating logistics to making sure every detail was in place behind the scenes, it was all about keeping the engine running so the magic could happen out front. I got to work with an amazing team, solve real-time challenges, and see firsthand how much goes into pulling off an event of this scale.',
	// 	image: miraj,
	// },
	// {
	// 	title: 'Nilima Shrestha',
	// 	extraDescription:
	// 		'Hacker Experience 2024',
	// 	description:
    //      'Helping at IdeaX 2023 was where it all started for me. It was my first taste of what goes into organizing a hackathon, and I was amazed by the energy, the teamwork, and the impact of it all. Whether it was helping set up, guiding participants, or just making sure things ran smoothly, every task felt meaningful.',
	// 	image: nili2,
	// },
	{
		title: 'Famous Dhungana',
		extraDescription:
			'Participant IdeaX 2023',
		description:
         'At MBM IdeaX our mission is to preserve indigenous language through innovative tools. Exhaustion met elation, our solution stood testament to sleepless nights and the indomitable human spirit. MBM IdeaX etched itself into a memory mosaic of creativity, newfound camaraderie, and friendships.',
		image: famous,
	},
	// {
	// 	title: 'Nilima Mainali',
	// 	extraDescription:
	// 		'General Manager 2024',
	// 	description: 
    //     "Working at IdeaX 2024 was one of the most rewarding experiences I've had. Being behind the scenes gave me a whole new appreciation for the effort it takes to bring such an inspiring event to life. From helping teams get settled to managing logistics on the fly, every moment was filled with learning, collaboration, and a sense of purpose.",
	// 	image: nili1,
	// },
	// {
	// 	title: 'Sneha Devkota',
	// 	extraDescription:
	// 		'Hacker Experience 2024',
	// 	description: 
    //     'Being the Media Lead for IdeaX 2024 was an unforgettable experience. Capturing the energy, creativity, and pure passion of young innovators was both inspiring and electrifying. Every photo, every post, and every highlight reel told a story of late nights, breakthrough ideas, and a community coming together to build the future.',
	// 	image: nene,
	// },
	{
		title: 'Shashi Baranwal',
		extraDescription:
			'Participant IdeaX 2024',
		description: 
        'IdeaX was my second hackathon and my first win — an experience I’ll always remember. The incredible support from the organizers made every moment worthwhile. Despite the heavy rainfall and the city being flooded, they ensured our safety and arranged everything we needed throughout the event. I’m truly grateful for their dedication and effort.',
		image: shashi,
	},
		{
		title: 'Basab Jha',
		extraDescription:
			'Participant IdeaX 2024',
		description: 
        'Went to ideaX back in sept 2024. my first hackathon. didn’t really know what to expect going in, but the vibe was solid. organizers actually cared, like, you could tell. they kept the energy up without making it feel forced. met cool people. built weird stuff and somehow won a track. walked out with more ideas than i walked in with. would do it again.',
		image: basab,
	}
];

export const sliderSettings = {
	dots:true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	infinite: true,
	slidesToShow: 3,
	// pauseOnHover: true,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};

const Testimonials = () => {
	const [setSliderRef] = useState(null);

	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
            <TestimonialH1>Testimonials</TestimonialH1>
                            <ReviewSlider {...sliderSettings} ref={setSliderRef}>
				                {data.map((el, index) => (
					            <ImageWrapper key={index}>  
                                    <Row align="center" gap="1rem" margin="1rem 0 0 0">
    								<CircleImage src={el.image} />
    									<div>
        									<TextWrapper size="1.25rem" weight="bold" color="white" style={{ textAlign: 'left' }}>
            								{el.title}
        									</TextWrapper>
        									<TextWrapper size="0.9rem" color="white" style={{ display: 'block', opacity: 0.8,marginTop: '0.4rem' }}>
            								{el.extraDescription}
        									</TextWrapper>
   										</div>
									</Row>
									<TextWrapper size="1rem" margin="1rem 0 0" color="white" style={{ textAlign: 'justify', lineHeight: '1.5' }}>
    									{el.description}
									</TextWrapper>
					            </ImageWrapper>
				                ))}
			                </ReviewSlider>
		</Section>
	);
};

export default Testimonials;