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

class ProfileFragment : Fragment() {

    private lateinit var flexSkills: FlexboxLayout
    private lateinit var btnLogout: Button
    private lateinit var sharedPreferences: SharedPreferences

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

        sharedPreferences = requireActivity().getSharedPreferences("UserSession", Context.MODE_PRIVATE)

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
