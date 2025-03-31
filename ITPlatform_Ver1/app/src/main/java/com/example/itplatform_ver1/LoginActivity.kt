package com.example.itplatform_ver1

import android.content.Intent
import android.content.SharedPreferences
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.itplatform_ver1.databinding.ActivityLoginBinding
import okhttp3.*
import org.json.JSONArray
import java.io.IOException

class LoginActivity : AppCompatActivity() {

    private lateinit var binding: ActivityLoginBinding
    private lateinit var sharedPref: SharedPreferences
    private val client = OkHttpClient()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)

        sharedPref = getSharedPreferences("UserSession", MODE_PRIVATE)

        binding.btnLogin.setOnClickListener {
            val email = binding.etEmail.text.toString()
            val password = binding.etPassword.text.toString()
            authenticateUser(email, password)
        }

        binding.tvRegister.setOnClickListener {
            val intent = Intent(this, RegisterActivity::class.java)
            startActivity(intent)
        }
    }

    private fun authenticateUser(email: String, password: String) {
        val request = Request.Builder()
            .url("https://itplatform.onrender.com/api/Accounts")
            .build()

        client.newCall(request).enqueue(object : Callback {
            override fun onFailure(call: Call, e: IOException) {
                runOnUiThread {
                    Toast.makeText(this@LoginActivity, "Network error", Toast.LENGTH_SHORT).show()
                }
            }

            override fun onResponse(call: Call, response: Response) {
                response.body?.string()?.let { responseBody ->
                    val accounts = JSONArray(responseBody)
                    for (i in 0 until accounts.length()) {
                        val account = accounts.getJSONObject(i)
                        if (account.getString("email") == email && account.getString("password") == password) {
                            runOnUiThread {
                                with(sharedPref.edit()) {
                                    putBoolean("isLoggedIn", true)
                                    putString("role", account.getString("role"))
                                    putString("email", email)
                                    apply()
                                }

                                val intent = Intent(this@LoginActivity, MainActivity::class.java)
                                intent.putExtra("showHome", true)
                                startActivity(intent)
                                finish()
                            }
                            return
                        }
                    }
                    runOnUiThread {
                        Toast.makeText(this@LoginActivity, "Invalid email or password", Toast.LENGTH_SHORT).show()
                    }
                }
            }
        })
    }
}
