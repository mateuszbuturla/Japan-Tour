import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Lightbox from "react-image-lightbox";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

import {
  PageHeader,
  PageContainer,
  Header,
  ImageGallery,
} from "../../components/common/common";

function Attraction() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const { name } = useParams();

  const images = [img1, img2, img3, img4];

  return (
    <>
      <Header name={name} small />
      <main>
        <PageHeader header={name} description={`opis ${name}`} />
        <PageContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            sit eaque architecto velit numquam totam sequi ea commodi molestias?
            Numquam, vero et quae reiciendis enim sint laborum corporis delectus
            perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Expedita, numquam dolorem officia illo, omnis veniam fugiat
            soluta porro doloremque aliquam ab velit corrupti hic, corporis odit
            eius itaque facilis ut?
          </p>
          <p onClick={() => setGalleryOpen(true)}>test</p>
          <ImageGallery
            images={images}
            onPhotoClick={(index: number) => {
              setPhotoIndex(index);
              setGalleryOpen(true);
            }}
          />
          {galleryOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setGalleryOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
              }
            />
          )}
        </PageContainer>
      </main>
    </>
  );
}

export default Attraction;
