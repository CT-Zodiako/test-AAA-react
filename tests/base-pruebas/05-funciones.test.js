import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("pruebas 05 fucniones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();

    expect(user).toEqual(testUser);
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const name = "Cristian";

    // const testUser = {
    //   uid: "ABC567",
    //   username: name,
    // };

    const user = getUsuarioActivo(name);

    expect(user).toEqual({
        uid: "ABC567",
        username: name,
    });
  });
});
