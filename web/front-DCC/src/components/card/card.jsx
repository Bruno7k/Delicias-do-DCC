import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";

export default function cardComponent({ image, title, description, width }) {
	return (
		<Card
			sx={{
				border: "#2625223D solid 2px",
				boxShadow: "none",
				borderRadius: "24px",
				width: { width },
			}}>
			<CardActionArea sx={{ borderRadius: "0px" }}>
				<CardMedia
					component="img"
					height="234"
					src={image}
				/>
				<CardContent sx={{ backgroundColor: "#FFFBF2", textAlign: "left" }}>
					<Typography
						sx={{
							fontFamily: "Montserrat",
							fontWeight: "700",
							color: "#262522",
						}}
						gutterBottom
						variant="h5"
						component="div">
						{title}
					</Typography>
					<Typography
						variant="body2"
						sx={{
							color: "#262522",
							fontFamily: "Roboto",
							fontSize: "16px",
							fontWeight: "300",
						}}>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions
				sx={{
					justifyContent: "end",
					backgroundColor: "#FFFBF2",
				}}>
				<Button
					sx={{
						width: "107px",
						height: "38px",
						borderRadius: 24,
						color: "#262522",
						borderColor: "#262522",
					}}
					size="small"
					color="primary"
					variant="outlined">
					CONFIRA
				</Button>
			</CardActions>
		</Card>
	);
}
