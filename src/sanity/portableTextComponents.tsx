import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

export const components: PortableTextComponents = {
  types: {
    image: (props) =>
      props.value ? (
        <Image
          className="rounded-lg not-prose w-full h-auto"
          src={urlFor(props.value)
            .width(600)
            .height(400)
            .quality(80)
            .auto("format")
            .url()}
          alt={props?.value?.alt || ""}
          width="600"
          height="400"
        />
      ) : null,
  },
  // then we define how the annotations should be rendered
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} target="_blank" rel={rel}>
          {children}
        </a>
      );
    },
    internalLink: ({ children, value }) => {
      return <a href={value.href}>{children}</a>;
    },
  },
  block: {
    normal: ({ children }) => {
      // Convert children to a string safely
      const textContent = Array.isArray(children)
        ? children.join("")
        : String(children);

      // Check if it contains only a space
      const isEmptyLine = textContent.trim() === "";

      return isEmptyLine ? (
        <br />
      ) : (
        <p className="text-base text-gray-700 leading-relaxed !m-0">
          {children}
        </p>
      );
    },
    h1: ({ children }) => {
      // Convert children to a string safely
      const textContent = Array.isArray(children)
        ? children.join("")
        : String(children);

      // Check if it contains only a space
      const isEmptyLine = textContent.trim() === "";

      return isEmptyLine ? <br /> : <h1 className="ptxt-h1">{children}</h1>;
    },
    h2: ({ children }) => {
      // Convert children to a string safely
      const textContent = Array.isArray(children)
        ? children.join("")
        : String(children);

      // Check if it contains only a space
      const isEmptyLine = textContent.trim() === "";

      return isEmptyLine ? <br /> : <h2 className="ptxt-h2">{children}</h2>;
    },
    h3: ({ children }) => {
      // Convert children to a string safely
      const textContent = Array.isArray(children)
        ? children.join("")
        : String(children);

      // Check if it contains only a space
      const isEmptyLine = textContent.trim() === "";

      return isEmptyLine ? <br /> : <h3 className="ptxt-h3">{children}</h3>;
    },
    blockquote: ({ children }) => {
      return <blockquote className="ptxt-quote">{children}</blockquote>;
    },
  },
};
