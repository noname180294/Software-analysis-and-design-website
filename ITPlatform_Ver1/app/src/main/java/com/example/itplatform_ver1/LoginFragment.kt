package com.example.itplatform_ver1

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.example.itplatform_ver1.databinding.FragmentLoginBinding
import com.google.android.material.snackbar.Snackbar
import okhttp3.*
import org.json.JSONArray
import java.io.IOException

class LoginFragment : Fragment() {
    private var _binding: FragmentLoginBinding? = null
    private val binding get() = _binding!!
    private val client = OkHttpClient()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentLoginBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.loginButton.setOnClickListener {
            val email = binding.usernameInput.text.toString().trim()
            val password = binding.passwordInput.text.toString().trim()
            authenticateUser(email, password)
        }

        binding.forgotPassword.setOnClickListener {
            Snackbar.make(binding.root, "Forgot Password clicked", Snackbar.LENGTH_SHORT).show()
        }
    }

    private fun authenticateUser(email: String, password: String) {
        val request = Request.Builder()
            .url("https://itplatform.onrender.com/api/Accounts")
            .build()

        client.newCall(request).enqueue(object : Callback {
            override fun onFailure(call: Call, e: IOException) {
                activity?.runOnUiThread {
                    Snackbar.make(binding.root, "Network error", Snackbar.LENGTH_SHORT).show()
                }
            }

            override fun onResponse(call: Call, response: Response) {
                response.body?.string()?.let { responseBody ->
                    val accounts = JSONArray(responseBody)
                    for (i in 0 until accounts.length()) {
                        val account = accounts.getJSONObject(i)
                        if (account.getString("email") == email && account.getString("password") == password) {
                            activity?.runOnUiThread {
                                val intent = Intent(activity, MainActivity::class.java)
                                startActivity(intent)
                                activity?.finish()
                            }
                            return
                        }
                    }
                    activity?.runOnUiThread {
                        Snackbar.make(binding.root, "Invalid username or password", Snackbar.LENGTH_SHORT).show()
                    }
                }
            }
        })
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}
