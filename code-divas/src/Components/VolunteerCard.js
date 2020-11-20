import React from 'react';
import '../App.css';

import './VolunteerCard.css';

function VolunteerCard() {
    return (
        <div class="container">
            <center><p className="mt-10 text-black text-2xl"><h1>Volunteers for Teaching</h1></p></center>
            <div class="cards">
                <div class="card">
			        <span class="card-header" style={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdZSLT-61CU0giag1XifMYFhaCV_u7rHbsnw&usqp=CAU)"}}>
				        <span class="card-title">
					        <h3>Amrita Singh</h3>
				        </span>
			        </span>
			        <span class="card-summary">
				        Email: amritasin123@gmail.com <br /> <br />
                        PhNumber: +91-909045128 <br /> <br />
                        Working days: 4 <br /> <br />
                        Working hours: 6 <br /> <br />
                        Working experience: 3+ <br /> <br />
                        Expertise: Hindi <br /> <br />
			        </span>
		        </div>
                <div class="card">
			        <span class="card-header" style={{backgroundImage:"url(data:image/jpeg;base64,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)"}}>
				        <span class="card-title">
					        <h3>Kaustubh Dalmia</h3>
				        </span>
			        </span>
			        <span class="card-summary">
				        Email: Kaustubhsen@gmail.com <br /> <br />
                        PhNumber: +91-893216518 <br /><br />
                        Working days: 7 <br /><br />
                        Working hours: 2 <br /><br />
                        Working experience: 1 <br /><br />
                        Expertise: English <br /><br />
			        </span>
		        </div>
                <div class="card">
			        <span class="card-header" style={{backgroundImage:"url(data:image/jpeg;base64,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)"}}>
				        <span class="card-title">
					        <h3>Anshika</h3>
				        </span>
			        </span>
			        <span class="card-summary">
				        Email: anshika13@gmail.com <br /><br />
                        PhNumber: +91-95904888 <br /><br />
                        Working days: 2 <br /><br />
                        Working hours: 7 <br /><br />
                        Working experience: 8 <br /><br />
                        Expertise: Geography <br /><br />
			        </span>
		        </div>
                <div class="card">
			        <span class="card-header" style={{backgroundImage:"url(https://media-exp1.licdn.com/dms/image/C4E03AQENh1PJRCG2fg/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=Ii38Xkyy2czBITnNs7gcInxnlE7muYL7KP8Ts3slJT8)"}}>
				        <span class="card-title">
					        <h3>Swaranjana </h3>
				        </span>
			        </span>
			        <span class="card-summary">
				        Email: swaranjana12@gmail.com <br /><br />
                        PhNumber: +91-999044767 <br /><br />
                        Working days: 6 <br /><br />
                        Working hours: 3 <br /><br />
                        Working experience: 2 <br /><br />
                        Expertise: History <br /><br />
			        </span>
		        </div>
            </div>
            <hr />
            <center><p className="text-black text-2xl"><h1>Volunteers for Assissting NGOs</h1></p></center>
            <div class="cards">
                <div class="card">
			        <span class="card-header" style={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_TYyQwXo-faEFvsKb9MDnsou47BwjFkfqCw&usqp=CAU)"}}>
				        <span class="card-title">
					        <h3>Kaushiki</h3>
				        </span>
			        </span>
			        <span class="card-summary">
				        Email: kaushiki31@gmail.com <br /><br />
                        Contact Number: +91-908888128 <br /><br />
                        Working days: 3 <br /><br />
                        Working hours: 3 <br /><br />
                        Working experience: 5 <br /><br />
                        Expertise: Hindi <br /><br />
			        </span>
		        </div>
                <div class="card">
			        <span class="card-header" style={{backgroundImage:"url(https://nettv4u.com/imagine/11-02-2019/maansi.jpg)"}}>
				        <span class="card-title">
					        <h3>Maansi Singh</h3>
				        </span>
			        </span>
			        <span class="card-summary">
				        Email: mansisin@gmail.com <br /><br />
                        Contact Number: +91-888845128 <br /><br />
                        Working days: 2 <br /><br />
                        Working hours: 12 <br /><br />
                        Working experience: 10 <br /><br />
                        Expertise: English <br /><br />
			        </span>
		        </div>
            </div>
            <hr />
            <center><h1 className="text-black text-2xl">Interested in Volunteering? <br /></h1><h3 className="mb-7 text-black text-lg">Send us your details and get READY..!!</h3></center>
        </div>
    )
}

export default VolunteerCard
 