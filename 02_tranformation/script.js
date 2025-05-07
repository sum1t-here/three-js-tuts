// scene
// some objects -> geometrics, models, particle, light (mesh)
// camera
// renderer

// scene
const scene = new THREE.Scene();

// object
const group = new THREE.Group();

// position
// mesh.position.z = 0.5; // back and front
// mesh.position.y = 0.2; // top and bottom
// mesh.position.x = 1; // left right

// mesh.position.set(1, 0.2, 0.5);

// // scale
// mesh.scale.x = 2;
// mesh.scale.y = 1;
// mesh.scale.z = 1;

// // rotation -> rotation (Euler) or with quarternion
// mesh.rotation.reorder('yxz'); // first y then x and then z
// mesh.rotation.x = 0.15;
// mesh.rotation.y = 1.5;
// mesh.rotation.z = 3.18;

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: "green"})
);
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: "red"})
);
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: "blue"})
);
group.add(cube3);

cube2.position.x = 1.5;
cube3.position.x = 3;
group.position.y = 1;

scene.add(group);

// axes helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// console.log(mesh.position.length()); // position and centre of the scene
// 1.1357816691600546


const sizes = {
    width: 800,
    height: 600
}

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);
camera.position.z =  3;
camera.position.y = 1;
camera.position.x = 1;

// console.log(mesh.position.distanceTo(camera.position));
// 2.6248809496813377

// camera.lookAt(new THREE.Vector3(0, -1, 0)); // changing camera angle
// camera.lookAt(mesh.position);

camera.lookAt(cube2.position);

// renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);