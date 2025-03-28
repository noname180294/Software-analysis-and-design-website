package com.example.itplatform_ver1

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.example.itplatform_ver1.databinding.FragmentProfileBinding

class ProfileFragment : Fragment() {
    private var _binding: FragmentProfileBinding? = null
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentProfileBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // Populate sample data
        binding.profileName.text = "Demo"
        binding.profileTitle.text = "Android Developer"
        binding.profileEmail.text = "demo@example.com"
        binding.profileBio.text = "5+ years in mobile development."

        binding.editProfileButton.setOnClickListener {
            // Handle edit action
        }

        binding.logoutButton.setOnClickListener {
            // Handle logout
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}