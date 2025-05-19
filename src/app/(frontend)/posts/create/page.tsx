import NewPostForm from "@/components/NewPostForm";
import { Title } from "@/components/Title";
import { redirect } from "next/navigation";

export default async function Page() {
  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1>Hello</h1>
    </main>
  );
}

// const Page = () => {
//   return (
//     <main className="">
//       <Title>Create New Post</Title>
//       <NewPostForm />
//     </main>
//   );
// };

// export default Page;
