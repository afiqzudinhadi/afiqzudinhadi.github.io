export default function NotFound() {
	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background: "#f8fafc",
				color: "#1e293b",
			}}
		>
			<h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>404</h1>
			<p style={{ fontSize: "1.5rem" }}>Page Not Found</p>
			<a
				href="/"
				style={{
					marginTop: "2rem",
					color: "#2563eb",
					textDecoration: "underline",
				}}
			>
				Go back home
			</a>
		</div>
	);
}
