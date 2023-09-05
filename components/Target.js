// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
  init: function () {
    for (var i = 1; i <= 15; i++) {
      //id
      var id = `ring${i}`;

      //position variables
      var posX = Math.random() * 25 + -5;
      var posY = Math.random() * 2 + -1;
      var posZ = Math.random() * 250 + -200;

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.createRings(id, position);
    }
  },

  createRings: function (id, position) {
    var terrainEl = document.querySelector("#terrain");
    var ringEl = document.createElement("a-entity");

    ringEl.setAttribute("id", id);
    ringEl.setAttribute("gltf-model", "./assets/models/gasCan/scene.gltf");
    ringEl.setAttribute("position", position);
    ringEl.setAttribute("rotation", {x: 180, y: -0.5, z:0})
    ringEl.setAttribute("scale", {x: 0.01, y:0.01, z:0.01})

    //set the static body attribute of physics system
    ringEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 2,
    });

    ringEl.setAttribute("game-play", {
      elementId: `#${id}`,
    });

    terrainEl.appendChild(ringEl);
  },
});
