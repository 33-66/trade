import React from 'react'

function Home() {
  return (
    <div>
   <h1 style={{padding:"20px"}}><em>Online Market</em></h1>
   <section style={{ display: 'flex', alignItems: 'center' }}>
    <figure style={{marginRight:"20px"}}>
      <img
      style={{
        width:"650",
        height:"650px"
      }} 
      src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       alt="try again" />
       
    </figure >
  
    <div>
      <h1>Welcome</h1>
      <strong><p>
      Welcome to our online market! We provide a seamless platform that empowers individuals and businesses alike to showcase and sell their products effortlessly. Our user-friendly interface allows sellers to create listings showcasing their unique items, reaching a broad audience of potential buyers. At the same time, buyers can explore a vast array of offerings, compare options, and make purchases securely from the comfort of their homes. With our secure transaction system and reliable shipping services, we ensure a convenient and trustworthy shopping experience for everyone. Join us today to discover the convenience of buying and selling on our online market!

        
        </p></strong>
    </div>
   </section>

    </div>
  )
}

export default Home