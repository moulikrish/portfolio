import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="loader">
        <h1>
          Loading
          {progress.toFixed(0)}%
        </h1>
      </div>
    </Html>
  );
}
