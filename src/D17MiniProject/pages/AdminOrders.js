import { AspectRatio, Card, CardContent, Chip, Link, Sheet, Table, Typography } from "@mui/joy";
import * as React from "react";
import { useOrderContext } from "../context/OrderContext";
import AdminOrderItem from "./AdminOrderItem";
import { MenuItem, Select } from "@mui/material";

export default function AdminOrders() {
  const { order } = useOrderContext();
  return (
    <div>
      {order.length>0?<Sheet
        sx={{
          "--TableHeader-height": "calc(1 * var(--TableCell-height))",
          overflow: "auto",
          background: (theme) =>
            `linear-gradient(${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 50% 0,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 50% 100%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
          backgroundSize: "100% 40px, 100% 40px, 100% 14px, 100% 14px",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "local, local, scroll, scroll",
          backgroundPosition:
            "0 var(--TableHeader-height), 0 100%, 0 var(--TableHeader-height), 0 100%",
          backgroundColor: "background.surface",
          zIndex: "1",
        }}
      >
        <Table stickyHeader>
          <thead >
            <tr>
              <th style={{textAlign:"center"}}>OrderId</th>
              <th style={{textAlign:"center"}}>Order</th>
              <th></th>
              <th style={{textAlign:"center"}}>Amount</th>
              <th style={{textAlign:"center"}}>Address</th>
              <th style={{textAlign:"center"}}>Status</th>
              <th style={{textAlign:"center"}}>Payment</th>
              <th style={{textAlign:"center"}}>Date</th>
            </tr>
          </thead>

          <tbody>
            {order.map((row) => <AdminOrderItem row={row}/>)}
          </tbody>
        </Table>
      </Sheet>:<center><h2>No Orders..</h2></center>}
    </div>
  );
}
