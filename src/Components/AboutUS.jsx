import {Text} from '@chakra-ui/react'
import React from 'react';
const AboutUs = () => {
  return (
    <div>
      <section
        style={{
          margin: 'auto',
          marginTop: '-50px',
          width: '110%',
          height: '120vh',
          // backgroundImage:'url("https://media.istockphoto.com/id/526845820/photo/tokyo-tower-night-view.jpg?s=612x612&w=0&k=20&c=mm3hbBKG7i72YYQE-UsRqxMNJNrfTQfn4Ngf06fCNTw=")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'blur(10px)',
          position: 'fixed',
          zIndex: '-2',
        }}
        className="background"
      ></section>

      <section className="main_heading my-5">
        <div className="text-center">
        <Text fontWeight="bold" mb={4} color="teal.500" fontFamily="cursive" fontSize="60px" p={"20px"}> 
       About Us   
        </Text>
          <hr className="w-25 mx-auto" />
        </div>
      </section>
      <div style={{display:"flex" , textAlign: 'justify', gap:"50px", margin:"50px" }} backgroundImage={'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://img.freepik.com/free-vector/watercolor-mint-background_23-2150241023.jpg")'} >
        <img src="https://code-symphony.netlify.app/public/front-view-beautiful-young-businesswoman-black-jacket-blue-shirt-observing-little-globe-smiling-front-table-business-job-office.jpg" alt="..." style={{width:"600px" , height:"300px" , borderRadius:"20px"}}/>
        <div>
            <h1 style={{color:"black",  fontSize:"50px", fontWeight:"bolder"}}>Our Goal</h1>
            <p style={{color:"black"}}>
                <br />
                Welcome to Bon Voyage, where we turn your travel dreams
              into reality. Our passion for exploration and adventure has
              inspired us to create a platform that caters to the wanderlust in
              you. At Bon Voyage, we believe that every journey is a
              story waiting to be told. Whether you're an avid traveler seeking
              new horizons or someone planning their first escape, we are here
              to make your travel experiences seamless and unforgettable.

            </p>
        </div>
      </div>

     

      <div style={{display:"flex" , textAlign: 'justify', gap:"50px", margin:"50px"}}>
      <div>
            <h1 style={{color:"black", fontSize:"50px", fontWeight:"bolder"}}>Our Journey</h1>
            <p style={{color:"black"}}>
                <br />
                Our team is comprised of seasoned travelers, travel enthusiasts,
              and experts in the field who are dedicated to curating exceptional
              travel experiences. From exotic destinations to
              off-the-beaten-path gems, we strive to provide you with a diverse
              array of options. Discover the world with confidence, knowing that
              Bon Voyage is with you every step of the way. Join us on
              this exciting journey, and let's create memories that will last a
              lifetime.

            </p>
        </div>
        <img src="https://code-symphony.netlify.app/public/i-am-here-help-you-with-your-booking-travel-questions-female-sales-agent-holding-plane-tickets-while-smiling-making-eye-contact-travel-agency.jpg" alt="..." style={{width:"600px" , height:"300px", borderRadius:"20px"}}/>
      </div>

      {/* Frequently Asked Questions Section */}
      <section className="faq" style={{ margin: '5%', color: 'black',textAlign:'left' }}>
        <h2 style={{ textAlign: 'center', fontSize:"50px", fontFamily:"bolder" }}>Frequently Asked Questions (FAQs)</h2>
        <hr />
        <ul>
          <p>
            <strong>Q: How do I book a trip?</strong>
          </p>
          <p>
            <strong>A:</strong> You can easily book a trip through our website
            by following the simple booking process.
          </p>
           <br />
          <p><strong>Q: Are there group discounts available?</strong> </p>
                <p><strong>A:</strong> Yes, we offer group discounts for certain travel packages. Contact our support for more details.</p>
                <br />
                <p><strong>Q: What payment methods do we accept?</strong></p>
                <p><strong>A:</strong>We accept major credit cards, including Visa, MasterCard, and American Express. Additionally, some
                    destinations may offer alternative payment methods</p>
                    <br />
                <p><strong>Q: What is the cancellation policy?</strong> </p>
                <p><strong>A:</strong> Our cancellation policy varies based on the type of trip. Check our terms and conditions for detailed information.</p>
                <br />
                <p><strong>Q: Can I make changes to my booking after it's confirmed?</strong></p>
                <p><strong>A:</strong> Yes, you can make certain modifications to your booking. Please log in to your account or contact
                    our customer support for assistance.</p>
                    <br />
                <p><strong>Q:  How can I contact customer support?</strong></p>
                <p><strong>A:</strong> You can reach our customer support team through the contact information provided on our website.</p>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;