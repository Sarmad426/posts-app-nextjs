import prisma from "@/lib/db";
import Link from "next/link";
import { redirect } from "next/navigation";
const FormTodo = () => {
  const addTweet = async (event: FormData) => {
    "use server";
    const title = event.get("title")?.valueOf();
    const content = event.get("content")?.valueOf();
    if (typeof title === "string" && typeof content === "string") {
      await prisma.post.create({ data: { title, content, Liked: false } });
      redirect("/");
    } else {
      throw new Error("Cannot Create A New Post. Please Provide Valid Data");
    }
  };
  return (
    <div className="mx-4 text-center m-auto">
      <form action={addTweet}>
        <h1 className="text-lg font-semibold my-5">
          Add a New
          <span className=" font-bold tracking-wide mx-2">POST</span>
        </h1>
        <input
          type="text"
          placeholder="Title of the Post"
          name="title"
          className="block lg:w-1/2 lg:mx-auto rounded-md p-2 h-10 border-2 border-black w-full mx-auto my-6 focus:border-none focus:outline-purple-400"
          required
        />
        <textarea
          placeholder="What's happening?"
          className="lg:h-[12rem] py-5 lg:mx-auto lg:w-1/2 w-full h-[7rem] border-2 border-black rounded-lg px-3 focus:border-none focus:outline-orange-600"
          required
          name="content"
          maxLength={120}
        />
        <button
          type="submit"
          className="bg-blue-600 mx-auto block text-white rounded-3xl py-3 my-5 px-6 tracking-wider font-semibold hover:bg-blue-500 cursor-pointer"
        >
          Post
        </button>
        <Link href="/" className="text-blue-500 font-semibold underline my-12">
          View Posts
        </Link>
      </form>
    </div>
  );
};

export default FormTodo;
