import React, {useEffect} from 'react';
import * as THREE from "three";
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function ProductModel(props) {

	useEffect(() => {



		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

		var renderer = new THREE.WebGLRenderer( { canvas: document.getElementById("threeCanvas"), alpha: true } );



		renderer.setSize( window.innerWidth * 0.8, window.innerHeight);


		const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.9 );
		directionalLight.position.z = 5
		directionalLight.position.x = 5
		scene.add( directionalLight );
		// const loader = new GLTFLoader().setPath( '/public/DamagedHelmet/glTF' );
		const loader = new GLTFLoader()
		loader.load( 'scene.gltf', function ( gltf ) {
			gltf.scene.position.y = -1.5
			scene.add(gltf.scene);


		})

		camera.position.z = 5;
		camera.position.y = 1;
		camera.lookAt(0,0,0)



		const controls = new OrbitControls( camera, renderer.domElement );


		function animate() {
			requestAnimationFrame( animate );


			renderer.render( scene, camera );
		};

		animate();
	})



	return (
		<canvas id="threeCanvas"></canvas>
	);
}

export default ProductModel;