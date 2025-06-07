import NewPostForm from "@/components/NewPostForm";

export default async function Page() {
  return (
    <section className="wrap-container flex flex-row !bg-red-500 max-h-[80vh]">
      {/* overflow-y-visible sm:max-w-lg flex !w-full pink-container !max-w-full !max-h-full !p-0 !m-0*/}

      <img
        className="size-full object-cover w-md rounded-l-lg"
        src="../newpost.jpeg"
        alt={"Newspaper with pastries"}
        width={512}
        height={96}
      />
      <div className="flex flex-col gap-0  p-0 w-full !bg-green-500">
        {/* [&>button:last-child]:top-3.5 w-full overflow-y-auto max-h-full */}
        {/* <DialogHeader className="contents space-y-0 text-left"> */}
        <h1 className=" px-6 py-4 mt-4 text-2xl font-font text-text">
          Create New Post
        </h1>
        {/* </DialogHeader> */}
        {/* <DialogDescription className="sr-only">
            Make changes to your profile here. You can change your photo and set
            a username.
          </DialogDescription> */}
        <NewPostForm />
        {/* <DialogFooter className="px-6 py-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button">Save changes</Button>
            </DialogClose>
          </DialogFooter> */}
      </div>
    </section>
  );
}
