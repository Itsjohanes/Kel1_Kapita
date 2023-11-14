/* eslint-disable react/display-name */
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod";
import { useEffect, useRef } from "react";
import "./ar.css"

// eslint-disable-next-line react-refresh/only-export-components
export default () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    sceneEl.addEventListener("renderstart", function () {
      const arSystem = sceneEl.systems["mindar-image-system"];
      if (arSystem) {
        // 'arSystem' is defined, you can safely access its properties and methods
        arSystem.start();
      } else {
        console.error("arSystem is not defined");
      }
    });
  }, []);

  return (
    <div className="">
      <a-scene
        ref={sceneRef}
        mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;"
        color-space="sRGB"
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >
        <a-assets>
          <img
            crossOrigin="anonymous"
            id="card"
            src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.0/examples/image-tracking/assets/card-example/card.png"
          />
          <a-asset-item
            id="avatarModel"
            src="./skull/scene.gltf"
          ></a-asset-item>
        </a-assets>

        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        <a-entity mindar-image-target="targetIndex: 0">
          <a-plane
            src="#card"
            position="0 0 0"
            height="0.552"
            width="1"
            rotation="0 0 0"
          ></a-plane>
          <a-gltf-model
            rotation="0 0 0 "
            position="0 1 2"
            scale="0.005 0.005 0.005"
            src="#avatarModel"
            animation="property: position; to: 0 0 0; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
          ></a-gltf-model>
        </a-entity>
      </a-scene>
      </div>
  );
};
