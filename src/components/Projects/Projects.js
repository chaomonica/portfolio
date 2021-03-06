import React, {useState, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";

import { makeStyles } from '@material-ui/core/styles';

import Header from '../Header/Header.js';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import SingleProject from './SingleProject.js';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const useStyles = makeStyles(()=>({
  padding: {
    padding: '10px'
  }
}));

const Projects = () => {
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Beverage', 'Snack'];
  const categorypictures = ['https://i.imgur.com/mAyXMl3.jpg', 'https://i.imgur.com/UmYs1Jx.jpg', 'https://i.imgur.com/i6P7pGX.jpg', 'https://i.imgur.com/NyGCFS0.jpg', 'https://i.imgur.com/y5NeQZN.jpg', 'https://i.imgur.com/OGPlFzj.jpg'];

  const classes = useStyles();

  return (
<div>
    <Grid container>
      <Grid item xs={12}>
        <Header/>

      </Grid>


      </Grid>
      <br></br>

    <Carousel
        arrows={true}
        centerMode={false}
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        //itemClass={classes.padding}
      >

        {categories.map(function(currentCategory, index) {
          //console.warn(currentCategory, index)
          return (<div key={index}>
            <SingleProject
              categoryName = {currentCategory}
              picture={categorypictures[index]}

            />
          </div>);
        })}
      </Carousel>
  </div>
  )
}

export default Projects;