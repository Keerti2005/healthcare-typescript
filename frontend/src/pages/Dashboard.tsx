"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import {
  Chart,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import {
  DropdownItem,
  DropdownSection,
  DropdownSeparator,
  DropdownItemDetails,
  DropdownLabel,
} from "@/components/ui/dropdown";
import {
  ListBox,
  Popover,
  Button,
  Select,
  Label,
  SelectValue,
} from "react-aria-components";


const Dashboard = () => {
  const [sensorData, setSensorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("24h");
  const [filteredData, setFilteredData] = useState([]);
  const [extraData, setExtraData] = useState(null);
  useEffect(() => {
    if (sensorData.length > 0) {
      const result = filterDataByTimeRange(sensorData, selectedFilter);
      setFilteredData(result);
    }
  }, [sensorData, selectedFilter]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sensors")
      .then((response) => {
        setSensorData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const filterDataByTimeRange = (data, range) => {
    const now = new Date();
    let fromDate;

    if (range === "24h") {
      fromDate = new Date(now.getTime() - 24 * 60 * 60 * 1000); // last 24 hours
    } else if (range === "15d") {
      fromDate = new Date(now.getTime() - 15 * 24 * 60 * 60 * 1000); // last 15 days
    } else {
      fromDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000); // last 30 days
    }

    console.log("Filtering data from:", fromDate); // Log the fromDate
    console.log("Data length before filtering:", data.length); // Log data length before filter
    const filtered = data.filter(
      (item) => new Date(item.timestamp) >= fromDate
    );
    console.log("Data length after filtering:", filtered.length); // Log filtered data length

    return filtered;
  };

  const current = filteredData[filteredData.length - 1];
  const previous = filteredData[filteredData.length - 2] || current;

  // Process the fetched data into the required format for charts
  const heartRateData = filteredData.map((data) => ({
    month: new Date(data.timestamp).toLocaleDateString("en-US", {
      month: "long",
    }),
    revenue: data.heartRate,
  }));

  const spo2Data = filteredData.map((data) => ({
    month: new Date(data.timestamp).toLocaleDateString("en-US", {
      month: "long",
    }),
    spo2: data.spo2,
  }));

  const bloodPressureData = filteredData.map((data) => ({
    month: new Date(data.timestamp).toLocaleDateString("en-US", {
      month: "long",
    }),
    systolic: data.bloodPressure.systolic,
    diastolic: data.bloodPressure.diastolic,
  }));

  const bodyTemperatureData = filteredData.map((data) => ({
    month: new Date(data.timestamp).toLocaleDateString("en-US", {
      month: "long",
    }),
    temperature: (data.temperature * 9) / 5 + 32, // Convert Fahrenheit to Celsius
  }));

  const ecgData = filteredData.map((data) => ({
    month: new Date(data.timestamp).toLocaleDateString("en-US", {
      month: "long",
    }),
    ecg: data.ecg.reduce((acc, val) => acc + val, 0) / data.ecg.length, // Average ECG
  }));



  
  const heartRateConfig = {
    revenue: {
      label: "Heart Rate",
      color: "var(--chart-1)",
    },
  };

  const spo2Config = {
    spo2: {
      label: "SpO2 Levels",
      color: "#9b59b6",
    },
  };

  const bloodPressureConfig = {
    systolic: {
      label: "Systolic",
      color: "var(--chart-1)",
    },
    diastolic: {
      label: "Diastolic",
      color: "oklch(0.457 0.24 277.023)",
    },
  };

  const bodyTemperatureConfig = {
    temperature: {
      label: "Body Temperature (°F)",
      color: "var(--chart-2)",
    },
  };

  const ecgConfig = {
    ecg: {
      label: "ECG Reading (bpm)",
      color: "#1abc9c",
    },
  };

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
        map.remove();
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
        <Heading className="text-xl font-semibold">
          Vital Checking Dashboard
        </Heading>

        

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6 p-6 bg-transparent">
        {[
          {
            label: "Heart Rate",
            unit: "bpm",
            valueKey: "heartRate",
          },
          {
            label: "SpO2",
            unit: "%",
            valueKey: "spo2",
          },
          {
            label: "Body Temp",
            unit: "°C",
            valueKey: "temperature",
          },
          {
            label: "Blood Pressure",
            unit: "mmHg",
            valueKey: "bloodPressure",
            formatter: (v) => `${v.systolic}/${v.diastolic}`,
          },
          {
            label: "ECG (avg)",
            unit: "mV",
            valueKey: "ecg",
            formatter: (v) =>
              Array.isArray(v)
                ? (v.reduce((acc, val) => acc + val, 0) / v.length).toFixed(2)
                : v.toFixed?.(2) || "0.00",
          },
        ].map((item) => {
          const current = sensorData[sensorData.length - 1];
          const previous = sensorData[sensorData.length - 2] || current;

          let currentValue =
            item.valueKey === "bloodPressure"
              ? current.bloodPressure
              : current[item.valueKey];

          let previousValue =
            item.valueKey === "bloodPressure"
              ? previous.bloodPressure
              : previous[item.valueKey];

          if (item.valueKey === "ecg") {
            const ecgCurrent = Array.isArray(currentValue) ? currentValue : [];
            const ecgPrevious = Array.isArray(previousValue)
              ? previousValue
              : [];
            currentValue =
              ecgCurrent.length > 0
                ? ecgCurrent.reduce((acc, val) => acc + val, 0) /
                  ecgCurrent.length
                : 0;
            previousValue =
              ecgPrevious.length > 0
                ? ecgPrevious.reduce((acc, val) => acc + val, 0) /
                  ecgPrevious.length
                : 0;
          }

          const hasIncreased = currentValue > previousValue;
          const Icon = hasIncreased ? ArrowUpRight : ArrowDownRight;
          const formattedValue = item.formatter
            ? item.formatter(currentValue)
            : currentValue;

          return (
            <div
              key={item.label}
              className="w-full rounded-2xl h-full flex flex-col justify-center items-center border border-gray-300 dark:border-slate-700 backdrop-blur-xl bg-white/10 dark:bg-slate-700/0 shadow-xl px-8 py-10 transition-transform hover:scale-105"
            >
              <p className="text-base text-gray-600 dark:text-gray-400 mb-2 tracking-wide">
                {item.label}
              </p>
              <div className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white">
                <span>{formattedValue}</span>
                <span className="text-xl text-gray-500">{item.unit}</span>
                <Icon
                  className={`w-6 h-6 ${
                    hasIncreased ? "text-green-500" : "text-red-500"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between mb-6">
  <div className="ml-auto">
    <Select
      selectedKey={selectedFilter}
      onSelectionChange={(key) => setSelectedFilter(String(key))}
      className="w-[100px]" // Increase width of the select dropdown (optional)
    >
      <Button className="px-4 py-2 h-10 text-base border rounded-lg bg-muted min-w-[50px] whitespace-nowrap">
        <SelectValue />
      </Button>
      <Popover className="z-50 mt-2 border bg-muted rounded-md shadow-lg">
        <ListBox className="flex flex-row gap-2 px-2 py-2">
          <DropdownItem id="24h" className="whitespace-nowrap">
            24 Hours
          </DropdownItem>
          <DropdownItem id="15d" className="whitespace-nowrap">
            15 Days
          </DropdownItem>
          <DropdownItem id="30d" className="whitespace-nowrap">
            30 Days
          </DropdownItem>
        </ListBox>
      </Popover>
    </Select>
  </div>
</div>

      <div className="flex justify-between gap-6">
        {/* Heart Rate */}
        <Card className="w-1/2">
          <Card.Header
            title="Heart Rate Graph"
            description="Heart rate data for the last 24 months"
            className="items-center"
          />
          <Card.Content>
            <Chart className="max-h-[250px] w-[100%]" config={heartRateConfig}>
              <AreaChart data={heartRateData} margin={{ left: 12, right: 12 }}>
                <CartesianGrid
                  vertical={false}
                  strokeWidth={0.5}
                  stroke="#e0e0e0"
                />
                <XAxis dataKey="month" tickFormatter={(v) => v.slice(0, 3)} />
                <ChartTooltip
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="revenue"
                  type="natural"
                  fill="var(--color-revenue)"
                  fillOpacity={0.4}
                  stroke="var(--color-revenue)"
                />
              </AreaChart>
            </Chart>
          </Card.Content>
        </Card>

        {/* SpO2 Levels */}
        <Card className="w-1/2">
          <Card.Header
            title="SpO2 Levels Graph"
            description="SpO2 levels data for the last 24 months"
            className="items-center"
          />
          <Card.Content>
            <Chart className="max-h-[250px] w-[100%]" config={spo2Config}>
              <AreaChart data={spo2Data} margin={{ left: 12, right: 12 }}>
                <CartesianGrid
                  vertical={false}
                  strokeWidth={0.5}
                  stroke="#e0e0e0"
                />
                <XAxis dataKey="month" tickFormatter={(v) => v.slice(0, 3)} />
                <ChartTooltip
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="spo2"
                  type="natural"
                  fill="#9b59b6"
                  fillOpacity={0.4}
                  stroke="#9b59b6"
                />
              </AreaChart>
            </Chart>
          </Card.Content>
        </Card>
      </div>

      {/* Blood Pressure */}
      <Card className="mt-6">
        <Card.Header
          title="Blood Pressure Analysis"
          description="Monthly comparison of Systolic and Diastolic"
          className="items-center pb-4"
        />
        <Card.Content>
          <Chart config={bloodPressureConfig} className="max-h-[300px] w-full">
            <AreaChart
              data={bloodPressureData}
              margin={{ left: 12, right: 12 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickFormatter={(v) => v.slice(0, 3)} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillSystolic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9b59b6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#9b59b6" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillDiastolic" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="oklch(0.457 0.24 277.023)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="oklch(0.457 0.24 277.023)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="systolic"
                type="natural"
                fill="url(#fillSystolic)"
                stroke="oklch(0.457 0.24 277.023)"
                stackId="a"
              />
              <Area
                dataKey="diastolic"
                type="natural"
                fill="url(#fillDiastolic)"
                stroke="#9b59b6"
                stackId="a"
              />
            </AreaChart>
          </Chart>
        </Card.Content>
      </Card>

      {/* Body Temperature and ECG */}
      <div className="flex justify-between gap-6 mt-6">
        <Card className="w-1/2">
          <Card.Header
            title="Body Temperature"
            description="Monthly readings (°C)"
          />
          <Card.Content>
            <Chart
              config={bodyTemperatureConfig}
              className="max-h-[300px] w-full"
            >
              <BarChart
                data={bodyTemperatureData}
                layout="vertical"
                margin={{ left: 20 }}
              >
                <YAxis
                  dataKey="month"
                  type="category"
                  tickFormatter={(v) => v.slice(0, 3)}
                />
                <XAxis type="number" domain={[96, 102]} />
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Bar
                  dataKey="temperature"
                  fill="blue"
                  radius={5}
                  barSize={40}
                />{" "}
                {/* Adjust the barSize */}
              </BarChart>
            </Chart>
          </Card.Content>
        </Card>

        {/* ECG Graph */}
        <Card className="w-1/2">
          <Card.Header
            title="ECG Graph"
            description="Monthly ECG average (bpm)"
          />
          <Card.Content>
            <Chart config={ecgConfig} className="max-h-[300px] w-full">
              <AreaChart data={ecgData} margin={{ left: 12, right: 12 }}>
                <CartesianGrid
                  vertical={false}
                  strokeWidth={0.5}
                  stroke="#e0e0e0"
                />
                <XAxis dataKey="month" tickFormatter={(v) => v.slice(0, 3)} />
                <ChartTooltip
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="ecg"
                  type="natural"
                  fill="#1abc9c"
                  fillOpacity={0.4}
                  stroke="#1abc9c"
                />
              </AreaChart>
            </Chart>
          </Card.Content>
        </Card>
      </div>
      
      <MapComponent />
    </div>
  );
};

export default Dashboard;
