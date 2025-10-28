function createPlanet(name, color, distance, size, speed) {
	const planetGroup = new THREE.Object3D();
	solarSystem.add(planetGroup);
	const planetMaterial = new THREE.MeshBasicMaterial({
		color: color,
	});
	const planet = new THREE.Mesh(sphereGeometry, planetMaterial);
	planet.position.x = distance;
	planet.scale.set(size, size, size);
	planetGroup.add(planet);
	return { planet, speed, planetGroup };
}
export const planets = [
	createPlanet("Mercury", "rgb(100,100,100)", 20, 1, 0.04),
	createPlanet("Venus", "rgb(192, 15, 15)", 28, 1.5, 0.03),
	createPlanet("Earth", "rgb(0, 222, 252)", 38, 2, 0.02),
	createPlanet("Mars", "rgb(168, 55, 11)", 48, 1.5, 0.018),
	createPlanet("Jupiter", "rgb(100,100,100)", 70, 4, 0.01),
	createPlanet("Saturn", "rgb(174, 177, 131)", 90, 3.5, 0.008),
	createPlanet("Uranus", "rgb(13, 209, 193)", 115, 2.5, 0.006),
	createPlanet("Neptune", "rgb(38, 0, 255)", 135, 2.3, 0.005),
];