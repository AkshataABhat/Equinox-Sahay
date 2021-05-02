import React from 'react'
import './StoryReel.css'
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
        image ="https://www.fssai.gov.in/upload/uploadfiles/files/COVID_19_IEC_ENG50.jpg" 
      	profileSrc= ""
      	title = ""
      />
      <Story 
        image ="https://covid19.karnataka.gov.in/storage/pdf-files/Posters-images/Image_39.JPG" 
      	profileSrc= ""
      	title = ""
      />
      <Story 
        image ="https://www.ics-shipping.org/wp-content/uploads/2021/03/COVID-19-free-poster.png" 
      	profileSrc= ""
      	title = ""
      />
      <Story 
        image ="https://about.canva.com/wp-content/uploads/sites/3/2020/03/Canva-Coronavirus-Disease-Collection-poster-2.png" 
      	profileSrc= "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400"
      	title = ""
      />
        <Story 
        image ="https://cdn.jjkeller.com/wcsstore/CVCatalogAssetStore/images/product/500x500/63476.jpg" 
      	profileSrc= ""
      	title = ""
      />

        </div>
    )
    }
export default StoryReel
