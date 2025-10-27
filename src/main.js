import * as THREE from "three";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();

// field of view
const fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

const width = 5;
const height = 5;
const lenth = 5;

const geometry = new THREE.BoxGeometry(width, height, lenth);
const material = new THREE.MeshBasicMaterial({ color: "rgba(36, 130, 67, 1)" });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 10

function animate(){
    cube.rotation.x += 0.015
    cube.rotation.y += 0.015
    // cube.rotation.z += 0.01
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate)

