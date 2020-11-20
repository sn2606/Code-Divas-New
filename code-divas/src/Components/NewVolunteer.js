import React from 'react';
import '../App.css';
import './NewVolunteer.css'

function NewVolunteer() {

    function handleClick(e) {
        e.preventDefault();
        alert("Your details are submitted successfully. Please be patient while the NGO's connect with you.");
      }

    return (
        <div class="login-wrap"> 
            <div class="login-html">
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">NGO Volunteering</label>
                <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Teaching</label>

                
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
                            <label for="user" class="label">Adhar Number</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <label for="user" class="label">Phone Number</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <label for="user" class="label">Working days</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <label for="user" class="label">Working Hours</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <label for="user" class="label">Work Experience (in years)</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <input type="submit" class="button" value="I'm in !!" />
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
                            <label for="pass" class="label">Adhar Number</label>
                            <input id="pass" type="text" class="input" required />
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Phone Number</label>
                            <input id="pass" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <label for="user" class="label">Working days</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <label for="user" class="label">Working Hours</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <label for="user" class="label">Work Experience (in years)</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <label for="user" class="label">Expertise</label>
                            <input id="user" type="text" class="input" required/>
                        </div>
                        <div class="group">
                            <input type="submit" class="button" value="I'm In !!"/>
                        </div>
                        <div class="hr"></div></form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default NewVolunteer; 
 