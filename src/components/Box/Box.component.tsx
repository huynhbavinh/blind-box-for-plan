import React from 'react'
import './style.css'
import { Image } from "antd";
import BoxLid from '../../assets/images/box-lid.png'
import BoxBody from '../../assets/images/box.png'
const WIDTH = 100;
function Box() {
  return (
    <>
        <div className='box'>
            <Image
                className='box-lid'
                preview={false}
                width={WIDTH + 10}
                src={BoxLid}
            />
            <Image
                className='box-body'
                preview={false}
                width={WIDTH}
                src={BoxBody}
            />
        </div>
    </>
  )
}

export default Box