import Image from "next/image";
import { useState } from "react";
import styles from './Home.module.css';

export default function Homepage() {
    const [file, setFile] = useState<File | null>(null);
    const [url, setUrl] = useState<string>("");
    const [isLoading, setIsLoading] = useState<Boolean>(false);
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) {
        setFile(selectedFile);
      }
    };
  return (
    <div>
      <div className="">

<h1 className="font-bold text-3xl text-blue-700">Wanderlust Travel</h1>

<section className="p-10">
  <h2 className="font-semibold text-lg">Discover Your Dream Destination</h2>
  <p>
    Wanderlust Travel curates unforgettable experiences around the globe.
    From bustling cities to pristine beaches, we offer a variety of
    tours and packages to suit every traveler&apos;s taste and budget.
  </p>
  {/* <button className={styles.exploreButton}>Explore Destinations</button> */}
</section>

<section className="p-10">
  <h2 className="font-semibold text-lg">Popular Destinations</h2>
  <div className={styles.cardContainer}>
    <div className={styles.card}>
      <Image
        src="./paris.jpg" // Replace with your destination image
        alt="Paris"
        width={300}
        height={200}
      />
      <h3 className="font-semibold text-xl">Paris</h3>
      <p>Experience the rich culture and vibrant history...</p>
    </div>

  </div>
</section>

<section className="p-10">
  <h2 className="font-semibold text-lg">Explore with Us</h2>
  <p>A captivating video showcasing travel experiences</p>
  <div className="flex pt-4 items-center mb-10">

    <input type="file" accept="video/*" onChange={handleFileChange} />

    {/* Space for your video */}
    {isLoading ? <div className={styles.spinner}></div> : <button className='bg-blue-800 text-white p-2 rounded-md' onClick={() => console.log('handleUpload')
    }>Upload</button>}
  </div>
  <div className={styles.videoWrapper}>
    {/* Replace with your video embed or component */}
    {url &&
      <video controls>
        <source id="mp4" src={url} type="video/mp4" />
      </video>
    }
    <p>A captivating video showcasing travel experiences</p>
  </div>
</section>
<section className="p-10">
  <h2 className="font-semibold text-lg">What Our Travelers Say</h2>
  <p>Add testimonials from satisfied customers</p>
</section>
<section className="p-10">
  <h2 className="font-semibold text-lg">Book Your Dream Trip Today</h2>
  <p>Contact us to start planning your unforgettable adventure.</p>
  <button className={styles.contactButton}>Contact Us</button>
</section>
</div>
    </div>
  )
}
