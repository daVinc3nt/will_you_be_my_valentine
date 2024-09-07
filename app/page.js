"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Đừng màaa :(",
      "Cậu chắc chưaaa?",
      "Hay để mình chân thật hơn nhá:(",
      "Năn nỉ nhiều nhiều",
      "Mời cậu ăn chô li bi thì sao?",
      "Hay hay là tặng hoa nhá",
      "PLEASE POOKIE",
      "Nhưng tớ tốt với cậu màa...",
      "Trái tym tan nát...",
      "Hoi mà",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! Tớ thích cậu nhiều lắm đoá ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Mình làm người yêu nhau nhé!</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Ỏkee
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Không có cửa" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
