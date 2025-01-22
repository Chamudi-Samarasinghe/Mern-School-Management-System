// controllers/usersController.js
export const studentSignIn = async (req, res) => {
    try {
        res.status(200).json({ message: "Student sign in successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const teacherSignIn = async (req, res) => {
    try {
        res.status(200).json({ message: "Teacher sign in successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add this new function
export const adminSignIn = async (req, res) => {
    try {
        res.status(200).json({ message: "Admin sign in successful" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};