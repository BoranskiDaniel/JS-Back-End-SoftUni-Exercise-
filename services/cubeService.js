const uniqid = require("uniqid");

const cubes = [
  {
    id: "2j6lsrew0ln5xhkys",
    name: "asd",
    description: "f",
    imageUrl:
      "https://dbrand.com/sites/default/files/dba/skin-customizer/dbrand-cube/SlO3Xi1s_vsBa6nc.jpg",
    difficultyLevel: 1,
  },
  {
    id: "2j6lsrew0ln5xhp09",
    name: "aa",
    description: "ss",
    imageUrl: "https://i.guim.co.uk/img/media/af8ee7ce17c44bfe5672bdd496ada5c0d2305780/0_261_3386_2031/master/3386.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4673d6d3295863573a3322c9b0242668",
    difficultyLevel: 2,
  },
];

exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };

  cubes.push(newCube);

  return newCube;
};

exports.getAll = (search, from, to) => {
  let filterCubes = [...cubes];
  if (search) {
    filterCubes = filterCubes.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (from) {
    filterCubes = filterCubes.filter((cube) =>
    cube.difficultyLevel >= Number(from))
  }
  if (to) {
    filterCubes = filterCubes.filter((cube) =>
    cube.difficultyLevel <= Number(to))
  }

  return filterCubes;
};

exports.getSingleCube = (id) => {
  return cubes.find((cube) => cube.id === id);
};
