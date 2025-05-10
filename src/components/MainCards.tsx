import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";
// import { title } from "process";
import { Description } from "@radix-ui/react-dialog";

const MainCards = () => {
  const cards = [
    {
      title: "Discover Recipes",
      img: "/bake.jpeg",
      alt: "Bake",
      description: (
        <>
          From comforting classics to innovative creations, explore a treasure
          trove of{" "}
          {<span className="text-decoration">step-by-step recipes</span>}{" "}
          designed to delight.
        </>
      ),
      link: "/recipes",
      buttonText: "Go to Recipes ",
    },
    {
      title: "Expert Baking Tips",
      img: "/tips.jpeg",
      alt: "",
      description: (
        <>
          Unlock secrets to perfecting textures, flavors, and presentation with{" "}
          {<span className="text-decoration">pro tips and techniques</span>}{" "}
          straight from baking enthusiasts.
        </>
      ),
      link: "/recipes",
      buttonText: "Go to Baking Tips ",
    },
    {
      title: "Inspiring Blog Articles",
      img: "/blog.jpeg",
      alt: "",
      description: (
        <>
          Stay updated with the{" "}
          {
            <span className="text-decoration">
              latest trends, kitchen hacks, and behind-the-scenes stories
            </span>
          }{" "}
          that bring the magic of baking to life.
        </>
      ),
      link: "/posts",
      buttonText: "Go to Blog Articles ",
    },
  ];
  return (
    <div className="my-50 grid grid-flow-row grid-cols-1 xl:grid-cols-3 gap-8">
      {cards.map((card) => (
        <Card key={card.title} className="card cardHome !justify-between">
          <CardHeader>
            <CardTitle className="title">{card.title}</CardTitle>
          </CardHeader>
          <CardContent className="content">
            <div className="img-content">
              <Image
                className="img"
                src={card.img}
                alt={card.alt}
                width="350"
                height="0"
              />
            </div>
            <CardDescription className="description">
              {card.description}
            </CardDescription>
          </CardContent>
          <CardFooter className="content">
            <Link
              className="main-button flex justify-center align-center gap-3"
              href={card.link}
            >
              {card.buttonText}
              <ChevronsRight className="size-7" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MainCards;
