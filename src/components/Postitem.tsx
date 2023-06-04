"use client";
import ThumbIcon from "../assets/thumb icon.svg";
import Image from "next/image";
import Like from "../assets/like.svg";
import dislike1 from "../assets/unlike.svg";
import dislike2 from "../assets/unlike black.svg";
import { useRouter } from "next/navigation";

interface Post {
  title: string;
  content: string | null;
  id: string;
  Liked: boolean;
  dislike: boolean;
  updatedAt: Date;
  createdAt: Date;
  handleLike: (id: string) => void;
  handleDislike: (id: string) => void;
}
const TodoItem = ({
  id,
  title,
  content,
  Liked,
  dislike,
  handleLike,
  handleDislike,
}: Post) => {
  const router = useRouter();
  return (
    <div className="bg-white rounded-md py-6 px-8 lg:w-96 sm:w-96 text-start my-4 cursor-pointer shadow-xl hover:shadow-md lg:mx-10 sm:mx-5">
      <div className="border-b-2 border-black">
        <h2 className="font-bold text-center mb-3">{title}</h2>
      </div>
      <div className="mt-5">
        <p>{content}</p>
        <button
          className="text-white rounded-md mt-9 mb-0"
          onClick={() => {
            handleLike(id);
            return router.refresh();
          }}
        >
          {Liked ? (
            <Image src={Like} alt="Like" width={30} />
          ) : (
            <Image src={ThumbIcon} alt="Like" width={30} />
          )}
        </button>
        <button
          className="text-white rounded-md mt-5 mb-0 ml-5"
          onClick={() => {
            handleDislike(id);
            return router.refresh();
          }}
        >
          {!dislike || Liked ? (
            <Image src={dislike1} alt="Like" width={30} />
          ) : (
            <Image src={dislike2} alt="Like" width={30} />
          )}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
