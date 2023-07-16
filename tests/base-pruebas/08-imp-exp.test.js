import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroeById debe retornar undefine si el id no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar un arreglo con los heros de dc", () => {
    const heroesDc = "DC";
    const hero = getHeroesByOwner(heroesDc);

    const res = [
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ];
    expect(hero).toEqual(res);

    expect(hero).toEqual(heroes.filter((heroe) => heroe.owner === heroesDc));
  });

  test("getHeroesByOwner debe retornar un arreglo con loes heros de Marvel", () => {
    const heroesMarvel = "Marvel";
    const hero = getHeroesByOwner(heroesMarvel);

    expect(hero.length).toEqual(2);
  });
});
