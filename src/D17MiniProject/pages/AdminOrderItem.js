import {
  AspectRatio,
  Card,
  CardContent,
  Chip,
  Link,
  Typography,
} from "@mui/joy";
import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useOrderContext } from "../context/OrderContext";
import { MenuItem, Select } from "@mui/material";
function AdminOrderItem({ row }) {
  const [status, setStatus] = useState(row.status);
  const { updateOrder } = useOrderContext();

  //-----------------------------useEffect to handle status change---------------------
  useEffect(() => {
    setStatus(row.status);
  }, [row]);

  //------------------------------handle Status change--------------------------------
  const handleStatus = (e,v) => {
    console.log(e.target.value)
    updateOrder({ ...row, status: e.target.value });
  };
  return (
    <tr key={row.name}>
      <td style={{textAlign:"center"}}>{row.id}</td>
      <td >
        {row.Order.map((order) => (
          <Card
          
            variant="outlined"
            orientation="horizontal"
            sx={{
              width: 320,
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder",
              },
            }}
          >
            <AspectRatio ratio="1" sx={{ width: 90 }}>
              <img src={order.thumbnail} loading="lazy" alt="" />
            </AspectRatio>
            <CardContent>
              <Typography level="title-lg" id="card-description">
                {order.title}
              </Typography>
              <Typography level="title-lg" id="card-description">
                ₹{order.price} x {order.quantity}
              </Typography>
              <Typography
                level="body-sm"
                aria-describedby="card-description"
                mb={1}
              >
                <Link
                  overlay
                  underline="none"
                  href="#interactive-card"
                  sx={{ color: "text.tertiary" }}
                >
                  {order.brand}
                </Link>
              </Typography>
              <Chip
                variant="outlined"
                color="primary"
                size="sm"
                sx={{ pointerEvents: "none" }}
              >
                {order.category}
              </Chip>
            </CardContent>
          </Card>
        ))}
      </td>
      <td></td>
      <td style={{textAlign:"center"}}>₹{row.Order.reduce((acc, item) => parseInt(item.price) + acc, 0)}</td>
      <td style={{textAlign:"center"}}>{row.address.address}</td>
      <td style={{textAlign:"center"}} >
        <Select value={status} onChange={handleStatus}>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="In Transit">In Transit</MenuItem>
          <MenuItem value="Out for delivery">Out for delivery</MenuItem>
          <MenuItem value="Delivered">Delivered</MenuItem>
          <MenuItem value="cancelled">cancelled</MenuItem>
        </Select>
      </td>
      <td style={{textAlign:"center"}}>{row.payment}</td>
      <td style={{textAlign:"center"}}>{row.date}</td>
    </tr>
  );
}

export default AdminOrderItem;
