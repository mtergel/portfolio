import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <motion.div>
      <Navbar />
      {children}
    </motion.div>
  );
};

export default Layout;
