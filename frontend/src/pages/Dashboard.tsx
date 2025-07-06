"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// ... import your UI components here as needed

// ✅ Inline SensorData type instead of importing from "@/types/sensor"
type SensorData = {
  heartRate: number;
  spo2: number;
  temperature: number;
  ecg: number[];
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };
  timestamp: string;
};

const Dashboard = () => {
  const [sensorData, setSensorData] = useState<SensorData[]>([]);
  const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("24h");
  const [filteredData, setFilteredData] = useState<SensorData[]>([]);

  useEffect(() => {
    axios
      .get("https://healthcare-typescript.onrender.com/api/sensors")
      .then((response) => {
        setSensorData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (sensorData.length > 0) {
      const result = filterDataByTimeRange(sensorData, selectedFilter);
      setFilteredData(result);
    }
  }, [sensorData, selectedFilter]);

  const filterDataByTimeRange = (data: SensorData[], range: string): SensorData[] => {
    const now = new Date();
    let fromDate: Date;

    if (range === "60d") {
      fromDate = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);
    } else if (range === "90d") {
      fromDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
    } else {
      fromDate = new Date(now.getTime() - 120 * 24 * 60 * 60 * 1000);
    }

    return data.filter((item) => new Date(item.timestamp) >= fromDate);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Your chart data and component rendering continues here...

  const MapComponent = () => {
    useEffect(() => {
      const map = L.map("hs-pin-leaflet", {
        center: [10.8354, 77.3039],
        zoom: 10,
        maxBounds: [
          [10.6, 77.2],
          [11.0, 77.5],
        ],
        maxBoundsViscosity: 1.0,
      });

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 10,
        minZoom: 2,
        attribution:
          '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      L.marker([10.8354, 77.3039])
        .bindPopup("Kinathukadavu, Coimbatore")
        .addTo(map);

      return () => {
        map.remove(); // ✅ cleanup function for Leaflet map
      };
    }, []);

    return (
      <div
        id="hs-pin-leaflet"
        className="mt-8 h-[400px] w-full rounded-2xl shadow-md"
      />
    );
  };

  return (
    <div>
      {/* Continue your UI, charts, cards, filters here */}
      <MapComponent />
    </div>
  );
};

export default Dashboard;
