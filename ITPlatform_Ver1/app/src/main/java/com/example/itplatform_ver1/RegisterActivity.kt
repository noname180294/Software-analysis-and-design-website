package com.example.itplatform_ver1

import android.content.Intent
import android.os.Bundle
import android.widget.RadioButton
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.itplatform_ver1.databinding.ActivityRegisterBinding
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.*
import org.json.JSONObject
import java.io.IOException

class RegisterActivity : AppCompatActivity() {

    private lateinit var binding: ActivityRegisterBinding
    private val client = OkHttpClient()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityRegisterBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.btnRegister.setOnClickListener {
            val firstName = binding.etFirstName.text.toString().trim()
            val lastName = binding.etLastName.text.toString().trim()
            val email = binding.etEmail.text.toString().trim()
            val password = binding.etPassword.text.toString().trim()
            val selectedRoleId = binding.rgRole.checkedRadioButtonId

            if (firstName.isEmpty() || lastName.isEmpty() || email.isEmpty() || password.isEmpty() || selectedRoleId == -1) {
                Toast.makeText(this, "Please fill all fields", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            val selectedRole = findViewById<RadioButton>(selectedRoleId).text.toString()
            registerUser(firstName, lastName, email, password, selectedRole)
        }

        binding.tvLogin.setOnClickListener {
            startActivity(Intent(this, LoginActivity::class.java))
            finish()
        }
    }

    private fun registerUser(firstName: String, lastName: String, email: String, password: String, role: String) {
        // Create JSON object with user data
        val jsonObject = JSONObject().apply {
            put("firstName", firstName)
            put("lastName", lastName)
            put("email", email)
            put("password", password)
            put("role", role.lowercase())
        }

        // Create request body using the new extension function
        val requestBody = RequestBody.create(
            "application/json; charset=utf-8".toMediaType(),
            jsonObject.toString()
        )

        // Build POST request
        val request = Request.Builder()
            .url("https://itplatform.onrender.com/api/Accounts")
            .post(requestBody)
            .header("Content-Type", "application/json")
            .build()

        // Execute request
        client.newCall(request).enqueue(object : Callback {
            override fun onFailure(call: Call, e: IOException) {
                runOnUiThread {
                    Toast.makeText(
                        this@RegisterActivity,
                        "Network error: ${e.message}",
                        Toast.LENGTH_SHORT
                    ).show()
                }
            }

            override fun onResponse(call: Call, response: Response) {
                runOnUiThread {
                    if (response.isSuccessful) {
                        Toast.makeText(
                            this@RegisterActivity,
                            "Registration successful!",
                            Toast.LENGTH_SHORT
                        ).show()
                        val intent = Intent(this@RegisterActivity, LoginActivity::class.java)
                        startActivity(intent)
                        finish()
                    } else {
                        val errorBody = response.body?.string()
                        Toast.makeText(
                            this@RegisterActivity,
                            "Registration failed: ${errorBody ?: response.message}",
                            Toast.LENGTH_LONG
                        ).show()
                    }
                }
            }
        })
    }
}