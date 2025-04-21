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

export default async function Page() {
  return (
    <section className="">
      <div className="flex justify-center mt-[200px] mx-50">
        <div className="relative">
          <div className="relative">
            <Image
              // className="rounded-4xl shadow-2xl"
              src="/home.svg"
              alt="BakePoint logo"
              width="1400"
              height="0"
            />
          </div>
          <div className="absolute right-0 top-25 w-full h-full p-50">
            <h1 className="text-4xl text-primary font-laobrige text-center">
              Welcome to BakePoint
            </h1>
            <h2 className="text-4xl text-primary font-laobrige mt-5 text-center">
              Where passion meets pastries!
            </h2>
            <p className="text-2xl mt-10 text-black/60 text-center">
              Dive into a world of delicious possibilities, where{" "}
              <span className="underline decoration-primary">recipes</span>,
              expert <span className="underline decoration-primary">tips</span>,
              and inspiring{" "}
              <span className="underline decoration-primary">
                blog articles
              </span>{" "}
              come together to fuel your baking journey. Whether you're a
              seasoned baker or just starting out, BakePoint is your go-to
              destination for mastering the art of baking.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="m-50 flex gap-15">
          <Card className="card">
            <CardHeader>
              <CardTitle className="text-xl text-primary font-laobrige text-center">
                Discover Recipes
              </CardTitle>
            </CardHeader>
            <CardContent className="content">
              <Image
                className="rounded-xl"
                src="/bake.jpeg"
                alt="Bake"
                width="350"
                height="0"
              />
            </CardContent>
            <CardFooter>
              <CardDescription className="text-xl mt-2 text-black/60 text-center">
                From comforting classics to innovative creations, explore a
                treasure trove of{" "}
                <span className="underline decoration-primary">
                  step-by-step recipes
                </span>{" "}
                designed to delight.
              </CardDescription>
            </CardFooter>
          </Card>
          <Card className="card">
            <CardHeader>
              <CardTitle className="text-xl text-primary font-laobrige text-center">
                Expert Baking Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="content">
              <Image
                className="rounded-xl"
                src="/tips.jpeg"
                alt="Bake"
                width="350"
                height="0"
              />
            </CardContent>
            <CardFooter>
              <CardDescription className="text-xl mt-2 text-black/60 text-center">
                Unlock secrets to perfecting textures, flavors, and presentation
                with{" "}
                <span className="underline decoration-primary">
                  pro tips and techniques
                </span>{" "}
                straight from baking enthusiasts.
              </CardDescription>
            </CardFooter>
          </Card>
          <Card className="card">
            <CardHeader>
              <CardTitle className="text-xl text-primary font-laobrige text-center">
                Inspiring Blog Articles
              </CardTitle>
            </CardHeader>
            <CardContent className="content">
              <Image
                className="rounded-xl"
                src="/blog.jpeg"
                alt="Bake"
                width="350"
                height="0"
              />
            </CardContent>
            <CardFooter>
              <CardDescription className="text-xl mt-2 text-black/60 text-center">
                Stay updated with the{" "}
                <span className="underline decoration-primary">
                  latest trends, kitchen hacks, and behind-the-scenes stories
                </span>{" "}
                that bring the magic of baking to life.
              </CardDescription>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col items-center text-center justify-center mb-25 mx-100 gap-5">
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
          <Button className="text-4xl rounded-full p-8 bg-primary text-primary-100 mt-10">
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
