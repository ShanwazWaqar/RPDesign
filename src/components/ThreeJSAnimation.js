// src/components/ThreeJSAnimation.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeJSAnimation = ({ className }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Current element reference
    const currentRef = mountRef.current;
    
    // Scene, camera, and renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      currentRef.clientWidth / currentRef.clientHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    currentRef.appendChild(renderer.domElement);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xBA0C2F, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    // UGA Colors
    const ugaRed = new THREE.Color(0xBA0C2F);
    const ugaBlack = new THREE.Color(0x000000);
    
    // Add a group of objects
    const objectsGroup = new THREE.Group();
    
    // Create geometries
    const shapes = [];
    
    // Create cubes
    for (let i = 0; i < 20; i++) {
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const material = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? ugaRed : ugaBlack,
        roughness: 0.5,
        metalness: 0.5,
      });
      
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      
      cube.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        floating: {
          speed: Math.random() * 0.01 + 0.005,
          factor: Math.random() * 0.5 + 0.5,
          offset: Math.random() * Math.PI * 2,
        },
      };
      
      shapes.push(cube);
      objectsGroup.add(cube);
    }
    
    // Add spheres
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.SphereGeometry(0.3, 16, 16);
      const material = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? ugaRed : ugaBlack,
        roughness: 0.5,
        metalness: 0.5,
      });
      
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      
      sphere.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        floating: {
          speed: Math.random() * 0.01 + 0.005,
          factor: Math.random() * 0.5 + 0.5,
          offset: Math.random() * Math.PI * 2,
        },
      };
      
      shapes.push(sphere);
      objectsGroup.add(sphere);
    }
    
    scene.add(objectsGroup);
    
    // Position camera
    camera.position.z = 5;
    
    // Animation function
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      time += 0.01;
      
      // Rotate and animate each shape
      shapes.forEach((shape) => {
        // Apply rotation
        shape.rotation.x += shape.userData.rotationSpeed.x;
        shape.rotation.y += shape.userData.rotationSpeed.y;
        shape.rotation.z += shape.userData.rotationSpeed.z;
        
        // Apply floating motion
        const { speed, factor, offset } = shape.userData.floating;
        shape.position.y += Math.sin(time * speed + offset) * factor * 0.01;
      });
      
      // Rotate the entire group slowly
      objectsGroup.rotation.y += 0.001;
      
      renderer.render(scene, camera);
    };
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      currentRef.removeChild(renderer.domElement);
      
      // Dispose geometries and materials
      shapes.forEach((shape) => {
        shape.geometry.dispose();
        shape.material.dispose();
      });
    };
  }, []);
  
  return (
    <div 
      ref={mountRef}
      className={`w-full h-full ${className}`}
    />
  );
};

export default ThreeJSAnimation;