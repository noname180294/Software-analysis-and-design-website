package com.example.itplatform_ver1

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

class HomeFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val view = inflater.inflate(R.layout.fragment_home, container, false)

        val recyclerViewJobs: RecyclerView = view.findViewById(R.id.recyclerViewJobs)
        recyclerViewJobs.layoutManager = LinearLayoutManager(requireContext())
        val jobList = listOf(
            Job("Web Developer", "ABC Corp", "$1000 - $2000"),
            Job("Data Scientist", "XYZ Ltd", "$1500 - $2500"),
            Job("Mobile App Developer", "TechSoft", "$1200 - $2200"),
            Job("UI/UX Designer", "DesignStudio", "$1100 - $2100"),
            Job("System Analyst", "InfoTech", "$1300 - $2300")
        )
        recyclerViewJobs.adapter = JobAdapter(jobList)

        val recyclerViewPackages: RecyclerView = view.findViewById(R.id.recyclerViewPackages)
        recyclerViewPackages.layoutManager = LinearLayoutManager(requireContext(), LinearLayoutManager.HORIZONTAL, false)
        val packageList = listOf(
            Package("Basic Package", "Includes basic features", "$500"),
            Package("Standard Package", "Includes standard features", "$1000"),
            Package("Premium Package", "Includes all features", "$2000"),
            Package("Enterprise Package", "Customized solutions", "$3000"),
            Package("Ultimate Package", "All features with priority support", "$4000")
        )
        recyclerViewPackages.adapter = PackageAdapter(packageList)
        return view
    }
}