import React, { useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const Home = () => {
  useEffect(() => {
      gsap.from(".welcome-text", { opacity: 0, y: 50, duration: 2 });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a simple rotating object (to simulate a fire effect for now)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xff4500 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div className="home">
      <h1 className="welcome-text">Welcome to My Personal Website</h1>
    </div>
  );
};

export default Home;
