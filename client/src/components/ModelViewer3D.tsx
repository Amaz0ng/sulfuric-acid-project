import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Fullscreen, RotateCcw } from 'lucide-react';

interface ModelViewer3DProps {
  modelUrl: string;
  title?: string;
}

export default function ModelViewer3D({ modelUrl, title = "3D Model" }: ModelViewer3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<any>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      // Scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0f1419);
      sceneRef.current = scene;

      // Camera setup
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.set(0, 2, 5);
      camera.lookAt(0, 0, 0);
      cameraRef.current = camera;

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFShadowMap;
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(10, 10, 10);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 2048;
      directionalLight.shadow.mapSize.height = 2048;
      scene.add(directionalLight);

      const pointLight = new THREE.PointLight(0xffd700, 0.4);
      pointLight.position.set(-10, 5, 10);
      scene.add(pointLight);

      // Simple orbit controls
      let isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };

      renderer.domElement.addEventListener('mousedown', (e: any) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
        setIsAutoRotating(false);
      });

      renderer.domElement.addEventListener('mousemove', (e: any) => {
        if (isDragging && modelRef.current) {
          const deltaX = e.clientX - previousMousePosition.x;
          const deltaY = e.clientY - previousMousePosition.y;

          modelRef.current.rotation.y += deltaX * 0.01;
          modelRef.current.rotation.x += deltaY * 0.01;

          previousMousePosition = { x: e.clientX, y: e.clientY };
        }
      });

      renderer.domElement.addEventListener('mouseup', () => {
        isDragging = false;
      });

      renderer.domElement.addEventListener('wheel', (e: any) => {
        e.preventDefault();
        if (cameraRef.current) {
          const zoomSpeed = 0.1;
          if (e.deltaY > 0) {
            cameraRef.current.position.z += zoomSpeed;
          } else {
            cameraRef.current.position.z -= zoomSpeed;
          }
          cameraRef.current.position.z = Math.max(2, Math.min(20, cameraRef.current.position.z));
        }
      }, { passive: false });

      // Load model with CORS handling
      const loader = new GLTFLoader();
      
      // Add crossOrigin attribute for CORS
      loader.setCrossOrigin('anonymous');
      
      // Add timeout to detect hanging requests
      const loadTimeout = setTimeout(() => {
        if (!modelLoaded) {
          setError('Model loading timed out. Please refresh the page.');
          setIsLoading(false);
        }
      }, 15000);
      
      loader.load(
        modelUrl,
        (gltf: any) => {
          try {
            const model = gltf.scene;
            modelRef.current = model;

            // Center and scale model
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 4 / maxDim;

            model.position.sub(center.multiplyScalar(scale));
            model.scale.multiplyScalar(scale);

            // Ensure all meshes cast and receive shadows
            model.traverse((child: any) => {
              if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
              }
            });

            scene.add(model);
            setModelLoaded(true);
            clearTimeout(loadTimeout);
            setIsLoading(false);
          } catch (err) {
            console.error('Error processing model:', err);
            setError('Error processing 3D model.');
            setIsLoading(false);
          }
        },
        (progress: any) => {
          // Loading progress
          console.log(`Loading: ${(progress.loaded / progress.total * 100).toFixed(2)}%`);
        },
        (err: any) => {
          console.error('Error loading model:', err);
          setError('Failed to load 3D model. The file may be corrupted or inaccessible.');
          setIsLoading(false);
        }
      );

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        if (modelRef.current && isAutoRotating) {
          modelRef.current.rotation.y += 0.005;
        }

        renderer.render(scene, camera);
      };

      animate();

      // Handle window resize
      const handleResize = () => {
        if (containerRef.current && cameraRef.current && rendererRef.current) {
          const newWidth = containerRef.current.clientWidth;
          const newHeight = containerRef.current.clientHeight;

          cameraRef.current.aspect = newWidth / newHeight;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(newWidth, newHeight);
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        clearTimeout(loadTimeout);
        window.removeEventListener('resize', handleResize);
        if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    } catch (err) {
      console.error('Error setting up 3D viewer:', err);
      setError('Failed to initialize 3D viewer');
      setIsLoading(false);
    }
  }, [modelUrl]);

  const handleResetView = () => {
    if (modelRef.current && cameraRef.current) {
      modelRef.current.rotation.set(0, 0, 0);
      cameraRef.current.position.set(0, 2, 5);
      setIsAutoRotating(true);
    }
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="relative w-full h-full bg-card border border-border rounded-lg overflow-hidden">
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-foreground">Loading 3D Model...</p>
          </div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
          <div className="text-center">
            <p className="text-orange-500 font-bold mb-2">⚠️ Error</p>
            <p className="text-foreground text-sm">{error}</p>
          </div>
        </div>
      )}

      {/* 3D Canvas */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex gap-2 z-20">
        <button
          onClick={handleResetView}
          className="flex items-center gap-2 px-3 py-2 bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-colors text-sm font-medium"
          title="Reset view"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>

        <button
          onClick={() => setIsAutoRotating(!isAutoRotating)}
          className={`px-3 py-2 rounded transition-colors text-sm font-medium ${
            isAutoRotating
              ? 'bg-accent text-accent-foreground hover:bg-accent/90'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
          }`}
          title={isAutoRotating ? 'Stop auto-rotate' : 'Start auto-rotate'}
        >
          {isAutoRotating ? '⏸ Pause' : '▶ Play'}
        </button>

        <button
          onClick={handleFullscreen}
          className="flex items-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/90 transition-colors text-sm font-medium ml-auto"
          title="Fullscreen"
        >
          <Fullscreen className="w-4 h-4" />
        </button>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 left-4 right-4 text-xs text-muted-foreground bg-background/60 backdrop-blur px-3 py-2 rounded">
        <p>🖱️ Drag to rotate • 🔄 Scroll to zoom • ⏸ Pause auto-rotate</p>
      </div>
    </div>
  );
}
