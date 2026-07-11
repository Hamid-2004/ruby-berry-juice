import Hero from '../sections/Hero';
import FeaturedProducts from '../sections/FeaturedProducts';
import WhyRubyBerry from '../sections/WhyRubyBerry';
import OurStory from '../sections/OurStory';
import Gallery from '../sections/Gallery';
import Testimonials from '../sections/Testimonials';
import CallToAction from '../sections/CallToAction';
import Newsletter from '../sections/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyRubyBerry />
      <OurStory />
      <Gallery />
      <Testimonials />
      <CallToAction />
      <Newsletter />
    </>
  );
}
