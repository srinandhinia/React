"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

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
  revalidatePath("/meals");
  // During build process, all the static pages are pre-rendered. And due to caching, the new meal which is added wont be reflected.
  // So with this revalidatePath(), the page mentioned will be re-rendered and thus new meal reflects.
  redirect("/meals");
}
