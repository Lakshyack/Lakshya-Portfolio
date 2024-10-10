import React from 'react';
import Lakshya from '../img/lakshya.png'; // Ensure image path is correct

export default function BlobSVG() {
  return (
    <div>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Define the clipping path with the new shape */}
          <clipPath id="blobClip">
            <path d="M38.5,-64.3C51.7,-59,65.7,-52.5,73.6,-41.6C81.5,-30.6,83.3,-15.3,82.2,-0.7C81,14,76.8,27.9,70.5,41.7C64.2,55.4,55.9,68.9,43.8,75.9C31.7,83,15.9,83.5,0.8,82.2C-14.3,80.8,-28.6,77.5,-40.4,70.4C-52.3,63.2,-61.7,52.1,-67.9,39.8C-74,27.4,-76.8,13.7,-76.9,-0.1C-77.1,-13.8,-74.4,-27.7,-69,-41.3C-63.6,-54.9,-55.4,-68.3,-43.4,-74.3C-31.4,-80.4,-15.7,-79.2,-1.6,-76.5C12.6,-73.8,25.2,-69.7,38.5,-64.3Z" 
              transform="translate(100 100)" />
          </clipPath>
        </defs>

        {/* Add stroke to the SVG shape */}
        <path 
          d="M38.5,-64.3C51.7,-59,65.7,-52.5,73.6,-41.6C81.5,-30.6,83.3,-15.3,82.2,-0.7C81,14,76.8,27.9,70.5,41.7C64.2,55.4,55.9,68.9,43.8,75.9C31.7,83,15.9,83.5,0.8,82.2C-14.3,80.8,-28.6,77.5,-40.4,70.4C-52.3,63.2,-61.7,52.1,-67.9,39.8C-74,27.4,-76.8,13.7,-76.9,-0.1C-77.1,-13.8,-74.4,-27.7,-69,-41.3C-63.6,-54.9,-55.4,-68.3,-43.4,-74.3C-31.4,-80.4,-15.7,-79.2,-1.6,-76.5C12.6,-73.8,25.2,-69.7,38.5,-64.3Z" 
          transform="translate(100 100)"
          fill="none"
          stroke="#000"  /* Add a black stroke */
          strokeWidth="2.5"  /* Set the stroke width */
        />

        {/* Image element with margin */}
        <image 
          xlinkHref={Lakshya} 
          x="1"    /* Adjust x to create left margin */
          y="1"    /* Adjust y to create top margin */
          width="180"  /* Adjust width for margin on right */
          height="180" /* Adjust height for margin on bottom */
          clipPath="url(#blobClip)" 
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
}
