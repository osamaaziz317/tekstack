import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import { listVideoSlugs, readVideoMetadata } from '../../lib/videos';

const page = () => {
  const videoSlugs = listVideoSlugs();
  const videoMeta = readVideoMetadata();
  return (
    <>
      <Navbar/>
      <Projects videoSlugs={videoSlugs} videoMeta={videoMeta} />
      <Footer/>
    </>
  );
}

export default page;
