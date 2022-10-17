import { faker } from "@faker-js/faker";

import { executeQuery, queries, mutations, Game } from "./graphql";

describe("Mutations", () => {
  test("should add a game", async () => {
    const prevGames = await executeQuery(queries.games);

    const supplierId = prevGames.games[0].supplier.id;

    const name = faker.name.fullName();

    const addedGame = await executeQuery(mutations.addGame, {
      input: {
        name,
        slug: faker.helpers.slugify(name),
        supplier: supplierId,
      },
    });

    const updatedGames = await executeQuery(queries.games);

    expect(updatedGames.games.length).toBe(prevGames.games.length + 1);

    updatedGames.games.forEach((game: Game) => {
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

    expect(updatedGames.games).toContainEqual(addedGame.addGame);
  });
});
