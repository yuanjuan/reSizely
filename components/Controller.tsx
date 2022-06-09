import { Stack, Switch, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IController {
  onSwitch: (v: any) => void;
}

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const Controller = (props: IController) => {
  const {onSwitch} = props
  // TODO: handle switch change
  const changeHandler = (e: any) => {
    console.log("switch change: ", e.target.value, e.target.checked);
    onSwitch(e.target.checked ? 'INCH' : 'CM')
  };

  return (
    <section className="flex py-4 bg-white my-1">
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>CM</Typography>
        <AntSwitch
          onChange={changeHandler}
          defaultChecked
          inputProps={{ "aria-label": "create size table" }}
        />
        <Typography>INCH</Typography>
      </Stack>
    </section>
  );
};

export default Controller;
