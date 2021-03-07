$(document).ready(function () {
    $('#example').DataTable({
        "ajax": {
            "url": "data.json",
            "dataSrc": ""
        },
        "columns": [
            { title: "Name" },
            { title: "Position" },
            { title: "Office" },
            { title: "Extn." },
            { title: "Start date" },
            { title: "Salary" }
        ]
    });
});
