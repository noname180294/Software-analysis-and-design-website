const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const BASE_URL = "https://itplatform.onrender.com/api";

// ✅ Hàm tạo API động
const createApiRoutes = (resourceName) => {
    app.get(`/${resourceName}`, async (req, res) => {
        try {
            const response = await axios.get(`${BASE_URL}/${resourceName}`);
            res.json(response.data);
        } catch (error) {
            res.status(error?.response?.status || 500).json({
                error: error?.response?.data || `Lỗi khi lấy dữ liệu từ ${resourceName}`,
            });
        }
    });

    app.post(`/${resourceName}`, async (req, res) => {
        try {
            const response = await axios.post(`${BASE_URL}/${resourceName}`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(error?.response?.status || 500).json({
                error: error?.response?.data || `Lỗi khi thêm vào ${resourceName}`,
            });
        }
    });

    app.put(`/${resourceName}/:id`, async (req, res) => {
        try {
            const response = await axios.put(`${BASE_URL}/${resourceName}/${req.params.id}`, req.body);
            res.json(response.data);
        } catch (error) {
            res.status(error?.response?.status || 500).json({
                error: error?.response?.data || `Lỗi khi cập nhật ${resourceName}`,
            });
        }
    });

    app.delete(`/${resourceName}/:id`, async (req, res) => {
        try {
            await axios.delete(`${BASE_URL}/${resourceName}/${req.params.id}`);
            res.json({ message: `✅ Xóa ${resourceName} thành công!` });
        } catch (error) {
            res.status(error?.response?.status || 500).json({
                error: error?.response?.data || `Lỗi khi xóa ${resourceName}`,
            });
        }
    });
};

// ✅ Danh sách API cần tạo
const resources = [
    "Accounts", "Applications", "Certifications", "Clients", "ExpertiseProfiles",
    "Freelancer", "Locations", "Milestones", "Packages", "Projects",
    "SkillInProfiles", "SkillRequirements", "Skills", "Submittions",
    "Subscriptions", "WeatherForecast"
];

// ✅ Tạo API cho tất cả các resource
resources.forEach(createApiRoutes);

// 🔹 Kiểm tra server
app.get("/", (req, res) => {
    res.send("🚀 Server API đang chạy!");
});

// 🔹 Khởi động server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server đang chạy tại: http://localhost:${PORT}`));