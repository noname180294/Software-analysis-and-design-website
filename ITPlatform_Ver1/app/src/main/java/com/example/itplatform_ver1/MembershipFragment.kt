package com.example.itplatform_ver1

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import com.example.itplatform_ver1.databinding.FragmentMembershipBinding
import com.google.android.material.tabs.TabLayoutMediator

class MembershipFragment : Fragment() {
    private var _binding: FragmentMembershipBinding? = null
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentMembershipBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val plans = getSamplePlans()
        binding.membershipPager.adapter = MembershipAdapter(plans)

        TabLayoutMediator(binding.dotsIndicator, binding.membershipPager) { tab, position ->
            tab.text = plans[position].title
        }.attach()
    }

    private fun getSamplePlans(): List<MembershipPlan> {
        return listOf(
            MembershipPlan("Basic", "$9/month", "5 proposals/month"),
            MembershipPlan("Pro", "$19/month", "Unlimited proposals"),
            MembershipPlan("Elite", "$49/month", "Priority listing")
        )
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}
