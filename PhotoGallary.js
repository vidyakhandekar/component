import React from 'react'
import './photoGallery.css'
function PhotoGallary() {
  return (
    <div id="wrapper">
    <div class="container">
        <h1 >Image Gallery</h1>
        <div class="gallery">
            <figure class="card">
                <img src="./imageone.jpg" alt=""/>
                <figcaption>Image1</figcaption>
            </figure>
            <figure class="card">
                <img src="./image2.jpeg" alt=""/>
                <figcaption>Image2</figcaption>
            </figure>
            <figure class="card">
                <img src="./image3.jpeg" alt=""/>
                <figcaption>Image3</figcaption>
            </figure>
            <figure class="card">
                <img src="./image7.jpeg" alt=""/>
                <figcaption>Image4</figcaption>
            </figure>
            <figure class="card">
                <img src="./image5.jpeg" alt=""/>
                <figcaption>Image5</figcaption>
            </figure>
            <figure class="card">
                <img src="./image6.jpeg" alt=""/>
                <figcaption>Image6</figcaption>
            </figure>
            <figure class="card">
                <img src="./image7.jpeg" alt=""/>
                <figcaption>Image7</figcaption>
            </figure>
            <figure class="card">
                <img src="./image8.jpeg" alt=""/>
                <figcaption>Image8</figcaption>
            </figure>
            <figure class="card">
                <img src="./image9.jpeg" alt=""/>
                <figcaption>Image9</figcaption>
            </figure>
        </div>
    </div>
</div>
  )
}

export default PhotoGallary
