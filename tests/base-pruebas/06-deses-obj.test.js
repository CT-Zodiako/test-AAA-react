import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("test de 06-des-obj", () => {
  test("usContext debe retornar un objeto", () => {
    const clave = "Ironman";
    const edad = 45;
    const rango = "Capitán";

    const testResult = usContext({ clave, edad });

    console.log(testResult);

    expect(testResult).toEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
      rango:rango
    });
  });
});
