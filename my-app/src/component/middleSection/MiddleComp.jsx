import { Text ,Img } from '@chakra-ui/react';
import React from 'react';
import extraStyle from "./extra.module.css";
import {useState} from 'react'
import { useEffect } from 'react';



const pics=["",
  
  "https://www.retailmenot.com/blog/wp-content/uploads/sites/2/2020/03/Trendy-Work-From-Home-Clothes-and-Outfits-Winter-Edit.png",
  "https://dashboard.lovegen.com/media/images/image1.width-1024.width-1920.png",
  "https://2f35da97a9ad36d49db6-4d1987fef3a36cccd5478db4931039f0.ssl.cf3.rackcdn.com/assets/media/2020/10/SocialMedia_UK_RetailersASOS_OG_1200x630.jpg",
  "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTc4MzYxOTk0MzA1ODA3OTc2/stores-like-asos.png",
  "https://rigorousthemes.com/blog/wp-content/uploads/2021/08/word-image-414.png",
]
let  i =0;
const MiddleComp = () => {
  const [state , setState] = useState("https://rigorousthemes.com/blog/wp-content/uploads/2021/08/word-image-414.png") 
  useEffect(()=>{
    setInterval(()=>{
      if(i!==5){
        i++
      }else{
        while(i!=1){
          i--; 
        }
      }
      setState(pics[i])
    },3000)
  },[])

    
  return (
    <div>
      <div className={extraStyle.comp}>
        <div className={extraStyle.container} >
          <img src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/03_mar/random-spinners/se-dk-pl-ru-row-apac-mena-no-currency/global_430x80_desktop.gif" alt="" />
        </div>
        <div className={extraStyle.text}>
          <Text className={extraStyle.off2} fontSize="4xl" fontWeight="700">GET AT LEAST AN EXTRA 15% OFF </Text><br/>
          <Text className={extraStyle.off} fontSize="4xl" fontWeight="700">WITH OUR SURPRISE CODE </Text>
        </div>
      </div>
      <div className={extraStyle.pic} >
        <img src={state} alt=""/>
      </div>
    </div>
  )
}

export default MiddleComp
