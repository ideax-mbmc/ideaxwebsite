import styled from 'styled-components';
import Slider from 'react-slick';

export const Row = styled.div`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;

export const ImageWrapper = styled.div`
	width: 90%;
	display: flex !important;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	border-radius: 10px;
	outline: none;
	height: 100%;
    min-height:480px;
    min-width: 300px;
    padding: 1.5rem;
    background: #013F6A;
	border:3px solid white;
	position: relative;
	box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.3);
  	transition: all 0.3s ease-in-out;
    z-index:2;
	cursor: grab;

	&:hover {
  	cursor: grab;
 	 box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.05), 0 6px 16px rgba(0, 0, 0, 0.4);
	}
//     &:hover::before {
//     top: 12px;
//     left: 12px;
// 	cursor:grabbing;
// 	box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.05), 0 6px 16px rgba(0, 0, 0, 0.4);
//   }

	@media screen and (min-width: 440px) {
		border: 1px solid #bebebe;
	}
`;

export const ButtonContainer = styled(Row)`
	& svg {
		margin: 0 1rem;
		cursor: pointer;
	}

	& svg:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`;

export const ReviewSlider = styled(Slider)`
	width: 100%;

	.slick-track {
		display: flex;
		padding: 30px;
		gap: 3rem;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}

	.slick-list {
		overflow: hidden;
	}
	
	.slick-dots {
  bottom: -30px;
  display: flex !important;
  justify-content: center;
  list-style: none;

  li {
    margin: 0 6px;

    button {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: transparent;
      border: 2px solid white;
	  opacity:0.4;
      padding: 0;
      font-size: 0;
      color: transparent;
      transition: opacity 0.3s ease-in-out;
	  cursor: pointer;

      &::before {
        display: none;
        content: none;
      }
    }

    &.slick-active button {
      background-color: white;
	  opacity: 1;
    }
  }
}
`;

export const CircleImage = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  border: 2px solid #1d609c;
`;

export const TestimonialH1 = styled.h1`
	font-size:3rem;
    color:white;
    margin-bottom:40	px;
    text-align:center;

    @media screen and (max-width:480px){
        font-size:2rem;
    }
`;

export const Section = styled.section`
	padding: ${({ padding }) => (padding ? padding : '140px 0')};
	margin: ${({ margin }) => (margin ? margin : '')};
	background: ${({ inverse }) => (inverse ? '#041322' : '#071c2f')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};

	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;

export const TextWrapper = styled.span`
	color: ${({ color }) => (color ? color : '')};
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
`;