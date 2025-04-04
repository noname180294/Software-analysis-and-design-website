package com.example.itplatform_ver1

import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.graphics.drawable.GradientDrawable
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import androidx.core.content.ContextCompat
import androidx.fragment.app.Fragment
import com.google.android.flexbox.FlexboxLayout
import okhttp3.*
import org.json.JSONArray
import java.io.IOException

class ProfileFragment : Fragment() {

    private lateinit var flexSkills: FlexboxLayout
    private lateinit var btnLogout: Button
    private lateinit var txtName: TextView
    private lateinit var txtEmail: TextView
    private lateinit var sharedPreferences: SharedPreferences
    private val client = OkHttpClient()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        return inflater.inflate(R.layout.fragment_profile, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        flexSkills = view.findViewById(R.id.flexSkills)
        btnLogout = view.findViewById(R.id.btnLogout)
        txtName = view.findViewById(R.id.txtName)
        txtEmail = view.findViewById(R.id.txtEmail)

        sharedPreferences = requireActivity().getSharedPreferences("UserSession", Context.MODE_PRIVATE)

        // Fetch user data and check role
        fetchUserData()

        // Set up skills
        val skills = listOf("Android", "Kotlin", "Firebase", "React", "GraphQL", "Swift", "Node.js", "MongoDB", "GraphQL", "Python")
        val colors = listOf(
            R.color.skill_blue, R.color.skill_green, R.color.skill_orange,
            R.color.skill_purple, R.color.skill_red, R.color.skill_teal, R.color.skill_pink
        )

        skills.forEachIndexed { index, skill ->
            val colorRes = colors[index % colors.size]
            val skillChip = TextView(requireContext()).apply {
                text = skill
                textSize = 14f
                setTextColor(ContextCompat.getColor(requireContext(), R.color.white))
                setPadding(24, 12, 24, 12)
                background = getRoundedBackground(colorRes)
            }

            val params = FlexboxLayout.LayoutParams(
                FlexboxLayout.LayoutParams.WRAP_CONTENT,
                FlexboxLayout.LayoutParams.WRAP_CONTENT
            ).apply {
                setMargins(8, 8, 8, 8)
            }

            skillChip.layoutParams = params
            flexSkills.addView(skillChip)
        }

        btnLogout.setOnClickListener {
            handleLogout()
        }
    }

    private fun fetchUserData() {
        val email = sharedPreferences.getString("email", "") ?: return
        val role = sharedPreferences.getString("role", "")?.lowercase() ?: return
        val username = email.substringBefore("@").replaceFirstChar { it.uppercase() } // Capitalize first letter

        val request = Request.Builder()
            .url("https://itplatform.onrender.com/api/Accounts")
            .build()

        client.newCall(request).enqueue(object : Callback {
            override fun onFailure(call: Call, e: IOException) {
                activity?.runOnUiThread {
                    txtName.text = "Error loading username"
                    txtEmail.text = "Error loading email"
                }
            }

            override fun onResponse(call: Call, response: Response) {
                response.body?.string()?.let { responseBody ->
                    val accounts = JSONArray(responseBody)
                    for (i in 0 until accounts.length()) {
                        val account = accounts.getJSONObject(i)
                        if (account.getString("email") == email) {
                            activity?.runOnUiThread {
                                txtName.text = username // Show capitalized username
                                txtEmail.text = email // Show full email
                            }
                            fetchRoleSpecificData(role, email)
                            return
                        }
                    }
                    activity?.runOnUiThread {
                        txtName.text = "User not found"
                        txtEmail.text = email
                    }
                }
            }
        })
    }

    private fun fetchRoleSpecificData(role: String, email: String) {
        val apiUrl = when (role) {
            "freelancer" -> "https://itplatform.onrender.com/api/Freelancer"
            "client" -> "https://itplatform.onrender.com/api/Clients"
            else -> return
        }

        val request = Request.Builder()
            .url(apiUrl)
            .build()

        client.newCall(request).enqueue(object : Callback {
            override fun onFailure(call: Call, e: IOException) {
                activity?.runOnUiThread {
                    // Handle failure silently or show a toast if needed
                }
            }

            override fun onResponse(call: Call, response: Response) {
                response.body?.string()?.let { responseBody ->
                    val dataArray = JSONArray(responseBody)
                    for (i in 0 until dataArray.length()) {
                        val item = dataArray.getJSONObject(i)
                        if (item.optString("email") == email) {
                            activity?.runOnUiThread {
                                txtName.append(" ($role)") // Append role to username
                            }
                            return
                        }
                    }
                }
            }
        })
    }

    private fun getRoundedBackground(colorRes: Int): GradientDrawable {
        return GradientDrawable().apply {
            setColor(ContextCompat.getColor(requireContext(), colorRes))
            cornerRadius = 50f
        }
    }

    private fun handleLogout() {
        with(sharedPreferences.edit()) {
            remove("isLoggedIn")
            apply()
        }

        val intent = Intent(requireActivity(), LoginActivity::class.java)
        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        startActivity(intent)
    }
}