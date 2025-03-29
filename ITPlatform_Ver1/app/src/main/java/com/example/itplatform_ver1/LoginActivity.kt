package com.example.itplatform_ver1

import android.content.Intent
import android.content.SharedPreferences
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.itplatform_ver1.databinding.ActivityLoginBinding

class LoginActivity : AppCompatActivity() {

    private lateinit var binding: ActivityLoginBinding
    private lateinit var sharedPref: SharedPreferences

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)

        sharedPref = getSharedPreferences("UserSession", MODE_PRIVATE)

        binding.btnLogin.setOnClickListener {
            val email = binding.etEmail.text.toString()
            val password = binding.etPassword.text.toString()

            if (validateCredentials(email, password)) {
                with(sharedPref.edit()) {
                    putBoolean("isLoggedIn", true)
                    apply()
                }

                val intent = Intent(this, MainActivity::class.java)
                intent.putExtra("showHome", true)
                startActivity(intent)
                finish()
            } else {
                Toast.makeText(this, "Invalid email or password", Toast.LENGTH_SHORT).show()
            }
        }

        binding.tvRegister.setOnClickListener {
            val intent = Intent(this, RegisterActivity::class.java)
            startActivity(intent)
        }
    }

    private fun validateCredentials(email: String, password: String): Boolean {
        return email == "freelancer@example.com" && password == "password123" // Dummy check
    }
}
