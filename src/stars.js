import * as THREE from "three";
import { solarSystem } from "./baseObjects";

export const stars = [];

function createStar() {
	const positions = [];

	for (let pos; pos <= 100000; pos++) {
		positions.push(
			(Math.random() - 0.5) * 1000,
			(Math.random() - 0.5) * 1000,
			(Math.random() - 0.5) * 1000,
		);
	}

	const geom = new THREE.BufferGeometry();
	geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
	const material = new THREE.PointsMaterial({
		color: "rgb(240, 240, 240)",
		size: 0.5,
	});
    
    const stars= new THREE.Points(geom, material) 
}

