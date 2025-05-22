import { useState } from "react";
import { useStore } from "../Store/store";

const ExpanseTraker = () => {
  const { expanse, addExpanse, removeExpanse } = useStore();
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");

  const handelAddExpanse = () => {
    if (description.trim() === "" || amount === "") {
      return;
    }
    addExpanse({
      id: Date.now(),
      description: description,
      amount: +amount,
    });
    setDescription("");
    setAmount("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="max-w-lg p-8 rounded-lg w-full shadow-xl bg-white">
        <h2 className="text-2xl text-center font-extrabold text-purple-700 mb-6">
          Expanses Traker
        </h2>
        <div className="space-y-4 mb-6">
          <input
            type="text"
            className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
            placeholder="Expanse Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
            placeholder="Expanse Amount"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value === "" ? "" : parseFloat(e.target.value))
            }
          />
          <button
            onClick={handelAddExpanse}
            className="bg-purple-600 text-white cursor-pointer w-full px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Add Expanse
          </button>
        </div>
        <ul className="mb-6 space-y-4">
          {expanse.map((expanse) => (
            <li
              key={expanse.id}
              className="flex justify-between px-4 py-2 items-center bg-purple-100 rounded-lg shadow-sm transition-transform transform hover:scale-105"
            >
              <span className="text-gray-800 font-semibold">
                {expanse.description}:{" "}
                <span className="text-purple-600">
                  ${expanse.amount.toFixed(2)}
                </span>
              </span>
              <button
                className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded-lg shadow-md hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() => removeExpanse(expanse.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-purple-700">
            Total Expenses:{" "}
            <span>
              <span className="text-purple-600">
                $
                {expanse
                  .reduce((total, expense) => total + expense.amount, 0)
                  .toFixed(2)}
              </span>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ExpanseTraker;
