import { executeQuery, Game, queries } from "./graphql";
import {faker} from "@faker-js/faker";

describe("Queries", () => {
  test("should get games", async () => {
    const data = await executeQuery(queries.games);

    data.games.forEach((game: Game) => {
      expect(game).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
        slug: expect.any(String),
        supplier: {
          id: expect.any(Number),
          name: expect.any(String),
        },
      });
    });
  });

  test("should get supplier", async () => {
    const data = await executeQuery(queries.suppliers);
    console.log(data)

    data.suppliers.forEach((game: Game) => {
      expect(game).toMatchObject({
        id: expect.any(Number),
        name: expect.any(String),
      });
    });
  });

  const slug = "lucky-pots";


  test("should get slug", async () => {
    const data = await executeQuery(queries.gameBySlug,{
      "slug": slug
    })
    console.log(data)
    expect(data.gameBySlug).toMatchObject({
      id: 2,
      name: "Lucky Pots",
    });
  });
});
