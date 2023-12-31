import {
  Web3Button,
  useAddress,
} from "@thirdweb-dev/react";
import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Theme.module.css";
import Box from '@mui/material/Box';
import { url3, polygonAddressObycLab, originalAddressObycLab } from "../components/utils/consts";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import LevelOne from "../components/common/transformation/LevelOne";
import LevelTwo from "../components/common/transformation/LevelTwo";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{height:"100%",marginTop:"20px"}}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Transform: NextPage = () => {

  //thirdweb hooks
  const address = useAddress()
  const LevelOneTokens = LevelOne as any;
  const LevelTwoTokens = LevelTwo as any;
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>
      {
        address == undefined ?
          <Web3Button
            contractAddress={originalAddressObycLab}
            action={async (contract) =>
              console.log('l')
            }
            // If the function is successful, we can do something here.
            onSuccess={(_result) => window.open(url3, "_blank")}
            // If the function fails, we can do something here.
            onError={(error) => alert(error?.message)}
            accentColor="#060606"
            colorMode="dark"
            className="botonMint"
          >
            Bio-Infused Honey Bid Coming Soon
          </Web3Button> :
          <>
            <div>
                <h2>Beta Test</h2>
            </div>
            <div style={{ width: '70%', backgroundColor: 'black' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Level One Transformation Beta Test" {...a11yProps(0)} />
                <Tab label="Level Two Transformation Beta Test" {...a11yProps(1)} />
              </Tabs>
            </div>
            <TabPanel value={value} index={0}>
              <LevelOneTokens />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <LevelTwoTokens />
            </TabPanel>
          </>
      }
    </div>
  );
};

export default Transform;
