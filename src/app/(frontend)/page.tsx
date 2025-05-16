import Link from "next/link";
import { Title } from "@/components/Title";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import MainCards from "@/components/MainCards";

export default async function Page() {
  return (
    <section className="wrap-container">
      <div className="flex flex-col justify-center ">
        <div className="flex justify-center w-full">
          <Image src="/home3.png" alt="BakePoint logo" width="100" height="0" />
        </div>
        <div className="flex flex-col mt-15 mb-10 md:mt-10 md:mb-5 ">
          <h1 className="welcome-title">Welcome to BakePoint</h1>
          <h2 className="welcome-title mt-5">Where passion meets pastries!</h2>
          <p className="xl:text-2xl lg:text-xl mt-10 description-text ">
            Dive into a world of delicious possibilities, where{" "}
            <span className="text-decoration">recipes</span>, expert{" "}
            <span className="text-decoration">tips</span>, and inspiring{" "}
            <span className="text-decoration">blog articles</span> come together
            to fuel your baking journey. Whether you're a seasoned baker or just
            starting out, BakePoint is your go-to destination for mastering the
            art of baking.
          </p>
        </div>
        <div className="flex justify-between">
          <Image src="/home2.png" alt="BakePoint logo" width="300" height="0" />
          <Image src="/home1.png" alt="BakePoint logo" width="300" height="0" />
        </div>
      </div>
      <div>
        <MainCards />
        <div className="flex flex-col items-center text-center justify-center mb-20 xl:mx-[30%] mx-[15%] gap-5">
          <Image src="/signin.png" alt="Bake" width="300" height="0" />
          <h1 className="text-4xl text-primary font-laobrige text-center">
            SIGN IN
          </h1>

          <p className="!text-2xl mt-10 description-text">
            Join our community, share your experiences, and turn simple
            ingredients into sweet masterpieces! Ready to whip up something
            amazing?
          </p>
          <Button className="main-button !text-4xl !p-8 !mt-10">
            Let’s get baking!
          </Button>
        </div>
      </div>
    </section>
  );
}
