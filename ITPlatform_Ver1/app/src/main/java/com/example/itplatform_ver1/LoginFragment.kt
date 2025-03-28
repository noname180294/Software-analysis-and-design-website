package com.example.itplatform_ver1

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.example.itplatform_ver1.databinding.FragmentLoginBinding
import com.google.android.material.snackbar.Snackbar

class LoginFragment : Fragment() {
    private var _binding: FragmentLoginBinding? = null
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentLoginBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // Login button click listener
        binding.loginButton.setOnClickListener {
            val username = binding.usernameInput.text.toString().trim()
            val password = binding.passwordInput.text.toString().trim()

            if (validateLogin(username, password)) {
                // Navigate to MainActivity on success
                val intent = Intent(activity, MainActivity::class.java)
                startActivity(intent)
                activity?.finish() // Close LoginFragment/activity
            } else {
                // Show error message
                Snackbar.make(binding.root, "Invalid username or password", Snackbar.LENGTH_SHORT).show()
            }
        }

        // Optional: Forgot password click listener
        binding.forgotPassword.setOnClickListener {
            Snackbar.make(binding.root, "Forgot Password clicked", Snackbar.LENGTH_SHORT).show()
        }
    }

    private fun validateLogin(username: String, password: String): Boolean {
        // Mock credentials
        val mockUsername = "demo"
        val mockPassword = "1234"
        return username == mockUsername && password == mockPassword
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}