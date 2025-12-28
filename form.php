<?php
include('connection.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eatwell Registration</title>
    <link rel="stylesheet" href="formstyle.css">
</head>
<body>
    <div class="container">
        <h2> Register here</h2>
        <form action="#" method ="POST" class="registration-form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>

            <label for="phone">Phone Number:</label>
            <input type="number" id="phone" name="phone" placeholder="Enter your phone number" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>

            <label for="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required>

            <label for="food-preference">Food Preference:</label>
            <select id="preference" name="preference" required>
                <option value="veg">Vegetarian</option>
                <option value="non-veg">Non-Vegetarian</option>
                <option value="vegan">Vegan</option>
            </select>

            <button type="submit" name="submit">Register</button>
        </form>
    </div>

<?php
if (isset($_POST['submit'])) { // Corrected $_POST
    $username = $_POST['username'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $preference = $_POST['preference'];
    
    // Insert data into the database
    $sql = "INSERT INTO register (username, email, phone, password, preference) 
    VALUES ('$username', '$email', '$phone', '$password', '$preference')";
    $success = mysqli_query($conn, $sql); // Corrected $success

    if ($success) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}
?>
</body>
</html>
