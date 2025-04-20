import NewPostForm from "@/components/NewPostForm";
import { Title } from "@/components/Title";
import { redirect } from "next/navigation";

const Page = async () => {
  return (
    <>
      <main className="container">
        <Title>Create New Post</Title>
        <NewPostForm />
      </main>
    </>
  );
};

export default Page;
