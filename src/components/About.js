import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function About() {
  return (
    <div id="about">
      <header className="text-white h-48 flex flex-col items-center">
        <Navbar />

        {/* divider  */}
        <div className="divider w-full h-0.5 bg-gray-500" />
        {/* bg  */}
        <h1 className="heading-font text-6xl m-6">The Generics</h1>
      </header>

      {/* about  */}
      <section id="about-section" className="flex flex-col items-center my-5">
        <h1 className="heading-font text-6xl m-6">about</h1>
        <div className="about-container w-5/6 lg:w-4/6 xl:w-1/2">
          <img
            src="images/band-members.png"
            alt=""
            className="rounded-full w-36 block mx-auto sm:float-left sm:m-3"
          />
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            suscipit similique distinctio? Fugit libero perspiciatis accusamus
            unde! Modi iusto est ipsam soluta voluptatem repudiandae eveniet
            sunt esse nisi amet fuga consectetur provident alias, totam tempora!
            Cum nesciunt quisquam fugiat officiis delectus harum officia dolor
            ullam. Nemo eveniet debitis minus corrupti incidunt ad dolorem
            reiciendis perferendis molestiae neque accusantium, blanditiis
            maiores laboriosam voluptatem iure animi ab sapiente praesentium.
            Corrupti sed soluta, suscipit voluptas expedita autem maxime
            cupiditate temporibus, perferendis, dicta iusto! Nesciunt officia
            commodi eum odio ratione deleniti eligendi, quidem voluptate,
            laboriosam eius est sapiente aliquam. Tempore laudantium dolor
            architecto quibusdam.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            saepe itaque, nostrum sint excepturi tempora mollitia doloremque,
            inventore distinctio quibusdam eveniet tempore numquam
            necessitatibus possimus. Minima hic in ipsum aspernatur unde eos
            harum ullam distinctio soluta, a vel minus eligendi quibusdam vero
            amet delectus tempore inventore enim, dignissimos modi. Culpa.
          </p>
        </div>
      </section>

      {/* footer  */}
      <Footer />
    </div>
  );
}
