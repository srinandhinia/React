import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //   wantedly created delay above

  // throw new Error("Failed to load meals...");

  // db.prepare("DELETE FROM meals WHERE title = ?").run("Chicken Biryani");
  return db.prepare("SELECT * from meals").all();
}

export function getMealDetails(slug) {
  return db.prepare("SELECT * from meals where slug=?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const ImageExtension = meal.image.name.split(".").pop();

  const fileName = `${meal.slug}.${ImageExtension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);

  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals (title, creator, creator_email, summary, instructions, slug, image)
    VALUES(@title, 
      @creator, 
      @creator_email, 
      @summary, 
      @instructions, 
      @slug, 
      @image) `
  ).run(meal);
}
