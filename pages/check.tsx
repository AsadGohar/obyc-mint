import { useState } from "react";
import type { NextPage } from "next";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { polygonAddressMvm } from "../components/utils/consts";
import styles from "../styles/Theme.module.css";
import Button from '@mui/material/Button';
import { getTokenStatus } from "../components/utils/Web3Util";
import { CircularProgress } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';

const Check: NextPage = () => {

  const [obycTokenId, setObycTokenId] = useState<Number>()
  const [mvmTokenId, setMvmTokenId] = useState<Number>(0)
  const [statusString, setStatusString] = useState<String>("")
  const [loader, setLoader] = useState<Boolean>(false)
  const [image, setImage] = useState<Boolean>(false)
  const [errMsg, setErrMsg] = useState("")
  const [err, setErr] = useState(false)

  const handleCloseSnackBar = () => {
    setErr(false)
  };

  const getData = async () => {
    setErr(true);
    setErrMsg("This is in Beta Testing")
    // setLoader(true)
    // let response = await getTokenStatus(Number(obycTokenId))
    // console.log(response, 'respondseqw')
    // //response[0] is level, response[1] is tokenId
    // if (response[0] == 0 && response[1] == 0) {
    //   console.log('here1')
    //   setStatusString('The OBYC Token Has Not Been Transformed Yet')
    //   setImage(false)
    //   setLoader(false)
    // }
    // else if (response[0] == 1) {
    //   console.log('here3')
    //   setStatusString('The OBYC Token Has Been Transformed To Level 1')
    //   setMvmTokenId(Number(response[1]))
    //   setImage(true)
    //   setLoader(false)
    // }
    // else if (response[0] == 2) {
    //   console.log('here3')
    //   setStatusString('The OBYC Token Has Been Transformed To Level 2')
    //   setMvmTokenId(Number(response[1]))
    //   setImage(true)
    //   setLoader(false)
    // }
  }

  return (
    <div className={styles.checkContainerTwo}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
        <Grid className={styles.checkContainer} container>
          <Grid item md={6} sm={12} xs={12}>
            <Box sx={{
              p: 4,
              display: 'flex',
              alignContent: 'center',
              flexDirection: 'column',
            }}>
              <p className={styles.checkHeading}>OBYC Token Check</p>
              <p className={styles.checkSubHeading}>Enter Bear number to check transformation level status!</p>
              <TextField
                id="standard-name"
                placeholder="OBYC Token ID"
                sx={{
                  fieldset: {
                    borderColor: 'white !important'
                  }
                }}
                onChange={(e) => setObycTokenId(Number(e.target.value))}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
                <Button onClick={getData} sx={{ width: "50%", backgroundColor: '#1c1e21', mt: 3 }}
                  variant="contained">Check</Button>
                <p className={styles.betaText}>(beta test)</p>
              </Box>
              {
                <p>{statusString}</p>
              }
              {
                loader ?
                  <CircularProgress /> :
                  mvmTokenId > 0 && image ?
                    <>
                      <img src={"bear1.jpg"} alt='obyc' style={{ height: "250px", width: "100%" }} />
                    </> :
                    <></>
              }
            </Box>
          </Grid>
          <Grid md={6} item sm={12} xs={12}>
            <img className={styles.checkLogo} src={"obyc_logo_official.png"} />
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={err}
        onClose={handleCloseSnackBar}
        message={errMsg}
        key={"top" + "center"}
      />
    </div>
  );
};

export default Check;
