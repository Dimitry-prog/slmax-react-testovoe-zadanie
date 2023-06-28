'use client'
import { ChangeEvent, FormEvent, useState } from "react";
import { addProduct } from "@/services/products";
import { getRandomInt } from "@/services/getRandomInt";

export default function AddProduct() {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addProduct({
      id: getRandomInt(0, 100000000).toString(),
      text: value
    });
    setValue('');
  }

  return (
    <div className="p-12 flex flex-col gap-4 items-center justify-between">
      <h2>ADD PRODUCTS</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-2 items-center"
      >
        <input
          onChange={handleChange}
          value={value || ''}
          name='product'
          type="text"
          placeholder='Enter some text'
          className="bg-transparent border-none outline-none"
        />
        <button
          type='submit'
          aria-label='submit form'
          className="w-fit"
        >
          Create
        </button>
      </form>
    </div>
  )
}
