"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(prevState, formData) {
  function isInvalidText(text) {
    return !meal.text || meal.text.trim() === "";
  }

  const meal = {
    title: formData.get("title"),
    creator: formData.get("name"),
    instructions: formData.get("instructions"),
    summary: formData.get("summary"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "Invalid Input" };
  }
  await saveMeal(meal);
  redirect("/meals");
}
