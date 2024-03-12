import React from "react";

function RequestForm() {
	return (
		<div>
			<h2>Book Our Service</h2>
			<form>
				<label>
					Name:
					<input type="text" name="name" />
				</label>
				<label>
					Email:
					<input type="email" name="email" />
				</label>
				<label>
					Event Date:
					<input type="date" name="date" />
				</label>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default RequestForm;
