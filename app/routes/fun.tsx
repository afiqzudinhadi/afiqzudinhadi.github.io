import { useNavigate } from "react-router-dom";

export default function WipPage() {
	const navigate = useNavigate();

	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background: "#f5f5f5",
			}}
		>
			<h1 style={{ fontSize: "3rem", color: "#333" }}>
				🚧 Work In Progress 🚧
			</h1>
			<p style={{ fontSize: "1.25rem", color: "#666" }}>
				This page is currently under construction. Please check back soon!
			</p>
			<button
				style={{
					marginTop: "2rem",
					padding: "0.75rem 1.5rem",
					fontSize: "1rem",
					borderRadius: "5px",
					border: "none",
					background: "#333",
					color: "#fff",
					cursor: "pointer",
				}}
				onClick={() => navigate(-1)}
			>
				Go Back
			</button>
		</div>
	);
}
