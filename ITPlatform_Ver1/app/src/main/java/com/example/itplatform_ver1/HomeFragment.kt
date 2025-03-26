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

        val recyclerView: RecyclerView = view.findViewById(R.id.recyclerViewJobs)
        recyclerView.layoutManager = LinearLayoutManager(requireContext())

        val jobList = listOf(
            Job("Web Developer", "ABC Corp", "$1000 - $2000"),
            Job("Data Scientist", "XYZ Ltd", "$1500 - $2500"),
            Job("Mobile App Dev", "TechSoft", "$1200 - $2200")
        )

        recyclerView.adapter = JobAdapter(jobList)
        return view
    }
}

data class Job(val title: String, val company: String, val salary: String)