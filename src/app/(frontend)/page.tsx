import Link from "next/link";
import { Title } from "@/components/Title";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";

export default async function Page() {
  return (
    <section className="">
      <div className="flex flex-col justify-center mt-[200px] mx-[10%]">
        <div className="flex justify-center w-full">
          <Image
            // className="rounded-4xl shadow-2xl"
            src="/home3.png"
            alt="BakePoint logo"
            width="100"
            height="0"
          />
        </div>
        <div className="flex flex-col mt-15 mb-10 md:mt-10 md:mb-5 2xl:mx-50 xl:mx-30 lg:mx-15 mx-5">
          {/* right-0 top-[10%] w-full h-full p-[15%] */}
          <h1 className="xl:text-4xl lg:text-2xl text-xl text-primary font-laobrige text-center">
            Welcome to BakePoint
          </h1>
          <h2 className="xl:text-4xl lg:text-2xl text-xl text-primary font-laobrige mt-5 text-center">
            Where passion meets pastries!
          </h2>
          <p className="xl:text-2xl lg:text-xl text-lg mt-10 text-black/60 text-center">
            Dive into a world of delicious possibilities, where{" "}
            <span className="underline decoration-primary">recipes</span>,
            expert <span className="underline decoration-primary">tips</span>,
            and inspiring{" "}
            <span className="underline decoration-primary">blog articles</span>{" "}
            come together to fuel your baking journey. Whether you're a seasoned
            baker or just starting out, BakePoint is your go-to destination for
            mastering the art of baking.
          </p>
        </div>
        <div className="flex justify-between">
          <Image
            // className="rounded-4xl shadow-2xl"
            src="/home2.png"
            alt="BakePoint logo"
            width="300"
            height="0"
          />
          <Image
            // className="rounded-4xl shadow-2xl"
            src="/home1.png"
            alt="BakePoint logo"
            width="300"
            height="0"
          />
        </div>
        {/* <div className="relative">
          
         
        </div> */}
      </div>
      <div>
        <div className="my-50 flex xl:px-[10%] px-[20%] xl:flex-row flex-col gap-10">
          <Card className="card cardHome">
            <CardHeader>
              <CardTitle className="title">Discover Recipes</CardTitle>
            </CardHeader>
            <CardContent className="content">
              <div className="img-content">
                <Image
                  className="img"
                  src="/bake.jpeg"
                  alt="Bake"
                  width="350"
                  height="0"
                />
                {/* <Image
                  className="w-full xl:aspect-[350/350] sm:aspect-[300/150] object-cover"
                  src="/tips.jpeg"
                  alt="alt"
                  width="300"
                  height="300"
                /> */}
                {/* <img
                  className="rounded-xl w-[500px] xl:w-[350px]"
                  src="/tips.jpeg"
                  alt="Bake"
                /> */}
                {/* <Image
                  className="rounded-xl object-cover aspect-[4/3]"
                  src="/tips.jpeg"
                  alt="Bake"
                  width={600}
                  height={350}
                /> */}
              </div>
              <CardDescription className="description">
                From comforting classics to innovative creations, explore a
                treasure trove of{" "}
                <span className="underline decoration-primary">
                  step-by-step recipes
                </span>{" "}
                designed to delight.
              </CardDescription>
            </CardContent>
            <CardFooter className="content">
              <Link
                className="button flex justify-center align-center gap-3"
                href="/recipes"
              >
                Go to Recipes <ChevronsRight className="size-7" />
              </Link>
            </CardFooter>
          </Card>
          <Card className="card cardHome">
            <CardHeader>
              <CardTitle className="title">Expert Baking Tips</CardTitle>
            </CardHeader>
            <CardContent className="content">
              <div className="img-content">
                <Image
                  className="img"
                  src="/tips.jpeg"
                  alt="Bake"
                  width="350"
                  height="0"
                />
              </div>
              <CardDescription className="description">
                Unlock secrets to perfecting textures, flavors, and presentation
                with{" "}
                <span className="underline decoration-primary">
                  pro tips and techniques
                </span>{" "}
                straight from baking enthusiasts.
              </CardDescription>
            </CardContent>
            <CardFooter className="content">
              <Link
                className="button flex justify-center align-center gap-3"
                href="/recipes"
              >
                Go to Baking Tips <ChevronsRight className="size-7" />
              </Link>
            </CardFooter>
          </Card>
          <Card className="card cardHome">
            <CardHeader>
              <CardTitle className="title">Inspiring Blog Articles</CardTitle>
            </CardHeader>
            <CardContent className="content">
              <div className="img-content">
                <Image
                  className="img"
                  src="/blog.jpeg"
                  alt="Bake"
                  width="350"
                  height="0"
                />
              </div>
              <CardDescription className="description">
                Stay updated with the{" "}
                <span className="underline decoration-primary">
                  latest trends, kitchen hacks, and behind-the-scenes stories
                </span>{" "}
                that bring the magic of baking to life.
              </CardDescription>
            </CardContent>
            <CardFooter className="content">
              <Link
                className="button flex justify-center align-center gap-3"
                href="/posts"
              >
                Go to Blog Articles <ChevronsRight className="size-7" />
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col items-center text-center justify-center mb-25 xl:mx-[30%] mx-[15%] gap-5">
          <Image
            // className="rounded-xl"
            src="/signin.png"
            alt="Bake"
            width="300"
            height="0"
          />
          <h1 className="text-4xl text-primary font-laobrige text-center">
            SIGN IN
          </h1>

          <p className="text-2xl mt-10 text-black/60 text-center">
            Join our community, share your experiences, and turn simple
            ingredients into sweet masterpieces! Ready to whip up something
            amazing?
          </p>
          <Button className="text-4xl rounded-full p-8 bg-primary text-white-bg mt-10">
            Let’s get baking!
          </Button>
        </div>
      </div>
      {/* mx-auto grid grid-cols-1 gap-6 p-12 */}
      {/* <Title>Layer Caker Home Page</Title>
      <hr />
      <Link href="/posts">Posts index &rarr;</Link> */}
    </section>
  );
}
