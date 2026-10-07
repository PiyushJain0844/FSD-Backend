const form = document.getElementById("requestForm");
const requestsList = document.getElementById("requestsList");

// Get all requests
async function getRequests() {

    try {

        const response = await fetch("/api/requests");

        const requests = await response.json();

        displayRequests(requests);

    } catch (error) {

        console.error("Error:", error);

    }
}


// Display requests
function displayRequests(requests) {

    requestsList.innerHTML = "";

    if (requests.length === 0) {

        requestsList.innerHTML =
            '<p class="no-requests">No requests submitted yet.</p>';

        return;
    }

    requests.forEach(request => {

        const card = document.createElement("div");

        card.className = "request-card";

        card.innerHTML = `
            <h3>${request.category}</h3>

            <p>
                <strong>Student:</strong>
                ${request.studentName}
            </p>

            <p>
                <strong>Email:</strong>
                ${request.email}
            </p>

            <p>
                <strong>Description:</strong>
                ${request.description}
            </p>

            <p class="priority">
                <strong>Priority:</strong>
                ${request.priority}
            </p>

            <div class="actions">

                <button
                    class="edit-btn"
                    onclick="editRequest(${request.id})"
                >
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteRequest(${request.id})"
                >
                    Delete
                </button>

            </div>
        `;

        requestsList.appendChild(card);

    });
}


// Submit new request
form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const requestData = {

        studentName:
            document.getElementById("studentName").value,

        email:
            document.getElementById("email").value,

        category:
            document.getElementById("category").value,

        description:
            document.getElementById("description").value,

        priority:
            document.getElementById("priority").value
    };


    try {

        const response = await fetch("/api/requests", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(requestData)

        });


        if (!response.ok) {
            throw new Error("Failed to submit request");
        }


        form.reset();

        getRequests();

    } catch (error) {

        console.error("Error:", error);

    }

});


// Update request
async function editRequest(id) {

    try {

        // First get the existing request
        const response =
            await fetch(`/api/requests/${id}`);

        const request = await response.json();


        // Ask for updated values
        const studentName =
            prompt("Student Name:", request.studentName);

        if (studentName === null) return;


        const email =
            prompt("Email:", request.email);

        if (email === null) return;


        const category =
            prompt("Category:", request.category);

        if (category === null) return;


        const description =
            prompt("Problem Description:", request.description);

        if (description === null) return;


        const priority =
            prompt(
                "Priority (Low / Medium / High):",
                request.priority
            );

        if (priority === null) return;


        const updatedRequest = {

            studentName: studentName,

            email: email,

            category: category,

            description: description,

            priority: priority
        };


        // PUT request
        const updateResponse = await fetch(
            `/api/requests/${id}`,
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(updatedRequest)
            }
        );


        if (!updateResponse.ok) {
            throw new Error("Failed to update request");
        }


        getRequests();

    } catch (error) {

        console.error("Error:", error);

    }

}


// Delete request
async function deleteRequest(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this request?");

    if (!confirmDelete) {
        return;
    }


    try {

        const response = await fetch(
            `/api/requests/${id}`,
            {
                method: "DELETE"
            }
        );


        if (!response.ok) {
            throw new Error("Failed to delete request");
        }


        getRequests();

    } catch (error) {

        console.error("Error:", error);

    }

}


// Load requests when page opens
getRequests();