import React from 'react'
import '../Components/Signup.css'

function Signup() {
    function handleClick(e) {
        e.preventDefault();
        alert("You have successfully registered yourself");
      }

    return (
        <div class="login-wrap"> 
            <div class="login-html">
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">NGO/SHG</label>
                <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Individual</label>

                
                <div class="login-form"><form onSubmit={handleClick}> 
                    <div class="sign-in-htm">
                        <div class="group">
                            <label for="user" class="label">Name</label>
                            <input id="user" type="text" class="input" required />
                        </div>
                        <div class="group">
                            <label for="user" class="label">Email</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <label for="user" class="label">Username</label>
                            <input id="user" type="text" class="input" required/>
                        </div><div class="group">
                            <label for="user" class="label">Password</label>
                            <input id="user" type="password" class="input" required/>
                        </div>
                        <div class="group">
                            <label for="user" class="label">Phone Number</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        
                        <div class="group">
                            <label for="user" class="label">Location</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <input type="submit" class="button" value="Sign Up" />
                        </div>
                        <div class="hr"></div>
                    </div>
                    </form>
                    <div class="sign-up-htm"><form onSubmit={handleClick}>
                        <div class="group">
                            <label for="user" class="label">Name</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <label for="user" class="label">Email</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Username</label>
                            <input id="pass" type="text" class="input" required />
                        </div>
                        <div class="group">
                            <label for="user" class="label">Password</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Phone Number</label>
                            <input id="pass" type="text" class="input" required/>
                        </div>
                        
                        <div class="group">
                            <label for="user" class="label">Expertise</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <input type="submit" class="button" value="Sign Up"/>
                        </div>
                        <div class="hr"></div></form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Signup
