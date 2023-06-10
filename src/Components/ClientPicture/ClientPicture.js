import React from 'react'
import './ClientPicture.css'
const ClientPicture = () => {
  return (
    <>
        <h1 class="center bold mt-20">Capture Client Photo</h1>
        <p class="center mt-10 mb-10">Make sure the customer’s face aligned and
            towards the camera!</p>
        <figure class="dummy-upload">
            <img src={require('../../html/assets/images/dummy-user-img.svg').default} />
        </figure>
        <button class="btn btn-primary w-350 mt-10 mb-30" data-toggle="modal"
            data-target="#openCameraForPhoto"><img src={require('../../html/assets/images/camera-icon.svg').default} alt="Camera Icon" class="camera-ic"/>Open Camera</button>
    </>
  )
}

export default ClientPicture