import React, {useState} from 'react'
import imageDragAndDropStyleSheet from './ImageDropAndDrag.module.css'
import {Icon} from 'semantic-ui-react'




const ImageDragAndDrop = ({imageData}) => {
    const [preview, setPreview] = useState({
        base64: "",
        size: ""
    })
    const [isUpload, setIsUpload] = useState(false)
    const onImgDragOver = (e) => {
        e.preventDefault();
    }

    const  imageUploaderHander = (e) => {
        e.preventDefault() 
        const files = e.target.files[0]
        if (files) {
            const {size} = files
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview({
                    base64: reader.result,
                    size
                }) //set data from get the preview
                imageData({
                    base64: reader.result,
                    size
                }) //sent the file to parent comoponent as a function
                setIsUpload(true)
            }
            reader.readAsDataURL(files)
        }
    }
    const onImgDragLeave = (e) => {
        e.preventDefault()
        setPreview({
            base64: "",
            size: ""
        })
    }
    const onImageDrop = (e) =>{
        e.preventDefault();
        console.log(e.dataTransfer.files);
        const file = e.dataTransfer.files[0]
        if(file) {
            const {size} = file
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview({
                    base64: reader.result,
                    size
                }) //set data from get the preview
                imageData({
                    base64: reader.result,
                    size
                }) //sent the file to parent comoponent as a function
                setIsUpload(true)
            }
            reader.readAsDataURL(file)
            
        }
    }
    return (
        <div>
            <form>
                <div className="form-group" >
                    <input type="file" className="form-control-file d-none" id="exampleFormControlFile1" onChange={(e) => imageUploaderHander(e)}/>
                    <label htmlFor="exampleFormControlFile1" className = {`${imageDragAndDropStyleSheet.draDropWrap} form-label `}>
                        {
                            isUpload 
                            ?
                            <div  
                            onDragOver = {(e) => onImgDragOver(e)}
                            onDragLeave = {(e) => onImgDragLeave(e)}
                            onDrop = {(e) => onImageDrop(e)} 
                            className = {`d-flex justify-content-center align-items-center ${imageDragAndDropStyleSheet.defaultDragAndDropDisplayPart}`}>
                                <div>
                                    <img src= {`${preview.base64}`} className = {`w-100`} alt="" style = {{height: "250px"}}/>
                                </div>
                            </div>
                            :
                             <div 
                                className= {`d-flex justify-content-center align-items-center ${imageDragAndDropStyleSheet.defaultDragAndDropDisplayPart}`}
                                onDragOver = {(e) => onImgDragOver(e)}
                                onDragLeave = {(e) => onImgDragLeave(e)}
                                onDrop = {(e) => onImageDrop(e)}>
                                    <div>
                                        <Icon
                                        name = "file image"
                                        size = "big"
                                        className = {`mb-2`}/>
                                        <p className = {`h6`}>Drag and Drop or CLick to upload picture</p>
                                    </div>
                            </div>
                        }
                    </label>
                </div>
            </form>
        </div>
    )
}

export default ImageDragAndDrop
