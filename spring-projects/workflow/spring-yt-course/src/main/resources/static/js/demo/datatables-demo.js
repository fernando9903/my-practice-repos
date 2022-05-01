// Call the dataTables jQuery plugin
$(document).ready(function() {

	getUsers();

	$('#dataTable').DataTable();
});

const getUsers = () => {
	fetch('http://localhost:8080/users')
		.then(response => response.json())
		.then(data => {

			let tableRows = '';
			data.forEach(user => {
				tableRows += `<tr>
					<td>${user.id}</td>
					<td>${user.name + user.lastName}</td>
					<td>${user.email}</td>
					<td>
						<a href="#" class="btn btn-danger btn-circle">
							<i class="fas fa-trash"></i>
						</a>
					</td>
					</tr>`;
			});

			document.querySelector('#dataTable tbody').innerHTML = tableRows;
		});
}