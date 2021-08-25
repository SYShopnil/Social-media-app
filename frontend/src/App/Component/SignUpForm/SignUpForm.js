import React, {useEffect, useState} from 'react'
import {Icon, Loader} from 'semantic-ui-react'
import signInStyleSheet  from './SignInForm.module.css'
import axios from 'axios'
import ImageDragAndDrop from '../../../utils/ImageDragAndDrop/ImageDragAndDrop'

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [checkUserName, setCheckUserName] = useState(false)
    const [isValidUserName, setIsValidUserName] = useState(false)
    const [userName, setUserName] = useState("")
    const [showSocial, setShowSocial] = useState(false)


    const userNameHandler = (e) => {
        e.preventDefault();
        setUserName(e.target.value)
        setCheckUserName(true)
    }
    //image data handler
    const imageDataHandler = (data) => {
        console.log(`hello`)
    }
    //check the user name is available or not 
    useEffect(() => {
       return (async () => {
            try {
                const regex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,10}$/;
                const getData = await axios.get('https://jsonplaceholder.typicode.com/posts')
                if(regex.test(userName) && getData.data){
                    console.log(`valid`);
                    setCheckUserName(false);
                    setIsValidUserName(true)
                }else {
                    console.log(`not valid`);
                    setCheckUserName(false);
                    setIsValidUserName(false)
                }
            }catch (e) {
                setCheckUserName(false);
                setIsValidUserName(false)
            }
       })()
    },[userName])
    console.log(userName);
    return (
        <div>
            <form>
                {/* profilePicturePart */}
                <ImageDragAndDrop imageData = {imageDataHandler}/>
                 {/* name */}
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name *</label>
                    <div>
                       <div className= {`input-group mb-3 ${signInStyleSheet.inputGroup} `}>
                            <div class= {`input-group-prepend `}>
                                <Icon
                                name = {`user`}
                                size = {`large`}
                                />
                            </div>
                            <input 
                            type="text" 
                            className= {`form-control ${signInStyleSheet.inputWrap}`} 
                            placeholder="Name" 
                            aria-label="name" 
                            name = "name"
                            aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>

                {/* email */}
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email *</label>
                    <div>
                       <div className= {`input-group mb-3 ${signInStyleSheet.inputGroup} `}>
                            <div class= {`input-group-prepend `}>
                                <Icon
                                name = {`mail`}
                                size = {`large`}/>
                            </div>
                            <input 
                            type="email" 
                            className= {`form-control ${signInStyleSheet.inputWrap}`} 
                            placeholder="Email" 
                            aria-label="email" 
                            name = "email"
                            aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>

                {/* password */}
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Password *</label>
                    <div>
                       <div className= {`input-group mb-3 ${signInStyleSheet.inputGroup} `}>
                            <div class= {`input-group-prepend `}>
                                <Icon
                                name = {`${showPassword ? 'eye slash outline' : 'eye'}`}
                                size = {`large`}
                                link
                                onClick = {(e) => setShowPassword(!showPassword)}/>
                            </div>
                            <input 
                            type={`${showPassword ? 'text' : 'password'}`} 
                            className= {`form-control ${signInStyleSheet.inputWrap}`} 
                            placeholder="Password" 
                            aria-label="password" 
                            name = "password"
                            aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                
                 {/* userName */}
                 <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">User Name *</label>
                    <div>
                       <div className= {`input-group mb-3 ${signInStyleSheet.inputGroup} `}>
                            <div class= {`input-group-prepend `}>
                                {
                                    checkUserName
                                    ?
                                    <Loader
                                    active
                                    inline
                                    size = 'small'/>
                                    :
                                    <>
                                        {
                                            isValidUserName 
                                            ?
                                             <Icon
                                            name = {`check`}
                                            size = {`large`}
                                            color = {`green`} />
                                            :
                                            <Icon
                                            name = {`x`} 
                                            size = {`large`}
                                            color = {`red`}/>
                                        }
                                    </>
                                }
                            </div>
                            <input 
                            type="text" 
                            className= {`form-control ${signInStyleSheet.inputWrap}`} 
                            placeholder="User Name" 
                            aria-label="text" 
                            name = "userName"
                            aria-describedby="basic-addon1"
                            value = {userName}
                            onChange={(e) => userNameHandler(e)}/>
                        </div>
                    </div>
                </div>
                
                {/* bio */}
                <div class="mb-3">
                    <div>
                        <div class="form-group">
                            <label for="exampleInputEmail1" className="form-label">Bio *</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                </div>

                {/* add more social media */}
                <button className = {`btn btn-danger  mb-2 `} onClick = {(e) => {e.preventDefault(); setShowSocial(!showSocial)}}>@ Add Social media</button>
                 <br />

                {/* social media part */}
                {
                    showSocial
                    &&
                    <div>
                        {/* facebook */}
                        <div className="form-group  mb-2 ">
                            <label for="exampleInputEmail1">Facebook</label>
                            <input
                            type="text" 
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="@Facebook"
                            name = "facebook"/>
                        </div>

                        {/* twitter */}
                        <div className="form-group  mb-2 ">
                            <label for="exampleInputEmail1">Twitter</label>
                            <input
                            type="text" 
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="@Twitter"
                            name = "twitter"/>
                        </div>

                        {/* Instagram */}
                        <div className="form-group mb-2">
                            <label for="exampleInputEmail1">Instagram</label>
                            <input
                            type="text" 
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="@Instagram"
                            name = "instagram"/>
                        </div>

                        {/* Youtube */}
                        <div className="form-group mb-2">
                            <label for="exampleInputEmail1">Youtube</label>
                            <input
                            type="text" 
                            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="@Youtube"
                            name = "youtube"/>
                        </div>
                    </div>
                }
               

                {/* submit button */}
                <button 
                type="submit" 
                className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm
