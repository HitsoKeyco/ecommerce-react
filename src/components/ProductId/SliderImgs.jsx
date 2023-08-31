import React, { useState } from 'react'
import './Styles/SliderImgs.css'
import { Link } from 'react-router-dom'

const SliderImgs = ({ product }) => {

    const [indexImg, setIndexImg] = useState(0)

    const styleMovible = {
        transform: `translateX(calc((-${indexImg} / 3 ) * 100%))`
    }

    const handlePrevius = () => {
        console.log('izquierda');
        if(indexImg -1 >= 0){
            setIndexImg(indexImg - 1)
        }else{
            setIndexImg(2)
        }
    }

    const handleNext = () => {
        console.log('derecha');
        if(indexImg + 1 <= 2){
            setIndexImg(indexImg + 1)
        }else{
            setIndexImg(0)
        }
    }
    
    return (
        <>
        <div className='slider'>
            <div className="link_home">
                <Link to='/'>Home</Link>
                <i className='bx bxs-circle' ></i>
                <h4>{product?.title}</h4>
            </div>            
            <button className='slider_btn slider_left' onClick={handlePrevius}><i className='bx bx-chevron-left'></i></button>
            <div style={styleMovible} className="slider_movible">
                {
                    product?.images.map(imgInfo => (
                        <div className='slider_img_container' key={imgInfo.id}>
                            <img className='slider_img_top' src={imgInfo.url} alt="" />
                        </div>

                    ))
                }
            </div>
            <button className='slider_btn slider_right' onClick={handleNext}><i className='bx bx-chevron-right' ></i></button>
        
        <div className='slider_footer'>
            <div className="slider_footer_container ">
                {
                    product?.images.map((imgInfo, i) => (
                        <div className={`slider_footer_img_container ${ i === indexImg && "slider_footer_img_container_active"}`} key={imgInfo.id} onClick={() => setIndexImg(i)} > 
                            <img className='slider_img_bootom' src={imgInfo.url} alt="" />
                        </div>

                    ))
                }
                </div>
        </div>
        </div>
        </>
    )
}

export default SliderImgs