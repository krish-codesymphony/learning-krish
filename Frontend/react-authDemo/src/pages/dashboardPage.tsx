import { useEffect, useState } from "react";

function DashboardPage() {
  const [userDetails, setUserDetails] = useState();
  const token = localStorage.getItem("token");
  const currentUser = JSON.parse(localStorage.getItem("user") as string);

  useEffect(() => {
    fetch(`http://localhost:3000/user/${currentUser?.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUserDetails(data))
      .catch((error) => console.log(error));
  }, [currentUser, token]);

  return (
    <div className="dashboardPage">
      {userDetails && (
        <div>
          <p>Username: {userDetails.username}</p>
          <p>Role: {userDetails.role}</p>
          <p>FirstName: {userDetails.personalDetails.firstName}</p>
          <p>LastName: {userDetails.personalDetails.lastName}</p>
          <p>Email: {userDetails.personalDetails.email}</p>
          <p>Phone: {userDetails.personalDetails.phone}</p>
          <p>Gender: {userDetails.personalDetails.gender}</p>
          <p>DoB: {userDetails.personalDetails.dob}</p>
          <p>Address: {userDetails.personalDetails.address}</p>
          <p>City: {userDetails.personalDetails.city}</p>
          <p>State: {userDetails.personalDetails.state}</p>
          <p>Country: {userDetails.personalDetails.country}</p>
          <p>Department: {userDetails.employmentDetails.department}</p>
          <p>Salary: {userDetails.employmentDetails.salary}</p>
          <p>Date Joined: {userDetails.employmentDetails.dateJoined}</p>
        </div>
      )}
    </div>
  );
}
export default DashboardPage;
