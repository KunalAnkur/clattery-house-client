import Image from 'next/image'
import React from 'react'
import Profile from "../../assets/ProfilePhoto.jpg"
export function AboutMeContainer() {
  return (
    <main className='text-gray-700 p-5 xl:max-w-screen-xl xl:mx-auto gap-16 flex flex-col text-justify items-center lg:flex-row lg:items-start min-h-screen'>
          <Image className='h-[500px] w-fit -hue-rotate-15 object-cover' width={200} height={200} src={Profile} alt="" />

            <div className='w-full backdrop-blur-md leading-loose tracking-wider lg:h-[800px]'>
                  <p>Welcome to my blog! My name is Ankur Kunal and I am a passionate developer who loves to share my knowledge and experience with others.
                    
                      I have been working in the field of programming for several years and have a wealth of experience to share with my readers. My blog is dedicated to all things related to programming, including tips, tricks, and tutorials on various programming languages and frameworks.

                      I also share my thoughts and experiences on various other topics, such as work-life balance, mental health, and staying motivated as a developer. I want to create a community where developers can come together to share their experiences, knowledge, and support each other.

                      I believe that programming is not just about writing code but also about continuous learning, problem-solving, and personal growth. That's why in my blog, I will be sharing my journey as a developer, the challenges I have faced and the solutions I have found.

                      So, whether you're a beginner looking to learn the basics of programming, or an experienced developer looking for inspiration and new ideas, I hope you'll find something of value here.

                      Thank you for visiting my blog and I hope to see you around!

                      Feel free to reach out to me via contact form or social media links provided in the website, I will be happy to connect with you.</p>
            </div>
     
    </main>
  )
}
