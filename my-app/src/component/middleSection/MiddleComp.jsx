import { Text ,Img } from '@chakra-ui/react';
import React from 'react';
import extraStyle from "./extra.module.css"

const MiddleComp = () => {
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
        <img src="https://rigorousthemes.com/blog/wp-content/uploads/2021/08/word-image-414.png" alt=""/>
      </div>
    </div>
  )
}

export default MiddleComp
