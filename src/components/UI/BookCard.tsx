import { useNavigate } from "react-router-dom";

type BookCardType = {
  categories: string[];
  author: string[];
  bookTitle: string;
  bookImg: string;
  id: string;
};

const BookCard = ({
  categories,
  author,
  bookTitle,
  bookImg,
  id,
}: BookCardType) => {
  const navigate = useNavigate();

  const truncateText = (text: string, maxWords: number): string => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  const truncatedBookTitle = truncateText(bookTitle, 5);

  return (
    <div
      className="border bg-stone-200 w-60 px-2 py-2 h-96 overflow-hidden hover:bg-gray-300 transition-all cursor-pointer"
      onClick={() => navigate(`/book/${id}`)}
    >
      <img
        src={bookImg}
        alt={bookTitle}
        className="my-6 w-36 h-44 mx-auto overflow-hidden text-ellipsis whitespace-nowrap shadow-xl"
      />
      <p className="text-gray-400 underline mb-2">{categories}</p>
      <p className="font-bold">{truncatedBookTitle}</p>
      <p className="text-gray-400">{author?.join()}</p>
    </div>
  );
};

export default BookCard;
