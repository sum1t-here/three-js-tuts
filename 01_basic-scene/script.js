// scene
// some objects -> geometrics, models, particle, light (mesh)
// camera
// renderer

// scene
const scene = new THREE.Scene();

// object
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: "red"});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

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

// renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);