package com.example.itplatform_ver1

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

data class Job(val title: String, val company: String, val salary: String)

class JobAdapter(private val jobs: List<Job>) : RecyclerView.Adapter<JobAdapter.JobViewHolder>() {

    class JobViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val title: TextView = view.findViewById(R.id.jobTitle)
        val company: TextView = view.findViewById(R.id.jobCompany)
        val salary: TextView = view.findViewById(R.id.jobSalary)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): JobViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_job, parent, false)
        return JobViewHolder(view)
    }

    override fun onBindViewHolder(holder: JobViewHolder, position: Int) {
        val job = jobs[position]
        holder.title.text = job.title
        holder.company.text = job.company
        holder.salary.text = job.salary
    }

    override fun getItemCount() = jobs.size
}