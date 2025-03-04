import { useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Draw, Modify, Snap } from "ol/interaction";
import { Fill, Stroke, Style } from "ol/style";
import { fromLonLat } from "ol/proj";

const SecondRoute = ({ userData }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const drawInteraction = useRef(null);
  const modifyInteraction = useRef(null);
  const vectorSource = useRef(new VectorSource());
  const [isDrawing, setIsDrawing] = useState(true);
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    if (mapInstance.current) return; // Prevent multiple initializations

    // Create a vector layer with a style
    const vectorLayer = new VectorLayer({
      source: vectorSource.current,
      style: new Style({
        stroke: new Stroke({ color: "blue", width: 2 }),
        fill: new Fill({ color: "rgba(0, 0, 255, 0.3)" }),
      }),
    });

    // Initialize the map
    const map = new Map({
      target: mapRef.current,
      layers: [new TileLayer({ source: new OSM() }), vectorLayer],
      view: new View({ center: fromLonLat([0, 0]), zoom: 2 }),
    });

    mapInstance.current = map;

    // Add interactions
    drawInteraction.current = new Draw({ source: vectorSource.current, type: "Polygon" });
    modifyInteraction.current = new Modify({ source: vectorSource.current });
    const snap = new Snap({ source: vectorSource.current });

    map.addInteraction(drawInteraction.current);
    map.addInteraction(modifyInteraction.current);
    map.addInteraction(snap);

    // Function to remove polygons on click
    map.on("singleclick", (event) => {
      map.forEachFeatureAtPixel(event.pixel, (feature) => {
        if (feature) {
          vectorSource.current.removeFeature(feature);
        }
      });
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  // Toggle Drawing Mode
  const toggleDrawing = () => {
    if (!mapInstance.current) return;
    if (isDrawing) {
      mapInstance.current.removeInteraction(drawInteraction.current);
    } else {
      mapInstance.current.addInteraction(drawInteraction.current);
    }
    setIsDrawing(!isDrawing);
  };

  // Toggle Editing Mode
  const toggleEditing = () => {
    if (!mapInstance.current) return;
    if (isEditing) {
      mapInstance.current.removeInteraction(modifyInteraction.current);
    } else {
      mapInstance.current.addInteraction(modifyInteraction.current);
    }
    setIsEditing(!isEditing);
  };

  // Clear All Polygons
  const clearPolygons = () => {
    vectorSource.current.clear();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-center mt-4">Hello, {userData.firstName}!</h1>
      <div className="flex gap-4 mb-2">
        <button onClick={toggleDrawing} className="bg-blue-500 text-white px-4 py-2 rounded">
          {isDrawing ? "Disable Drawing" : "Enable Drawing"}
        </button>
        <button onClick={toggleEditing} className="bg-green-500 text-white px-4 py-2 rounded">
          {isEditing ? "Disable Editing" : "Enable Editing"}
        </button>
        <button onClick={clearPolygons} className="bg-red-500 text-white px-4 py-2 rounded">
          Clear All Polygons
        </button>
      </div>
      <div ref={mapRef} style={{ width: "100%", height: "100vh" }}></div>
    </div>
  );
};

export default SecondRoute;
