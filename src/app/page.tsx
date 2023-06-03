import TodoItem from "@/components/TodoItem";
import Link from "next/link";
import prisma from "@/lib/db";
interface Post {
  title: string;
  content: string | null;
  id: string;
  Liked: boolean;
  updatedAt: Date;
  createdAt: Date;
}
const getTodo = async () => {
  return await prisma.post.findMany();
};
export default async function Home() {
  const data = await getTodo();
  const handleLike = async (id: string) => {
    "use server";
    const post = await prisma.post.findUnique({ where: { id } });
    if (post?.Liked) {
      await prisma.post.update({ where: { id }, data: { Liked: false } });
    } else {
      await prisma.post.update({ where: { id }, data: { Liked: true } });
    }
  };
  return (
    <main className="py-5 text-center mx-auto">
      <h1 className="text-2xl font-semibold my-3 text-orange-500">POSTS</h1>
      <Link href="/new" className="text-blue-500 font-semibold underline">
        Add Post
      </Link>
      <div className="flex flex-wrap justify-start my-10">
        {data.map((post: Post) => {
          return <TodoItem key={post.id} {...post} handleLike={handleLike} />;
        })}
      </div>
    </main>
  );
}
