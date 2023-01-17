import {
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
} from "@mui/material";
import config from "../config/config";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { TezosToolkit } from "@taquito/taquito";

/**
 * @param {{Tezos: TezosToolkit}}
 */
function AddProject({ Tezos, handleClose, open }) {
  const [loading, setloading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(0);

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleDate = (event) => {
    setDate(new Date(event.target.value));
  };

  const addProject = () => {
    setloading(true);
    Tezos.wallet.at(config.contractAddress).then((contract) => {
      console.log(contract.entrypoints);
      console.log(contract.parameterSchema);
      try {
        contract.methods
          .default(description, date, parseInt(amount) * 1000000, name)
          .send()
          .then((op) => {
            return op.confirmation();
          })
          .then((result) => {
            if (result.completed) {
              setloading(false);
              handleClose();
            }
          });
      } catch (e) {
        console.log(e);
      }
    });
  };
  return (
    <Dialog open={open} onClose={handleClose} fullWidth >
      <DialogTitle >
        <b>Add Project</b>
      </DialogTitle>
      <form>
        <DialogContent>
          <TextField
          
            label="Project Name"
            variant="standard"
            fullWidth
            margin="normal"
            onChange={handleName}
          />
          <TextField
            label="Description"
            variant="standard"
            multiline
            minRows={3}
            fullWidth
            margin="normal"
            onChange={handleDescription}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="Amount (in tez)"
              variant="standard"
              margin="normal"
              type="number"
              onChange={handleAmount}
            />
            <TextField
              label="End date"
              variant="standard"
              margin="normal"
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              onChange={handleDate}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <LoadingButton
            onClick={addProject}
            variant="contained"
            loading={loading}
            style={{
              borderRadius: "20px",
              backgroundColor: "red",
            }}
          >
            Create
          </LoadingButton>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default AddProject;
