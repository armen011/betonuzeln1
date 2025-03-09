import { createRoot } from "react-dom/client";
import "./css/fonts.css";
import "./css/main.css";
import "./css/media.css";
import "./css/screen.min.css";
import "./css/style.css";
import Routes from "./Routes";

createRoot(document.getElementById("root")).render(<Routes />);
